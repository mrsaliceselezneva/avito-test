import React, { useState } from "react";
import styles from "./styles.module.scss";

const View = () => {
    const listMenu = ["активные", "закрытые", "архивные"];
    const [selectMenu, useSelectMenu] = useState("");

    return (
        <div className={styles.menu}>
            {listMenu.map((menu) => (
                <div
                    className={
                        selectMenu === menu ? styles.menu__category_select : styles.menu__category
                    }
                    key={menu}
                    onClick={() => useSelectMenu(menu)}
                >
                    {menu}
                </div>
            ))}
        </div>
    );
};

export default View;
