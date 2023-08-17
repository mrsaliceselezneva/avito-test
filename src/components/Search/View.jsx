import { useWindowSize } from "api/utils";
import SidebarModal from "components/SidebarModal";
import React, { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = () => {
    const [show, useShow] = useState(false);

    return (
        <div className={styles.wrapper}>
            {useWindowSize() > 840 ? (
                <input className={styles.wrapper__input} type='search' placeholder='Поиск...' />
            ) : (
                <>
                    <input
                        className={styles.wrapper__adaptive__input}
                        type='search'
                        placeholder='Поиск...'
                    />
                    <FiFilter
                        className={styles.wrapper__adaptive__filter}
                        onClick={() => useShow(true)}
                    />
                    <SidebarModal show={show} onClose={() => useShow(false)} />
                    <FiSearch className={styles.wrapper__adaptive__search} />
                </>
            )}
        </div>
    );
};

export default View;
