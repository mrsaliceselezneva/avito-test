import React, { useState } from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose } = props;
    const listMenu = ["активные", "закрытые", "архивные"];
    const [selectMenu, useSelectMenu] = useState("");

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content}>
                    <div
                        className={styles.modal__content__menu}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {listMenu.map((menu) => (
                            <div
                                className={
                                    selectMenu === menu
                                        ? styles.modal__content__menu__category_select
                                        : styles.modal__content__menu__category
                                }
                                key={menu}
                                onClick={() => useSelectMenu(menu)}
                            >
                                {menu}
                            </div>
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
