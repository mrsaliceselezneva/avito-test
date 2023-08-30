import { sendRequest } from "api/utils";
import React from "react";
import { useSelector } from "react-redux";
import View from "./View.jsx";

const Controller = (props) => {
    const { show, onClose, listCategory } = props;

    const { profile } = useSelector((state) => state.profileReducer);

    const errorMessager = "Обязательное поле";
    const errorColor = "#ff6e4a";
    const errorBackground = { background: errorColor };
    const errorBorderColor = { borderColor: "#ff6e4a" };

    const onSubmit = (data) => {
        sendRequest("/items", "get").then((lastIdData) => {
            sendRequest(`categories?q=${data.category}`, "get").then((categoryData) => {
                const sendData = {
                    id: lastIdData[lastIdData.length - 1].id + 1,
                    title: data.title,
                    price: data.price,
                    category: categoryData[0].type,
                    user: profile.name,
                    email: profile.email,
                    status: "active",
                    description: data.description,
                };
                sendRequest("/items", "post", sendData);
            });
        });
    };

    return (
        <View
            show={show}
            onClose={onClose}
            listCategory={listCategory}
            errorMessager={errorMessager}
            errorBackground={errorBackground}
            errorBorderColor={errorBorderColor}
            onSubmit={onSubmit}
        />
    );
};

export default Controller;
