import React, { useState } from "react";
import View from "./View.jsx";

const Connector = (props) => {
    const { item } = props;
    const [showItem, setShowItem] = useState(false);

    const img = `img/${item.category}.jpeg`;

    const onOpen = () => {
        setShowItem(true);
    };

    const onClose = () => {
        setShowItem(false);
    };

    return <View item={item} showItem={showItem} onOpen={onOpen} onClose={onClose} img={img} />;
};

export default Connector;
