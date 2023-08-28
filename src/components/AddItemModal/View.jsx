import React from "react";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose } = props;

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <FiX className={styles.modal__content__body__exit} onClick={onClose} />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default View;
