import React from "react";
import { FiX, FiArrowLeftCircle, FiTrash2 } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const {
        show,
        onClose,
        item,
        isOwner,
        toClose,
        toDelete,
        toOpen,
        closeItem,
        deleteItem,
        onDelete,
    } = props;

    const isCloseItem = (block) => {
        return !closeItem && block;
    };

    const closeOrBack = () => {
        if (!closeItem && !deleteItem)
            return (
                <>
                    <div className={styles.modal__content__body__top__close} onClick={toClose}>
                        закрыть сделку
                    </div>
                    <div className={styles.modal__content__body__top__delete} onClick={toDelete}>
                        удалить
                        <FiTrash2 className={styles.modal__content__body__top__delete__icon} />
                    </div>
                </>
            );
        return (
            <div className={styles.modal__content__body__top__close} onClick={toOpen}>
                <FiArrowLeftCircle className={styles.modal__content__body__top__close__icon} />
                назад
            </div>
        );
    };

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <div className={styles.modal__content__body__top}>
                            {isOwner && closeOrBack()}
                            <FiX
                                className={styles.modal__content__body__top__exit}
                                onClick={onClose}
                            />
                        </div>
                        {deleteItem ? (
                            <div className={styles.modal__content__body__delete}>
                                Вы действительно хотите удалить товар?
                                <div
                                    className={styles.modal__content__body__delete__button}
                                    onClick={onDelete}
                                >
                                    удалить
                                    <FiTrash2
                                        className={
                                            styles.modal__content__body__delete__button__icon
                                        }
                                    />
                                </div>
                            </div>
                        ) : (
                            <>
                                {isCloseItem(
                                    <img
                                        src={`img/${item.category}.jpeg`}
                                        alt={item.title}
                                        className={styles.modal__content__body__img}
                                    />,
                                )}
                                <div className={styles.modal__content__body__info}>
                                    <div className={styles.modal__content__body__info__title}>
                                        название
                                    </div>
                                    <div className={styles.modal__content__body__info__text}>
                                        {item.title}
                                    </div>
                                </div>
                                <div className={styles.modal__content__body__price}>
                                    <div className={styles.modal__content__body__price__title}>
                                        цена
                                    </div>
                                    <div className={styles.modal__content__body__price__text}>
                                        {item.price} ₽
                                    </div>
                                </div>
                                {isCloseItem(
                                    <div className={styles.modal__content__body__info}>
                                        <div className={styles.modal__content__body__info__title}>
                                            продавец
                                        </div>
                                        <div className={styles.modal__content__body__info__text}>
                                            {item.user}
                                        </div>
                                    </div>,
                                )}
                                {isCloseItem(
                                    <div className={styles.modal__content__body__info}>
                                        <div className={styles.modal__content__body__info__title}>
                                            email
                                        </div>
                                        <div className={styles.modal__content__body__info__text}>
                                            {item.email}
                                        </div>
                                    </div>,
                                )}
                                {isCloseItem(
                                    <div className={styles.modal__content__body__description}>
                                        <div
                                            className={
                                                styles.modal__content__body__description__title
                                            }
                                        >
                                            описание
                                        </div>
                                        <div
                                            className={
                                                styles.modal__content__body__description__text
                                            }
                                        >
                                            {item.description}
                                        </div>
                                    </div>,
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default View;
