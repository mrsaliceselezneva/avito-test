import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { item } = props;
    return (
        <div className={styles.wrapper}>
            <img className={styles.wrapper__img} src='img/lego.png' alt={item.title} />
            <div className={styles.wrapper__description}>{item.title}</div>
            <div className={styles.wrapper__price}>{item.price} ₽</div>
        </div>
    );
};

export default View;
