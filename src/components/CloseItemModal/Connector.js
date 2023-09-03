import React from "react";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { item } = props;

    const errorMessage = "Обязательное поле";
    const errorColor = "#ff6e4a";
    const errorBackground = { background: errorColor };
    const errorBorderColor = { borderColor: "#ff6e4a" };

    return (
        <Controller
            item={item}
            errorMessage={errorMessage}
            errorBackground={errorBackground}
            errorBorderColor={errorBorderColor}
        />
    );
};

export default Connector;
