import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

import styles from "./styles.module.scss";

const View = (props) => {
    const { name, phone, linkTelegram, linkVK } = props;

    return (
        <div className={styles.footer}>
            <div className={styles.footer__info}>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__wrapper__personal_info}>
                        <div className={styles.footer__wrapper__personal_info__fio}>{name}</div>
                        <div className={styles.footer__wrapper__personal_info__phone}>{phone}</div>
                    </div>

                    <a className={styles.footer__wrapper__background_icon} href={linkVK}>
                        <SlSocialVkontakte
                            className={styles.footer__wrapper__background_icon__icon}
                        />
                    </a>
                    <a className={styles.footer__wrapper__background_icon} href={linkTelegram}>
                        <FaTelegramPlane
                            className={styles.footer__wrapper__background_icon__icon}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default View;
