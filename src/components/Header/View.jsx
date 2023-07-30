import React from "react";
import { FiUser, FiLogOut, FiMenu } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <FiMenu className={styles.wrapper__header__icon} />
                <FiUser className={styles.wrapper__header__icon} />
                <FiLogOut className={styles.wrapper__header__icon} />
            </div>
        </div>
    );
};

export default View;
