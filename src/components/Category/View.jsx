import React from "react";
import { FiCircle, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectFilter, setLinkFilter, setClear } from "store/slices/sidebarSlice";
import styles from "./styles.module.scss";

const View = (props) => {
    const { category } = props;
    const { selectFilter } = useSelector((state) => state.sidebarReducer);
    const dispatch = useDispatch();

    if (category.type === "all") {
        return (
            <div
                className={styles.category}
                onClick={() => {
                    dispatch(setClear());
                    dispatch(setSelectFilter(category.title));
                }}
            >
                {category.title === selectFilter ? (
                    <FiCheck className={styles.category__input_focus} />
                ) : (
                    <FiCircle className={styles.category__input} />
                )}
                {category.title}
            </div>
        );
    } else {
        return (
            <div
                className={styles.category}
                onClick={() => {
                    dispatch(setSelectFilter(category.title));
                    dispatch(setLinkFilter(`type=${category.type}`));
                }}
            >
                {category.title === selectFilter ? (
                    <FiCheck className={styles.category__input_focus} />
                ) : (
                    <FiCircle className={styles.category__input} />
                )}
                {category.title}
            </div>
        );
    }
};

export default View;
