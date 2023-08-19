import { sendRequest } from "api/utils";
import Category from "components/Category";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

const View = () => {
    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        sendRequest("/categories", "get").then((data) => {
            setListCategory(data.map((category) => category.title));
            console.log(data.map((category) => category.title));
        });
    }, []);

    return (
        <div className={styles.sidebar}>
            {listCategory.map((category) => (
                <Category key={category} category={category} />
            ))}
        </div>
    );
};

export default View;
