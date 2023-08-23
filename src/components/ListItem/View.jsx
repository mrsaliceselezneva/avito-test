import { sendRequest } from "api/utils";
import Item from "components/Item";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const View = () => {
    const [listItem, setListItem] = useState([]);

    const { linkFilter } = useSelector((state) => state.sidebarReducer);

    useEffect(() => {
        sendRequest(`/items?${linkFilter}`, "get").then((data) => {
            setListItem(data);
        });
    }, [linkFilter]);

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
