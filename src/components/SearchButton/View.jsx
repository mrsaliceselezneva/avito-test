import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { search } = props;

    return (
        <div className={styles.wrapper}>
            <button className={styles.wrapper__button} onClick={search}>
                Найти
            </button>
        </div>
    );
};

export default View;
