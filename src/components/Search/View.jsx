import { useWindowSize } from "api/utils";
import SidebarModal from "components/SidebarModal";
import React, { useState, useRef, useEffect } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setClearSearch, setRequest, setSearch } from "store/slices/searchSlice";
import styles from "./styles.module.scss";

const View = () => {
    const [show, useShow] = useState(false);

    const dispatch = useDispatch();
    const { searchRequest } = useSelector((state) => state.searchReducer);

    const ref = useRef("");

    return (
        <div className={styles.wrapper}>
            {useWindowSize() > 840 ? (
                <input
                    ref={ref}
                    className={styles.wrapper__input}
                    type='search'
                    placeholder='Поиск...'
                    onChange={(event) => dispatch(setSearch(event.target.value))}
                />
            ) : (
                <>
                    <input
                        ref={ref}
                        className={styles.wrapper__adaptive__input}
                        type='search'
                        placeholder='Поиск...'
                        onChange={(event) => dispatch(setSearch(event.target.value))}
                    />
                    <FiFilter
                        className={styles.wrapper__adaptive__filter}
                        onClick={() => useShow(true)}
                    />
                    <SidebarModal show={show} onClose={() => useShow(false)} />
                    <FiSearch
                        className={styles.wrapper__adaptive__search}
                        onClick={() => {
                            dispatch(setRequest(searchRequest));
                        }}
                    />
                </>
            )}
        </div>
    );
};

export default View;
