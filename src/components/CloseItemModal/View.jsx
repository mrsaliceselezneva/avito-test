import { YMaps } from "@pbe/react-yandex-maps";
import MapBlock from "components/MapBlock";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PiArrowBendRightDownBold, PiCurrencyRubBold } from "react-icons/pi";
import styles from "./styles.module.scss";

const View = (props) => {
    const { item, errorMessage, errorBackground, errorBorderColor, onSubmit } = props;

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");

    const errorSpan = <span className={styles.form__error}>{errorMessage}</span>;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form__info}>
                <div className={styles.form__info__title}>название</div>
                <div className={styles.form__info__text}>{item.title}</div>
            </div>

            <div className={styles.form__block}>
                <label
                    style={errors.price && errorBackground}
                    className={styles.form__block__label}
                >
                    цена продажи
                </label>
                <div className={styles.form__block__adress}>
                    <input
                        {...register("price", { required: true })}
                        style={errors.price && errorBorderColor}
                        className={styles.form__block__adress__input}
                        defaultValue={item.price}
                        type='number'
                        min='0'
                        step='1'
                    />
                    <PiCurrencyRubBold
                        className={styles.form__block__adress__rub}
                        style={errors.price && errorBackground}
                    />
                </div>
            </div>
            {errors.price && errorSpan}

            <div className={styles.form__block}>
                <label
                    style={errors.street && errorBackground}
                    className={styles.form__block__label}
                >
                    улица
                </label>
                <div className={styles.form__block__adress}>
                    <input
                        {...register("street", { required: true })}
                        style={errors.street && errorBorderColor}
                        className={styles.form__block__adress__input}
                        defaultValue={street}
                        readOnly={true}
                    />
                    <PiArrowBendRightDownBold
                        className={styles.form__block__adress__rub}
                        style={errors.street && errorBackground}
                    />
                </div>
            </div>
            {errors.street && errorSpan}

            <div className={styles.form__block}>
                <label
                    style={errors.house && errorBackground}
                    className={styles.form__block__label}
                >
                    дом
                </label>
                <div className={styles.form__block__adress}>
                    <input
                        {...register("house", { required: true })}
                        style={errors.house && errorBorderColor}
                        className={styles.form__block__adress__input}
                        defaultValue={house}
                        readOnly={true}
                    />
                    <PiArrowBendRightDownBold
                        className={styles.form__block__adress__rub}
                        style={errors.house && errorBackground}
                    />
                </div>
            </div>
            {errors.house && errorSpan}

            <YMaps
                query={{
                    ns: "use-load-option",
                    load: "package.full",
                    apikey: `${process.env.REACT_APP_API_MAP}`,
                }}
            >
                <MapBlock setStreet={setStreet} setHouse={setHouse} />
            </YMaps>
            <input
                type='submit'
                className={styles.form__submit}
                onClick={() => {
                    setValue("street", street);
                    setValue("house", house);
                }}
            />
        </form>
    );
};

export default View;
