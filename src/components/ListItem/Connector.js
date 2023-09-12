import { sendRequest } from "api/utils";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeNumPages,
    changeShowPages,
    changePage,
    changeFirstPage,
    changeMediumPage,
    changeLastPage,
} from "store/slices/paginationSlice";
import View from "./View.jsx";
import gridRows from "./helpers";

const Connector = () => {
    const [listItem, setListItem] = useState([]);
    const [styleGrid, setStyleGrid] = useState(null);
    const [isFound, setIsFound] = useState(false);

    const { linkCategory } = useSelector((state) => state.sidebarReducer);
    const { linkStatus } = useSelector((state) => state.menuReducer);
    const { linkSearch } = useSelector((state) => state.searchReducer);
    const { isChange } = useSelector((state) => state.changeReducer);

    const { selectPage, numPages, showItems } = useSelector((state) => state.paginationReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        sendRequest(`/items?${linkStatus}${linkSearch}${linkCategory}`, "get").then((data) => {
            const date = new Date();
            let n = data.length;
            data.map((item) => {
                const masDate = item.date.split(".");
                if (item.status == "active") {
                    if (masDate[2] - 0 < date.getFullYear() - 0) {
                        const sendData = item;
                        sendData.status = "archive";
                        sendRequest(`/items/${item.id}`, "put", sendData);
                        n--;
                    }
                    if (masDate[2] - 0 == date.getFullYear() - 0) {
                        if (masDate[1] - 0 < date.getMonth() + 1) {
                            const sendData = item;
                            sendData.status = "archive";
                            sendRequest(`/items/${item.id}`, "put", sendData);
                            n--;
                        }
                        if (masDate[1] - 0 == date.getMonth() + 1) {
                            if (masDate[0] - 0 < date.getDate() - 0) {
                                const sendData = item;
                                sendData.status = "archive";
                                sendRequest(`/items/${item.id}`, "put", sendData);
                                n--;
                            }
                        }
                    }
                }
            });
            n = Math.ceil(n / showItems);
            if (n !== numPages) {
                dispatch(changeFirstPage(1));
                dispatch(changePage(1));
                dispatch(changeNumPages(n));
                if (n === 1) {
                    dispatch(changeLastPage(1));
                    dispatch(changeMediumPage(1));
                    dispatch(changeShowPages(1));
                } else if (n === 2) {
                    dispatch(changeLastPage(2));
                    dispatch(changeMediumPage(1));
                    dispatch(changeShowPages(2));
                } else if (n >= 3 && n < 5) {
                    dispatch(changeLastPage(3));
                    dispatch(changeMediumPage(2));
                    dispatch(changeShowPages(3));
                }
            }
        });
        sendRequest(
            `/items?${linkStatus}${linkSearch}${linkCategory}&_page=${selectPage}&_limit=${showItems}`,
            "get",
        ).then((data) => {
            setListItem(data);
            setStyleGrid(gridRows(data.length, window.innerWidth));
            data.length === 0 ? setIsFound(false) : setIsFound(true);
        });
    }, [linkCategory, linkStatus, linkSearch, isChange, selectPage]);

    return <View listItem={listItem} styleGrid={styleGrid} isFound={isFound} />;
};

export default Connector;
