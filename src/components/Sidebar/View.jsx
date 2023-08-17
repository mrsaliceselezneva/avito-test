import Category from "components/Category";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const View = () => {
    const listCategory = ["техника", "игрушки", "для животных", "одежда", "посуда"];
    const { selectFilter } = useSelector((state) => state.sidebarReducer);

    return (
        <div className={styles.sidebar}>
            {listCategory.map((category) => (
                <Category key={category} category={category} select={category === selectFilter} />
            ))}
        </div>
    );
};

export default View;
