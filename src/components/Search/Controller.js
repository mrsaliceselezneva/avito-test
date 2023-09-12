import { useWindowSize } from "api/utils";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClearStatus } from "store/slices/menuSlice";
import { setClearSearch, setClearRequest, setRequest, setSearch } from "store/slices/searchSlice";
import { setClearCategory } from "store/slices/sidebarSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { errorBorderColor } = props;

    const [show, setShow] = useState(false);
    const [isChange, setIsChange] = useState(null);

    const dispatch = useDispatch();
    const { searchRequest } = useSelector((state) => state.searchReducer);

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            dispatch(setRequest(searchRequest));
            setIsChange(null);
        }
    };

    function onChange(event) {
        dispatch(setSearch(event.target.value));
        setIsChange(true);
    }

    const onClose = () => setShow(false);
    const onOpen = () => setShow(true);
    const clear = () => dispatch(setClearSearch());
    const ifWidth = useWindowSize() > 840;

    const ref = useRef("");

    useEffect(() => {
        ref.current.value = searchRequest;
    }, [searchRequest]);

    const search = async () => {
        await dispatch(setRequest(searchRequest));
        setIsChange(null);
    };

    const home = () => {
        dispatch(setClearSearch());
        dispatch(setClearRequest());
        dispatch(setClearStatus());
        dispatch(setClearCategory());
    };

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
            errorBorderColor={isChange && errorBorderColor}
            home={home}
        />
    );
};

export default Controller;
