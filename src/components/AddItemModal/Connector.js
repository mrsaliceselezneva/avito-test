import { sendRequest } from "api/utils";
import React, { useEffect, useState } from "react";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { show, onClose } = props;

    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        sendRequest("/categories", "get").then((data) => {
            setListCategory(data);
        });
    }, []);
    return <Controller show={show} onClose={onClose} listCategory={listCategory} />;
};

export default Connector;
