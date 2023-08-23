import { sendRequest } from "api/utils";
import Item from "components/Item";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const View = () => {
    const [listItem, setListItem] = useState([]);

    const { linkCategory } = useSelector((state) => state.sidebarReducer);
    const { linkStatus } = useSelector((state) => state.menuReducer);

    useEffect(() => {
        sendRequest(`/items?${linkStatus}&${linkCategory}`, "get").then((data) => {
            setListItem(data);
        });
    }, [linkCategory, linkStatus]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__list}>
                {listItem.map((item) => (
                    <Item key={item.title + item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default View;
