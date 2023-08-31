import { sendRequest } from "api/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsChange } from "store/slices/changeSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { show, onClose, listCategory, errorMessager, errorBackground, errorBorderColor } = props;

    const { profile } = useSelector((state) => state.profileReducer);
    const { isChange } = useSelector((state) => state.changeReducer);
    const dispatch = useDispatch();

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
                dispatch(setIsChange(!isChange));
                onClose();
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
