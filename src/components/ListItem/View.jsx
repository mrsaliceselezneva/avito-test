import Item from "components/Item";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { listItem } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {listItem.map((item) => (
                    <Item key={item.title + item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default View;
