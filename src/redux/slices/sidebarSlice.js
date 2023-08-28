import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectCategory: null,
    linkCategory: "",
};

const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        setSelectCategory(state, action) {
            state.selectCategory = action.payload;
        },
        setLinkCategory(state, action) {
            state.linkCategory = action.payload;
        },
        setClearCategory(state) {
            state.selectCategory = null;
            state.linkCategory = "";
        },
    },
});

export const { setSelectCategory, setLinkCategory, setClearCategory } = sidebarSlice.actions;

export default sidebarSlice.reducer;
