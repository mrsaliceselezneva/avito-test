import React, { forwardRef } from "react";
import styles from "./styles.module.scss";

const View = forwardRef((props, ref) => {
    return <div ref={ref} className={styles.map} />;
});

View.displayName = "Map";

export default View;
