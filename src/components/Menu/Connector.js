import { sendRequest } from "api/utils";
import React, { useState, useEffect } from "react";
import View from "./View.jsx";

const Connector = (props) => {
    const { show, onClose } = props;

    const [listMenu, setListMenu] = useState([]);

    useEffect(() => {
        sendRequest("/status", "get").then((data) => {
            setListMenu(data);
        });
    }, []);

    return <View show={show} onClose={onClose} listMenu={listMenu} />;
};

export default Connector;
