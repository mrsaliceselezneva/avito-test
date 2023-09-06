import Category from "components/Category";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { listCategory } = props;

    return (
        <div className={styles.sidebar}>
            {listCategory.map((category) => (
                <Category key={category.title} category={category} />
            ))}
        </div>
    );
};

export default View;
