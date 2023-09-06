import Item from "components/Item";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { listItem, styleGrid } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list} style={styleGrid}>
                {listItem.map((item) => (
                    <Item key={item.title + item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default View;
