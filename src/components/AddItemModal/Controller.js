import { sendRequest } from "api/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsChange } from "store/slices/changeSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const {
        show,
        onClose,
        listCategory,
        errorMessage,
        errorMessageDate,
        errorBackground,
        errorBorderColor,
    } = props;

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
                    date: `${data.date.split("-")[2]}.${data.date.split("-")[1]}.${
                        data.date.split("-")[0]
                    }`,
                };
                sendRequest("/items", "post", sendData);
                dispatch(setIsChange(!isChange));
                onClose();
            });
        });
    };

    const validateDate = (selectDate) => {
        const masDate = selectDate.split("-");
        const date = new Date();

        const ifYear = masDate[0] - 0 >= date.getFullYear() - 0;
        const ifMonth = masDate[1] - 0 >= date.getMonth() - 0;
        const ifDay = masDate[2] - 0 >= date.getDate() - 0;

        return ifYear && ifMonth && ifDay;
    };

    return (
        <View
            show={show}
            onClose={onClose}
            listCategory={listCategory}
            errorMessage={errorMessage}
            errorMessageDate={errorMessageDate}
            errorBackground={errorBackground}
            errorBorderColor={errorBorderColor}
            validateDate={validateDate}
            onSubmit={onSubmit}
        />
    );
};

export default Controller;
