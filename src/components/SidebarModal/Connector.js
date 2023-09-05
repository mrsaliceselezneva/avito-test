import { sendRequest } from "api/utils";
import React, { useState, useEffect } from "react";
import View from "./View.jsx";

const Connector = (props) => {
    const { show, onClose } = props;

    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        sendRequest("/categories", "get").then((data) => {
            setListCategory(data.map((category) => category.title));
        });
    }, []);
    return <View show={show} onClose={onClose} listCategory={listCategory} />;
};

export default Connector;
