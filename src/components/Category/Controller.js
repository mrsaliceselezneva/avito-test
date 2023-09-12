import React from "react";
import { useDispatch } from "react-redux";
import { setSelectCategory, setLinkCategory, setClearCategory } from "store/slices/sidebarSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { category, isSelectCategory } = props;

    const dispatch = useDispatch();

    const changeCategory = async () => {
        if (isSelectCategory) {
            await dispatch(setClearCategory());
        } else {
            await dispatch(setSelectCategory(category.title));
            await dispatch(setLinkCategory(`&category=${category.type}`));
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
