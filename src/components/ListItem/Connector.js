import { sendRequest } from "api/utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import View from "./View.jsx";
import gridRows from "./helpers";

const Connector = () => {
    const [listItem, setListItem] = useState([]);
    const [styleGrid, setStyleGrid] = useState(null);

    const { linkCategory } = useSelector((state) => state.sidebarReducer);
    const { linkStatus } = useSelector((state) => state.menuReducer);
    const { linkSearch } = useSelector((state) => state.searchReducer);
    const { isChange } = useSelector((state) => state.changeReducer);

    useEffect(() => {
        sendRequest(`/items?${linkStatus}${linkSearch}${linkCategory}`, "get").then((data) => {
            const date = new Date();
            data.map((item) => {
                const masDate = item.date.split(".");
                if (item.status == "active") {
                    if (masDate[2] - 0 < date.getFullYear() - 0) {
                        const sendData = item;
                        sendData.status = "archive";
                        sendRequest(`/items/${item.id}`, "put", sendData);
                    }
                    if (masDate[2] - 0 == date.getFullYear() - 0) {
                        if (masDate[1] - 0 < date.getMonth() - 0) {
                            const sendData = item;
                            sendData.status = "archive";
                            sendRequest(`/items/${item.id}`, "put", sendData);
                        }
                        if (masDate[1] - 0 == date.getMonth() - 0) {
                            if (masDate[0] - 0 < date.getDate() - 0) {
                                const sendData = item;
                                sendData.status = "archive";
                                sendRequest(`/items/${item.id}`, "put", sendData);
                            }
                        }
                    }
                }
            });
        });
        sendRequest(`/items?${linkStatus}${linkSearch}${linkCategory}`, "get").then((data) => {
            setListItem(data);
            setStyleGrid(gridRows(data.length));
        });
    }, [linkCategory, linkStatus, linkSearch, isChange]);

    return <View listItem={listItem} styleGrid={styleGrid} />;
};

export default Connector;
