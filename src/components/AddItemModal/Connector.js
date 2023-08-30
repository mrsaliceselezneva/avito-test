import { sendRequest } from "api/utils";
import React, { useEffect, useState } from "react";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { show, onClose, setShowAddItem } = props;

    const [listCategory, setListCategory] = useState([]);

    const errorMessager = "Обязательное поле";
    const errorColor = "#ff6e4a";
    const errorBackground = { background: errorColor };
    const errorBorderColor = { borderColor: "#ff6e4a" };

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
            setShowAddItem={setShowAddItem}
            errorMessager={errorMessager}
            errorBackground={errorBackground}
            errorBorderColor={errorBorderColor}
        />
    );
};

export default Connector;
