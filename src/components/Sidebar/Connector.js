import { sendRequest } from "api/utils";
import React, { useState, useEffect } from "react";
import View from "./View.jsx";

const Connector = () => {
    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        sendRequest("/categories", "get").then((data) => {
            setListCategory(data);
        });
    }, []);

    return <View listCategory={listCategory} />;
};

export default Connector;
