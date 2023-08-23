import React from "react";
import { FiCircle, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectCategory, setLinkCategory, setClear } from "store/slices/sidebarSlice";
import styles from "./styles.module.scss";

const View = (props) => {
    const { category } = props;
    const { selectCategory } = useSelector((state) => state.sidebarReducer);
    const dispatch = useDispatch();

    if (category.type === "all") {
        return (
            <div
                className={styles.category}
                onClick={() => {
                    dispatch(setClear());
                    dispatch(setSelectCategory(category.title));
                }}
            >
                {category.title === selectCategory ? (
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
                    dispatch(setSelectCategory(category.title));
                    dispatch(setLinkCategory(`type=${category.type}`));
                }}
            >
                {category.title === selectCategory ? (
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
