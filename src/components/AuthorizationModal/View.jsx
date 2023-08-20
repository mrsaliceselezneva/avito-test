import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose } = props;

    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        if (user) {
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
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <FiX className={styles.modal__content__body__exit} onClick={onClose} />
                        {profile ? (
                            <div>
                                <img src={profile.picture} alt='user image' />
                                <h3>User Logged in</h3>
                                <p>Name: {profile.name}</p>
                                <p>Email Address: {profile.email}</p>
                                <br />
                                <br />
                                <button onClick={logOut}>Log out</button>
                            </div>
                        ) : (
                            <div
                                onClick={() => login()}
                                className={styles.modal__content__body__login}
                            >
                                <FcGoogle className={styles.modal__content__body__login__icon} />{" "}
                                Sign in with Google
                            </div>
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
