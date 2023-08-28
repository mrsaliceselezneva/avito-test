import React from "react";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { show, onClose, item } = props;

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <FiX className={styles.modal__content__body__exit} onClick={onClose} />

                        <img
                            src={`img/${item.type}.jpeg`}
                            alt={item.title}
                            className={styles.modal__content__body__img}
                        />
                        <div className={styles.modal__content__body__info}>
                            <div className={styles.modal__content__body__info__title}>название</div>
                            <div className={styles.modal__content__body__info__text}>
                                {item.title}
                            </div>
                        </div>
                        <div className={styles.modal__content__body__price}>
                            <div className={styles.modal__content__body__price__title}>цена</div>
                            <div className={styles.modal__content__body__price__text}>
                                {item.price} ₽
                            </div>
                        </div>
                        <div className={styles.modal__content__body__info}>
                            <div className={styles.modal__content__body__info__title}>продавец</div>
                            <div className={styles.modal__content__body__info__text}>
                                {item.user}
                            </div>
                        </div>
                        <div className={styles.modal__content__body__info}>
                            <div className={styles.modal__content__body__info__title}>email</div>
                            <div className={styles.modal__content__body__info__text}>
                                {item.email}
                            </div>
                        </div>
                        <div className={styles.modal__content__body__description}>
                            <div className={styles.modal__content__body__description__title}>
                                описание
                            </div>
                            <div className={styles.modal__content__body__description__text}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default View;
