import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectStatus: null,
    linkStatus: "",
};

const menuSlice = createSlice({
    name: "menuSlice",
    initialState,
    reducers: {
        setSelectStatus(state, action) {
            state.selectStatus = action.payload;
        },
        setLinkStatus(state, action) {
            state.linkStatus = action.payload;
        },
        setClearStatus(state) {
            state.selectStatus = null;
            state.linkStatus = null;
        },
    },
});

export const { setSelectStatus, setLinkStatus, setClearStatus } = menuSlice.actions;

export default menuSlice.reducer;
