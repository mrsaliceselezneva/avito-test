import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, isLogout, onClose, profile, logIn, logOut, isEmptyProfile } = props;

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <FiX className={styles.modal__content__body__exit} onClick={onClose} />
                        {isEmptyProfile ? (
                            <div onClick={logIn} className={styles.modal__content__body__login}>
                                <FcGoogle className={styles.modal__content__body__login__icon} />
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
