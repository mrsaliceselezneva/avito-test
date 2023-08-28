import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { isEmpty } from "api/utils";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setClearStatus } from "store/slices/menuSlice";
import { setCreateProfile, setDeleteProfile } from "store/slices/profileSlice";
import { setClearCategory } from "store/slices/sidebarSlice";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, isLogout, onClose, setShowAuthorization, setIsLogout } = props;

    const [user, setUser] = useState([]);

    const { profile } = useSelector((state) => state.profileReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEmpty(profile) && !isEmpty(user)) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    },
                )
                .then((result) => {
                    setCreateProfile(result.data);
                    dispatch(setCreateProfile(result.data));
                })
                .catch((error) => console.log(error));
        }
    }, [dispatch, profile, user]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    const logOut = () => {
        googleLogout();
        dispatch(setDeleteProfile());
        dispatch(setClearCategory());
        dispatch(setClearStatus());
        setShowAuthorization(false);
        setIsLogout(false);
        setUser([]);
    };

    const logIn = () => {
        login();
        setShowAuthorization(false);
        setIsLogout(false);
    };

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <FiX className={styles.modal__content__body__exit} onClick={onClose} />
                        {isEmpty(profile) ? (
                            <div onClick={logIn} className={styles.modal__content__body__login}>
                                <FcGoogle className={styles.modal__content__body__login__icon} />{" "}
                                Войти при помощи Google
                            </div>
                        ) : (
                            <>
                                {isLogout ? (
                                    <div
                                        onClick={logOut}
                                        className={styles.modal__content__body__login}
                                    >
                                        <FcGoogle
                                            className={styles.modal__content__body__login__icon}
                                        />{" "}
                                        Выйти
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            src={profile.picture}
                                            alt='user image'
                                            className={styles.modal__content__body__img}
                                        />
                                        <div className={styles.modal__content__body__info}>
                                            <div
                                                className={styles.modal__content__body__info__title}
                                            >
                                                имя
                                            </div>
                                            <div
                                                className={styles.modal__content__body__info__text}
                                            >
                                                {profile.name}
                                            </div>
                                        </div>
                                        <div className={styles.modal__content__body__info}>
                                            <div
                                                className={styles.modal__content__body__info__title}
                                            >
                                                email
                                            </div>
                                            <div
                                                className={styles.modal__content__body__info__text}
                                            >
                                                {profile.email}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default View;
