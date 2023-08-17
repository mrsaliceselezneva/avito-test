import Category from "components/Category";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose } = props;
    const listCategory = ["техника", "игрушки", "для животных", "одежда", "посуда"];

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__sidebar}>
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
