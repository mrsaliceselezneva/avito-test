import React from "react";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <input className={styles.wrapper__input} type='search' placeholder='Поиск...' />
        </div>
    );
};

export default View;
