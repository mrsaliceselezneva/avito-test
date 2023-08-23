import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectStatus, setLinkStatus } from "store/slices/menuSlice";
import styles from "./styles.module.scss";

const View = (props) => {
    const { status } = props;
    const { selectStatus } = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();

    const className = selectStatus === status.title ? styles.status_select : styles.status;
    return (
        <div
            className={className}
            onClick={() => {
                dispatch(setSelectStatus(status.title));
                dispatch(setLinkStatus(`status=${status.type}`));
            }}
        >
            {status.title}
        </div>
    );
};

export default View;
