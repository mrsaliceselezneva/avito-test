import Status from "components/Status";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose } = props;
    const listMenu = ["активные", "закрытые", "архивные"];

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content}>
                    <div
                        className={styles.modal__content__menu}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {listMenu.map((status) => (
                            <Status key={status} status={status} />
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
