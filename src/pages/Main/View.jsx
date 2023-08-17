import { useWindowSize } from "api/utils";
import List from "components/List";
import Search from "components/Search";
import SearchButton from "components/SearchButton";
import Sidebar from "components/Sidebar";
import React from "react";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__main}>
                <Search />
                <List />
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
