import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectStatus } from "store/slices/menuSlice";
import styles from "./styles.module.scss";

const View = (props) => {
    const { status } = props;
    const { selectStatus } = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();

    const className = selectStatus === status ? styles.status_select : styles.status;

    return (
        <div className={className} key={status} onClick={() => dispatch(setSelectStatus(status))}>
            {status}
        </div>
    );
};

export default View;
