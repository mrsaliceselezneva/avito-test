import Category from "components/Category";
import React from "react";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose, listCategory } = props;

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__sidebar}>
                        <FiX className={styles.modal__content__sidebar__exit} onClick={onClose} />
                        {listCategory.map((category) => (
                            <Category key={category.title} category={category} />
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
