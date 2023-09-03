import { sendRequest } from "api/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsChange } from "store/slices/changeSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { item, errorMessage, errorBackground, errorBorderColor } = props;

    const { isChange } = useSelector((state) => state.changeReducer);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const date = new Date();
        const utc =
            date.getTimezoneOffset() / 60 <= 0
                ? `+${date.getTimezoneOffset() / -60}UTC`
                : `-${date.getTimezoneOffset()}UTC`;

        data.id = item.id;
        data.title = item.title;
        data.category = item.category;
        data.user = item.user;
        data.email = item.email;
        data.status = "close";
        data.description = item.description;
        data.date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${utc}`;

        sendRequest(`/items/${item.id}`, "put", data).then(() => {
            dispatch(setIsChange(!isChange));
        });

        console.log(data);
    };

    return (
        <View
            item={item}
            errorMessage={errorMessage}
            errorBackground={errorBackground}
            errorBorderColor={errorBorderColor}
            onSubmit={onSubmit}
        />
    );
};

export default Controller;
