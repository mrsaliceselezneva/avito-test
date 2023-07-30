import Menu from "components/Menu";
import Search from "components/Search";
import SearchButton from "components/SearchButton";
import React from "react";
import styles from "./styles.module.scss";

const View = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__main}>
                <Search />
                <div className={styles.wrapper__main__list} />
            </div>
            <div className={styles.wrapper__sidebar}>
                <SearchButton />
                <Menu />
            </div>
        </div>
    );
};

export default View;
