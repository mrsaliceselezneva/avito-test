import React from "react";
import View from "./View.jsx";

const Controller = (props) => {
    const { show, onClose, listCategory } = props;

    const errorMessager = "Обязательное поле";
    const errorColor = "#ff6e4a";
    const errorBackground = { background: errorColor };
    const errorBorderColor = { borderColor: "#ff6e4a" };

    return (
        <View
            show={show}
            onClose={onClose}
            listCategory={listCategory}
            errorMessager={errorMessager}
            errorBackground={errorBackground}
            errorBorderColor={errorBorderColor}
        />
    );
};

export default Controller;
