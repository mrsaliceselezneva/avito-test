import React from "react";
import { FiChevronsLeft, FiChevronsRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const View = (props) => {
    const { allLeft, allRight, oneLeft, oneRight, clickPage } = props;

    const { selectPage, firstPage, showPages } = useSelector((state) => state.paginationReducer);

    const listPages = Array.from({ length: showPages }, (_, i) => firstPage + i).map((element) => (
        <div
            key={element}
            onClick={() => clickPage(element)}
            className={
                selectPage === element
                    ? styles.wrapper__pagination__pages__select_block
                    : styles.wrapper__pagination__pages__block
            }
        >
            {element}
        </div>
    ));

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__pagination}>
                <div onClick={allLeft} className={styles.wrapper__pagination__arrow}>
                    <FiChevronsLeft />
                </div>
                <div onClick={oneLeft} className={styles.wrapper__pagination__arrow}>
                    <FiChevronLeft />
                </div>
                <div className={styles.wrapper__pagination__pages}>{listPages}</div>
                <div onClick={oneRight} className={styles.wrapper__pagination__arrow}>
                    <FiChevronRight />
                </div>
                <div onClick={allRight} className={styles.wrapper__pagination__arrow}>
                    <FiChevronsRight />
                </div>
            </div>
        </div>
    );
};

export default View;
