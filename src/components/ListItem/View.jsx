import Item from "components/Item";
import NotFound from "components/NotFound";
import Pagination from "components/Pagination";
import React from "react";
import styles from "./styles.module.scss";

const View = (props) => {
    const { listItem, styleGrid, isFound } = props;

    return (
        <div className={styles.wrapper}>
            {isFound ? (
                <>
                    <div className={styles.wrapper__list} style={styleGrid}>
                        {listItem.map((item) => (
                            <Item key={item.title + item.id} item={item} />
                        ))}
                    </div>
                    <Pagination />
                </>
            ) : (
                <NotFound />
            )}
        </div>
    );
};

export default View;
