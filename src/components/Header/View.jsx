import AuthorizationModal from "components/AuthorizationModal";
import Menu from "components/Menu";
import React, { useState } from "react";
import { FiUser, FiLogIn, FiLogOut, FiMenu } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = () => {
    const [showMenu, useShowMenu] = useState(false);
    const [showAuthorization, useShowAuthorization] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <FiMenu
                    className={styles.wrapper__header__icon}
                    onClick={() => useShowMenu(true)}
                />
                <Menu show={showMenu} onClose={() => useShowMenu(false)} />
                <FiUser className={styles.wrapper__header__icon} />
                <FiLogIn
                    className={styles.wrapper__header__icon}
                    onClick={() => useShowAuthorization(true)}
                />
                <AuthorizationModal
                    show={showAuthorization}
                    onClose={() => useShowAuthorization(false)}
                />
                <FiLogOut className={styles.wrapper__header__icon} />
            </div>
        </div>
    );
};

export default View;
