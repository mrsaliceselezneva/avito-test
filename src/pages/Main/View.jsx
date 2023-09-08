import { useWindowSize } from "api/utils";
import ListItem from "components/ListItem";
import NotFound from "components/NotFound";
import Pagination from "components/Pagination";
import Search from "components/Search";
import SearchButton from "components/SearchButton";
import Sidebar from "components/Sidebar";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const View = () => {
    const { isFound } = useSelector((state) => state.foundReducer);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__main}>
                <Search />
                {isFound ? (
                    <>
                        <ListItem />
                        <Pagination />
                    </>
                ) : (
                    <NotFound />
                )}
            </div>
            {useWindowSize() > 840 ? (
                <div className={styles.wrapper__sidebar}>
                    <SearchButton />
                    <Sidebar />
                </div>
            ) : null}
        </div>
    );
};

export default View;
