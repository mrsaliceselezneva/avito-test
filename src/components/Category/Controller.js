import React from "react";
import { useDispatch } from "react-redux";
import { setIsFound } from "store/slices/foundSlice";
import { setSelectCategory, setLinkCategory, setClearCategory } from "store/slices/sidebarSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { category, isSelectCategory } = props;

    const dispatch = useDispatch();

    const changeCategory = () => {
        dispatch(setIsFound(true));
        if (isSelectCategory) {
            dispatch(setClearCategory());
        } else {
            dispatch(setSelectCategory(category.title));
            dispatch(setLinkCategory(`&category=${category.type}`));
        }
    };

    return (
        <View
            category={category}
            changeCategory={changeCategory}
            isSelectCategory={isSelectCategory}
        />
    );
};

export default Controller;
