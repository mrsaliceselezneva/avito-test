import React, { useState } from "react";
import View from "./View.jsx";

const Connector = (props) => {
    const { item } = props;
    const [showItem, setShowItem] = useState(false);

    const img = `img/${item.category}.jpeg`;

    const ifClose = item.status == "close";

    const onOpen = () => {
        setShowItem(true);
    };

    const onClose = () => {
        setShowItem(false);
    };

    return (
        <View
            item={item}
            ifClose={ifClose}
            showItem={showItem}
            onOpen={onOpen}
            onClose={onClose}
            img={img}
        />
    );
};

export default Connector;
