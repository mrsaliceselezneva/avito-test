import React from "react";
import { FiCircle, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setSelectFilter } from "store/slices/sidebarSlice";
import styles from "./styles.module.scss";

const View = (props) => {
    const { category } = props;
    const { selectFilter } = useSelector((state) => state.sidebarReducer);
    const dispatch = useDispatch();

    return (
        <div
            className={styles.category}
            key={category}
            onClick={() => dispatch(setSelectFilter(category))}
        >
            {category === selectFilter ? (
                <FiCheck className={styles.category__input_focus} />
            ) : (
                <FiCircle className={styles.category__input} />
            )}
            {category}
        </div>
    );
};

export default View;
