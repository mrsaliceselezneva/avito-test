import { sendRequest } from "api/utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import View from "./View.jsx";

const Connector = () => {
    const [listItem, setListItem] = useState([]);

    const { linkCategory } = useSelector((state) => state.sidebarReducer);
    const { linkStatus } = useSelector((state) => state.menuReducer);
    const { linkSearch } = useSelector((state) => state.searchReducer);
    const { isChange } = useSelector((state) => state.changeReducer);

    useEffect(() => {
        sendRequest(`/items?${linkStatus}${linkSearch}${linkCategory}`, "get").then((data) => {
            setListItem(data);
        });
    }, [linkCategory, linkStatus, linkSearch, isChange]);

    return <View listItem={listItem} />;
};

export default Connector;
