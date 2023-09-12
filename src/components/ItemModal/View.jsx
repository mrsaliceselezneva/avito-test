import { useWindowSize } from "api/utils";
import CloseItemModal from "components/CloseItemModal";
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
        isStatusActive,
    } = props;

    const classNameLeftElemet = !isStatusActive
        ? styles.modal__content__body__top__close
        : styles.modal__content__body__top__delete;

    const isClose =
        item.status == "close" ? (
            <div className={styles.modal__content__body__price}>
                <div className={styles.modal__content__body__price__title}>дата</div>
                <div className={styles.modal__content__body__price__text}>{item.date}</div>
            </div>
        ) : null;

    const closeOrBack = () => {
        if (!closeItem && !deleteItem)
            return (
                <>
                    {isStatusActive && (
                        <div className={styles.modal__content__body__top__close} onClick={toClose}>
                            закрыть сделку
                        </div>
                    )}
                    <div className={classNameLeftElemet} onClick={toDelete}>
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

    const classNameExit = isOwner
        ? styles.modal__content__body__top__exit_owner
        : styles.modal__content__body__top__exit;

    const menu =
        useWindowSize() <= 600 ? (
            <>
                <FiX className={classNameExit} onClick={onClose} />
                {isOwner && closeOrBack()}
            </>
        ) : (
            <>
                {isOwner && closeOrBack()}
                <FiX className={classNameExit} onClick={onClose} />
            </>
        );
    if (show) {
        return (
            <div className={styles.modal} onClick={onClose} data-testid='item-modal'>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <div className={styles.modal__content__body__top}>{menu}</div>
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
                                {closeItem ? (
                                    <CloseItemModal item={item} />
                                ) : (
                                    <>
                                        <img
                                            src={`img/${item.category}.jpeg`}
                                            alt={item.title}
                                            className={styles.modal__content__body__img}
                                        />

                                        <div className={styles.modal__content__body__info}>
                                            <div
                                                className={styles.modal__content__body__info__title}
                                            >
                                                название
                                            </div>
                                            <div
                                                className={styles.modal__content__body__info__text}
                                            >
                                                {item.title}
                                            </div>
                                        </div>

                                        {isClose}

                                        <div className={styles.modal__content__body__price}>
                                            <div
                                                className={
                                                    styles.modal__content__body__price__title
                                                }
                                            >
                                                цена
                                            </div>
                                            <div
                                                className={styles.modal__content__body__price__text}
                                            >
                                                {item.price} ₽
                                            </div>
                                        </div>
                                        <div className={styles.modal__content__body__info}>
                                            <div
                                                className={styles.modal__content__body__info__title}
                                            >
                                                продавец
                                            </div>
                                            <div
                                                className={styles.modal__content__body__info__text}
                                            >
                                                {item.user}
                                            </div>
                                        </div>
                                        <div className={styles.modal__content__body__info}>
                                            <div
                                                className={styles.modal__content__body__info__title}
                                            >
                                                email
                                            </div>
                                            <div
                                                className={styles.modal__content__body__info__text}
                                            >
                                                {item.email}
                                            </div>
                                        </div>
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
                                        </div>
                                    </>
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
