import { sendRequest } from "api/utils";
import Category from "components/Category";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const View = () => {
    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        sendRequest("/categories", "get").then((data) => {
            setListCategory(data);
        });
    }, []);

    return (
        <div className={styles.sidebar}>
            {listCategory.map((category) => (
                <Category key={category.title} category={category} />
            ))}
        </div>
    );
};

export default View;
