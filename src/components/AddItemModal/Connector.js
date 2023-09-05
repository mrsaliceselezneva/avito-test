import { sendRequest } from "api/utils";
import React, { useEffect, useState } from "react";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { show, onClose } = props;

    const [listCategory, setListCategory] = useState([]);

    const errorMessage = "Обязательное поле";
    const errorColor = "#ff6e4a";
    const errorBackground = { background: errorColor };
    const errorBorderColor = { borderColor: errorColor };

    useEffect(() => {
        sendRequest("/categories", "get").then((data) => {
            setListCategory(data);
        });
    }, []);
    return (
        <Controller
            show={show}
            onClose={onClose}
            listCategory={listCategory}
            errorMessage={errorMessage}
            errorBackground={errorBackground}
            errorBorderColor={errorBorderColor}
        />
    );
};

export default Connector;
