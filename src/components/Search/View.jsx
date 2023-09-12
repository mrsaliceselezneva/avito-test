import SidebarModal from "components/SidebarModal";
import React, { forwardRef } from "react";
import { FiFilter, FiSearch, FiX, FiHome } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import styles from "./styles.module.scss";

const View = forwardRef((props, ref) => {
    const {
        onKeyDown,
        onClose,
        onOpen,
        search,
        show,
        clear,
        onChange,
        ifWidth,
        errorBorderColor,
        home,
    } = props;

    return (
        <div className={styles.wrapper} onKeyDown={onKeyDown}>
            <Tooltip anchorSelect='#home' place='bottom'>
                главная
            </Tooltip>
            <FiHome className={styles.wrapper__home} onClick={home} id='home' />
            <input
                ref={ref}
                style={errorBorderColor}
                className={styles.wrapper__input}
                type='search'
                placeholder='Поиск...'
                onChange={(event) => onChange(event)}
            />
            {ifWidth ? (
                <>
                    <div className={styles.wrapper__clear} style={errorBorderColor}>
                        <Tooltip anchorSelect='#clear' place='bottom'>
                            очистить
                        </Tooltip>
                        <FiX className={styles.wrapper__clear__icon} onClick={clear} id='clear' />
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.wrapper__adaptive__clear} style={errorBorderColor}>
                        <Tooltip anchorSelect='#clear' place='bottom'>
                            очистить
                        </Tooltip>
                        <FiX
                            className={styles.wrapper__adaptive__clear__icon}
                            onClick={clear}
                            id='clear'
                        />
                    </div>
                    <Tooltip anchorSelect='#category' place='bottom'>
                        категория
                    </Tooltip>
                    <FiFilter
                        className={styles.wrapper__adaptive__filter}
                        onClick={onOpen}
                        id='category'
                    />
                    <SidebarModal show={show} onClose={onClose} />
                    <Tooltip anchorSelect='#search' place='bottom'>
                        поиск
                    </Tooltip>
                    <FiSearch
                        className={styles.wrapper__adaptive__search}
                        onClick={search}
                        id='search'
                    />
                </>
            )}
        </div>
    );
});

View.displayName = "Search";

export default View;
