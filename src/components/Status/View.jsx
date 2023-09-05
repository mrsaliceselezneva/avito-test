import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { status, ifStatus, onClick } = props;

    const className = ifStatus ? styles.status_select : styles.status;
    return (
        <div className={className} onClick={onClick}>
            {status.title}
        </div>
    );
};

export default View;
