import React from "react";
import { FiCircle, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectCategory, setLinkCategory, setClearCategory } from "store/slices/sidebarSlice";
import styles from "./styles.module.scss";

const View = (props) => {
    const { category } = props;
    const { selectCategory } = useSelector((state) => state.sidebarReducer);
    const dispatch = useDispatch();

    return (
        <div
            className={styles.category}
            onClick={() => {
                if (category.title === selectCategory) {
                    dispatch(setClearCategory());
                } else {
                    dispatch(setSelectCategory(category.title));
                    dispatch(setLinkCategory(`&type=${category.type}`));
                }
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
};

export default View;
