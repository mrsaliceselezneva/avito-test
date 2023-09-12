import React from "react";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

const View = (props) => {
    const {
        show,
        onClose,
        listCategory,
        errorMessage,
        errorMessageDate,
        errorBackground,
        errorBorderColor,
        validateDate,
        onSubmit,
    } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const errorSpan = (
        <span className={styles.modal__content__body__form__error}>{errorMessage}</span>
    );

    const errorSpanDate = (
        <span className={styles.modal__content__body__form__error} data-testid='error-data'>
            {errorMessageDate}
        </span>
    );

    if (show) {
        return (
            <div className={styles.modal} onClick={onClose}>
                <div className={styles.modal__content} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.modal__content__body}>
                        <FiX className={styles.modal__content__body__exit} onClick={onClose} />
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={styles.modal__content__body__form}
                        >
                            <div className={styles.modal__content__body__form__block}>
                                <label className={styles.modal__content__body__form__block__label}>
                                    категория
                                </label>
                                <select
                                    {...register("category")}
                                    className={styles.modal__content__body__form__block__input}
                                >
                                    {listCategory.map((category) => (
                                        <option key={category.type}>{category.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.modal__content__body__form__block}>
                                <label
                                    style={errors.title && errorBackground}
                                    className={styles.modal__content__body__form__block__label}
                                >
                                    название
                                </label>
                                <input
                                    {...register("title", { required: true })}
                                    style={errors.title && errorBorderColor}
                                    className={styles.modal__content__body__form__block__input}
                                />
                            </div>
                            {errors.title && errorSpan}

                            <div className={styles.modal__content__body__form__block}>
                                <label
                                    style={errors.price && errorBackground}
                                    className={styles.modal__content__body__form__block__label}
                                >
                                    цена
                                </label>
                                <input
                                    {...register("price", { required: true })}
                                    style={errors.price && errorBorderColor}
                                    className={styles.modal__content__body__form__block__input}
                                    type='number'
                                    min='0'
                                    step='1'
                                />
                            </div>
                            {errors.price && errorSpan}

                            <div className={styles.modal__content__body__form__block}>
                                <label
                                    style={errors.description && errorBackground}
                                    className={styles.modal__content__body__form__block__label}
                                >
                                    описание
                                </label>
                                <input
                                    {...register("description")}
                                    className={styles.modal__content__body__form__block__input}
                                />
                            </div>

                            <div className={styles.modal__content__body__form__block}>
                                <label
                                    style={errors.date && errorBackground}
                                    className={styles.modal__content__body__form__block__label}
                                >
                                    дата закрытия
                                </label>
                                <input
                                    {...register("date", {
                                        required: true,
                                        validate: (value) => {
                                            return validateDate(value);
                                        },
                                    })}
                                    style={errors.date && errorBorderColor}
                                    className={styles.modal__content__body__form__block__input}
                                    type='date'
                                />
                            </div>
                            {errors.date && errorSpanDate}

                            <input
                                type='submit'
                                className={styles.modal__content__body__form__submit}
                                data-testid='submit'
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default View;
