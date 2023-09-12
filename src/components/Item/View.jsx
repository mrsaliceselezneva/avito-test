import ItemModal from "components/ItemModal";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { item, showItem, onOpen, onClose, img } = props;

    return (
        <div className={styles.wrapper} onClick={onOpen} data-testid='item'>
            <img className={styles.wrapper__img} src={img} alt={item.title} />
            <div className={styles.wrapper__title}>{item.title}</div>
            <div className={styles.wrapper__close}>
                <div className={styles.wrapper__close__price}>{item.price} ₽</div>
                <div className={styles.wrapper__close__date}>{item.date}</div>
            </div>
            <ItemModal show={showItem} onClose={onClose} item={item} />
        </div>
    );
};

export default View;
