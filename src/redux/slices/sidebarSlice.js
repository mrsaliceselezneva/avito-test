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
        setClear(state) {
            state.selectCategory = null;
            state.linkCategory = null;
        },
    },
});

export const { setSelectCategory, setLinkCategory, setClear } = sidebarSlice.actions;

export default sidebarSlice.reducer;
