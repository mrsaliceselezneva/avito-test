import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { category } = props;

    const { selectCategory } = useSelector((state) => state.sidebarReducer);
    const dispatch = useDispatch();
    const isSelectCategory = category.title === selectCategory;

    return <Controller category={category} dispatch={dispatch} isSelectCategory={isSelectCategory} />;
};

export default Connector;
