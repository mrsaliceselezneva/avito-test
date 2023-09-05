import { useWindowSize } from "api/utils";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClearSearch, setRequest, setSearch } from "store/slices/searchSlice";
import View from "./View.jsx";

const Controller = () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const { searchRequest } = useSelector((state) => state.searchReducer);

    const onKeyDown = (event) => {
        if (event.key === "Enter") dispatch(setRequest(searchRequest));
    };

    function onChange(event) {
        dispatch(setSearch(event.target.value));
    }
   
    const onClose = () => setShow(false);
    const onOpen = () => setShow(false);
    const clear = () => dispatch(setClearSearch());
    const ifWidth = useWindowSize() > 840;

    const ref = useRef("");

    useEffect(() => {
        ref.current.value = searchRequest;
    }, [searchRequest]);

    const search = () => dispatch(setRequest(searchRequest));

    return (
        <View
            onKeyDown={onKeyDown}
            ref={ref}
            onClose={onClose}
            onOpen={onOpen}
            search={search}
            show={show}
            clear={clear}
            onChange={onChange}
            ifWidth={ifWidth}
        />
    );
};

export default Controller;
