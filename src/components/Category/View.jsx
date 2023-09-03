import React from "react";
import { FiCircle, FiCheck } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { category, changeCategory, isSelectCategory } = props;

    return (
        <div className={styles.category} onClick={changeCategory}>
            {isSelectCategory ? (
                <FiCheck className={styles.category__input_focus} />
            ) : (
                <FiCircle className={styles.category__input} />
            )}
            {category.title}
        </div>
    );
};

export default View;
