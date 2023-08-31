import { sendRequest } from "api/utils.js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsChange } from "store/slices/changeSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { show, onClose, item, isOwner } = props;

    const dispatch = useDispatch();
    const { isChange } = useSelector((state) => state.changeReducer);

    const [closeItem, setCloseItem] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);

    const toClose = () => {
        // item.status = "close";
        setCloseItem(true);
        // sendRequest(`/items/${item.id}`, "put", item).then(() => dispatch(setIsChange(!isChange)));
        // onClose();
    };

    const toDelete = () => {
        // item.status = "close";
        setDeleteItem(true);
        // sendRequest(`/items/${item.id}`, "put", item).then(() => dispatch(setIsChange(!isChange)));
        // onClose();
    };

    const toOpen = () => {
        // item.status = "close";
        setCloseItem(false);
        setDeleteItem(false);
        // sendRequest(`/items/${item.id}`, "put", item).then(() => dispatch(setIsChange(!isChange)));
        // onClose();
    };

    const onDelete = () => {
        sendRequest(`/items/${item.id}`, "delete").then(() => dispatch(setIsChange(!isChange)));
    };

    return (
        <View
            show={show}
            onClose={() => {
                onClose();
                setCloseItem(false);
                setDeleteItem(false);
            }}
            item={item}
            isOwner={isOwner}
            toClose={toClose}
            toDelete={toDelete}
            toOpen={toOpen}
            closeItem={closeItem}
            deleteItem={deleteItem}
            onDelete={onDelete}
        />
    );
};

export default Controller;
