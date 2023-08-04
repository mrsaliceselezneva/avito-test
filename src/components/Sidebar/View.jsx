import Category from "components/Category";
import React from "react";
import styles from "./styles.module.scss";

const View = () => {
    const listCategory = ["техника", "игрушки", "для животных", "одежда", "посуда"];

    return (
        <div className={styles.sidebar}>
            {listCategory.map((category) => (
                <Category key={category} category={category} />
            ))}
        </div>
    );
};

export default View;
