import Menu from "components/Menu";
import React, { useState } from "react";
import { FiUser, FiLogOut, FiMenu } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = () => {
    const [show, useShow] = useState(false);
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                <FiMenu className={styles.wrapper__header__icon} onClick={() => useShow(true)} />
                <Menu show={show} onClose={() => useShow(false)} />
                <FiUser className={styles.wrapper__header__icon} />
                <FiLogOut className={styles.wrapper__header__icon} />
            </div>
        </div>
    );
};

export default View;
