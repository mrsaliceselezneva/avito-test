import React from "react";
import { useSelector } from "react-redux";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { category } = props;

    const { selectCategory } = useSelector((state) => state.sidebarReducer);
    const isSelectCategory = category.title === selectCategory;

    return <Controller category={category} isSelectCategory={isSelectCategory} />;
};

export default Connector;
