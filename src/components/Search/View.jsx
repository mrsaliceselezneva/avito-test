import SidebarModal from "components/SidebarModal";
import React, { forwardRef } from "react";
import { FiFilter, FiSearch, FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = forwardRef((props, ref) => {
    const { onKeyDown, onClose, onOpen, search, show, clear, onChange, ifWidth } = props;

    return (
        <div className={styles.wrapper} onKeyDown={onKeyDown}>
            {ifWidth ? (
                <>
                    <input
                        ref={ref}
                        className={styles.wrapper__input}
                        type='search'
                        placeholder='Поиск...'
                        onChange={(event) => onChange(event)}
                    />
                    <div className={styles.wrapper__clear}>
                        <FiX className={styles.wrapper__clear__icon} onClick={clear} />
                    </div>
                </>
            ) : (
                <>
                    <input
                        ref={ref}
                        className={styles.wrapper__adaptive__input}
                        type='search'
                        placeholder='Поиск...'
                        onChange={(event) => onChange(event)}
                    />
                    <div className={styles.wrapper__adaptive__clear}>
                        <FiX className={styles.wrapper__adaptive__clear__icon} onClick={clear} />
                    </div>
                    <FiFilter className={styles.wrapper__adaptive__filter} onClick={onOpen} />
                    <SidebarModal show={show} onClose={onClose} />
                    <FiSearch className={styles.wrapper__adaptive__search} onClick={search} />
                </>
            )}
        </div>
    );
});

View.displayName = "Search";

export default View;
