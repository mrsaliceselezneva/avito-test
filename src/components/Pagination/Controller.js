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

    const pageRight = async (diff) => {
        if (selectPage === mediumPage) {
            if (lastPage + diff <= numPages) {
                await dispatch(changeFirstPage(firstPage + diff));
                await dispatch(changeLastPage(lastPage + diff));
                await dispatch(changeMediumPage(mediumPage + diff));
                await dispatch(changePage(selectPage + diff));
            } else if (selectPage + diff <= numPages) {
                await dispatch(changeFirstPage(firstPage + numPages - lastPage));
                await dispatch(changeLastPage(lastPage + numPages - lastPage));
                await dispatch(changeMediumPage(mediumPage + numPages - lastPage));
                await dispatch(changePage(selectPage + diff));
            }
        } else if (selectPage < mediumPage) {
            if (selectPage + diff > mediumPage) {
                if (lastPage + diff - (mediumPage - selectPage) <= numPages) {
                    const v = diff - (mediumPage - selectPage);
                    await dispatch(changeFirstPage(firstPage + v));
                    await dispatch(changeLastPage(lastPage + v));
                    await dispatch(changeMediumPage(mediumPage + v));
                    await dispatch(changePage(selectPage + diff));
                } else {
                    await dispatch(changeFirstPage(firstPage + numPages - lastPage));
                    await dispatch(changeLastPage(lastPage + numPages - lastPage));
                    await dispatch(changeMediumPage(mediumPage + numPages - lastPage));
                    await dispatch(changePage(selectPage + diff));
                }
            } else {
                await dispatch(changePage(selectPage + diff));
            }
        } else if (selectPage > mediumPage) {
            if (selectPage + diff <= numPages) {
                await dispatch(changePage(selectPage + diff));
            }
        }
    };

    const pageLeft = async (diff) => {
        if (selectPage === mediumPage) {
            if (firstPage - diff >= 1) {
                await dispatch(changeFirstPage(firstPage - diff));
                await dispatch(changeLastPage(lastPage - diff));
                await dispatch(changeMediumPage(mediumPage - diff));
                await dispatch(changePage(selectPage - diff));
            } else if (selectPage - diff >= 1) {
                await dispatch(changeFirstPage(firstPage - 1 + firstPage));
                await dispatch(changeLastPage(lastPage - 1 + firstPage));
                await dispatch(changeMediumPage(mediumPage - 1 + firstPage));
                await dispatch(changePage(selectPage - diff));
            }
        } else if (selectPage > mediumPage) {
            if (selectPage - diff < mediumPage) {
                if (firstPage - diff + (selectPage - mediumPage) >= 1) {
                    const v = -diff + (selectPage - mediumPage);
                    await dispatch(changeFirstPage(firstPage + v));
                    await dispatch(changeLastPage(lastPage + v));
                    await dispatch(changeMediumPage(mediumPage + v));
                    await dispatch(changePage(selectPage - diff));
                } else {
                    await dispatch(changeFirstPage(firstPage - 1 + firstPage));
                    await dispatch(changeLastPage(lastPage - 1 + firstPage));
                    await dispatch(changeMediumPage(mediumPage - 1 + firstPage));
                    await dispatch(changePage(selectPage - diff));
                }
            } else {
                await dispatch(changePage(selectPage - diff));
            }
        } else if (selectPage < mediumPage) {
            if (selectPage - diff >= 1) {
                await dispatch(changePage(selectPage - diff));
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

    const allLeft = async () => {
        await dispatch(changeFirstPage(1));
        await dispatch(changeLastPage(showPages));
        await dispatch(changeMediumPage(Math.ceil(showPages / 2)));
        await dispatch(changePage(1));
    };

    const allRight = async () => {
        await dispatch(changeFirstPage(numPages - showPages + 1));
        await dispatch(changeLastPage(numPages));
        await dispatch(changeMediumPage(numPages - Math.floor(showPages / 2)));
        await dispatch(changePage(numPages));
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
