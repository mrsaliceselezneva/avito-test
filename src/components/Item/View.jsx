import React from "react";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.wrapper__img} src='img/lego.png' alt='lego' />
            <div className={styles.wrapper__description}>lego</div>
            <div className={styles.wrapper__price}>100 ₽</div>
        </div>
    );
};

export default View;
