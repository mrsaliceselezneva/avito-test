import ItemModal from "components/ItemModal";
import React, { useState } from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { item } = props;
    const [showItem, setShowItem] = useState(false);

    return (
        <div className={styles.wrapper} onClick={() => setShowItem(true)}>
            <img
                className={styles.wrapper__img}
                src={`img/${item.category}.jpeg`}
                alt={item.title}
            />
            <div className={styles.wrapper__title}>{item.title}</div>
            <div className={styles.wrapper__price}>{item.price} ₽</div>
            <ItemModal show={showItem} onClose={() => setShowItem(false)} item={item} />
        </div>
    );
};

export default View;
