import React, { useState } from "react";
import { FiSquare, FiCheck } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { category } = props;
    const [select, UseSelect] = useState(false);

    return (
        <div className={styles.category} key={category} onClick={() => UseSelect(!select)}>
            {select ? (
                <FiCheck className={styles.category__input_focus} />
            ) : (
                <FiSquare className={styles.category__input} />
            )}
            {category}
        </div>
    );
};

export default View;
