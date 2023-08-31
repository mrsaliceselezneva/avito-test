import React from "react";
import View from "./View.jsx";

const Controller = (props) => {
    const { show, onClose, item, isOwner } = props;
    return <View show={show} onClose={onClose} item={item} isOwner={isOwner} />;
};

export default Controller;
