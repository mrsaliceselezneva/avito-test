import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRequest } from "store/slices/searchSlice";
import styles from "./styles.module.scss";

const View = () => {
    const dispatch = useDispatch();
    const { searchRequest } = useSelector((state) => state.searchReducer);

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.wrapper__button}
                onClick={() => {
                    dispatch(setRequest(searchRequest));
                }}
            >
                Найти
            </button>
        </div>
    );
};

export default View;
