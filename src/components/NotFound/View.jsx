import React from "react";
import styles from "./styles.module.scss";

const View = () => {
    const img = "img/notFound.jpg";

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__title}>Товары не найдены... Но у нас есть сова!</div>
            <img src={img} className={styles.wrapper__img} />
        </div>
    );
};

export default View;
