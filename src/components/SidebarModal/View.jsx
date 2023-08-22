import { sendRequest } from "api/utils";
import Category from "components/Category";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose } = props;

    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        sendRequest("/categories", "get").then((data) => {
            setListCategory(data.map((category) => category.title));
        });
    }, []);

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__sidebar}>
                        <FiX className={styles.modal__content__sidebar__exit} onClick={onClose} />
                        {listCategory.map((category) => (
                            <Category key={category} category={category} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default View;
