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
        setCloseItem(true);
    };

    const toDelete = () => {
        setDeleteItem(true);
    };

    const toOpen = () => {
        setCloseItem(false);
        setDeleteItem(false);
    };

    const onDelete = () => {
        sendRequest(`/items/${item.id}`, "delete").then(() => dispatch(setIsChange(!isChange)));
    };

    const isStatusActive = item.status == "active";

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
            isStatusActive={isStatusActive}
        />
    );
};

export default Controller;
