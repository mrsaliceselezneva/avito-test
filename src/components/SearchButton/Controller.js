import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRequest } from "store/slices/searchSlice";
import View from "./View.jsx";

const Controller = () => {
    const dispatch = useDispatch();
    const { searchRequest } = useSelector((state) => state.searchReducer);

    const search = () => dispatch(setRequest(searchRequest));

    return <View search={search} />;
};

export default Controller;
