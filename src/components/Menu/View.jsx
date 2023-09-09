import Status from "components/Status";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, listMenu } = props;

    if (show) {
        return (
            <ul className={styles.menu} onClick={(event) => event.stopPropagation()}>
                {listMenu.map((status) => (
                    <Status key={status.title} status={status} />
                ))}
            </ul>
        );
    } else {
        return null;
    }
};

export default View;
