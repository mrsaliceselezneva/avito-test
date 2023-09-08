import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changePage,
    changeFirstPage,
    changeMediumPage,
    changeLastPage,
} from "store/slices/paginationSlice";
import View from "./View.jsx";

const Controller = () => {
    const dispatch = useDispatch();
    const { selectPage, numPages, firstPage, mediumPage, lastPage, showPages } = useSelector(
        (state) => state.paginationReducer,
    );

    const pageRight = (diff) => {
        if (selectPage === mediumPage) {
            if (lastPage + diff <= numPages) {
                dispatch(changeFirstPage(firstPage + diff));
                dispatch(changeLastPage(lastPage + diff));
                dispatch(changeMediumPage(mediumPage + diff));
                dispatch(changePage(selectPage + diff));
            } else if (selectPage + diff <= numPages) {
                dispatch(changeFirstPage(firstPage + numPages - lastPage));
                dispatch(changeLastPage(lastPage + numPages - lastPage));
                dispatch(changeMediumPage(mediumPage + numPages - lastPage));
                dispatch(changePage(selectPage + diff));
            }
        } else if (selectPage < mediumPage) {
            if (selectPage + diff > mediumPage) {
                if (lastPage + diff - (mediumPage - selectPage) <= numPages) {
                    const v = diff - (mediumPage - selectPage);
                    dispatch(changeFirstPage(firstPage + v));
                    dispatch(changeLastPage(lastPage + v));
                    dispatch(changeMediumPage(mediumPage + v));
                    dispatch(changePage(selectPage + diff));
                } else {
                    dispatch(changeFirstPage(firstPage + numPages - lastPage));
                    dispatch(changeLastPage(lastPage + numPages - lastPage));
                    dispatch(changeMediumPage(mediumPage + numPages - lastPage));
                    dispatch(changePage(selectPage + diff));
                }
            } else {
                dispatch(changePage(selectPage + diff));
            }
        } else if (selectPage > mediumPage) {
            if (selectPage + diff <= numPages) {
                dispatch(changePage(selectPage + diff));
            }
        }
    };

    const pageLeft = (diff) => {
        if (selectPage === mediumPage) {
            if (firstPage - diff >= 1) {
                dispatch(changeFirstPage(firstPage - diff));
                dispatch(changeLastPage(lastPage - diff));
                dispatch(changeMediumPage(mediumPage - diff));
                dispatch(changePage(selectPage - diff));
            } else if (selectPage - diff >= 1) {
                dispatch(changeFirstPage(firstPage - 1 + firstPage));
                dispatch(changeLastPage(lastPage - 1 + firstPage));
                dispatch(changeMediumPage(mediumPage - 1 + firstPage));
                dispatch(changePage(selectPage - diff));
            }
        } else if (selectPage > mediumPage) {
            if (selectPage - diff < mediumPage) {
                if (firstPage - diff + (selectPage - mediumPage) >= 1) {
                    const v = -diff + (selectPage - mediumPage);
                    dispatch(changeFirstPage(firstPage + v));
                    dispatch(changeLastPage(lastPage + v));
                    dispatch(changeMediumPage(mediumPage + v));
                    dispatch(changePage(selectPage - diff));
                } else {
                    dispatch(changeFirstPage(firstPage - 1 + firstPage));
                    dispatch(changeLastPage(lastPage - 1 + firstPage));
                    dispatch(changeMediumPage(mediumPage - 1 + firstPage));
                    dispatch(changePage(selectPage - diff));
                }
            } else {
                dispatch(changePage(selectPage - diff));
            }
        } else if (selectPage < mediumPage) {
            if (selectPage - diff >= 1) {
                dispatch(changePage(selectPage - diff));
            }
        }
    };

    const clickPage = (page) => {
        if (page < selectPage) {
            pageLeft(selectPage - page);
        } else if (page > selectPage) {
            pageRight(page - selectPage);
        }
    };

    const allLeft = () => {
        dispatch(changeFirstPage(1));
        dispatch(changeLastPage(showPages));
        dispatch(changeMediumPage(Math.ceil(showPages / 2)));
        dispatch(changePage(1));
    };

    const allRight = () => {
        dispatch(changeFirstPage(numPages - showPages + 1));
        dispatch(changeLastPage(numPages));
        dispatch(changeMediumPage(numPages - Math.floor(showPages / 2)));
        dispatch(changePage(numPages));
    };

    const oneLeft = () => pageLeft(1);

    const oneRight = () => pageRight(1);

    return (
        <View
            allLeft={allLeft}
            allRight={allRight}
            oneLeft={oneLeft}
            oneRight={oneRight}
            clickPage={clickPage}
        />
    );
};

export default Controller;
