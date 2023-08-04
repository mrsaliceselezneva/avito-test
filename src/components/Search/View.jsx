import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            {false ? (
                <input className={styles.wrapper__input} type='search' placeholder='Поиск...' />
            ) : (
                <>
                    <input
                        className={styles.wrapper__adaptive__input}
                        type='search'
                        placeholder='Поиск...'
                    />
                    <FiFilter className={styles.wrapper__adaptive__filter} />
                    <FiSearch className={styles.wrapper__adaptive__search} />
                </>
            )}
        </div>
    );
};

export default View;
