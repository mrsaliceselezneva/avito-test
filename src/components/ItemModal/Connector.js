import React from "react";
import { useSelector } from "react-redux";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { show, onClose, item } = props;

    const { profile } = useSelector((state) => state.profileReducer);

    const isOwner = profile.email == item.email;

    return <Controller show={show} onClose={onClose} item={item} isOwner={isOwner} />;
};

export default Connector;
