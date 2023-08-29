import React from "react";
import { setSelectCategory, setLinkCategory, setClearCategory } from "store/slices/sidebarSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { category, dispatch, isSelectCategory } = props;

    const changeCategory = () => {
        if (isSelectCategory) {
            dispatch(setClearCategory());
        } else {
            dispatch(setSelectCategory(category.title));
            dispatch(setLinkCategory(`&type=${category.type}`));
        }
    };

    return <View category={category} changeCategory={changeCategory} isSelectCategory={isSelectCategory}/>;
};

export default Controller;
