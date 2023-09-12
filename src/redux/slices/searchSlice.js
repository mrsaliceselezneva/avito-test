import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchRequest: "",
    linkSearch: "",
};

const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearch(state, action) {
            state.searchRequest = action.payload;
        },
        setRequest(state, action) {
            state.linkSearch = `&q=${action.payload}`;
        },
        setClearSearch(state) {
            state.searchRequest = "";
        },
        setClearRequest(state) {
            state.linkSearch = "";
        },
    },
});

export const { setSearch, setRequest, setClearSearch, setClearRequest } = searchSlice.actions;

export default searchSlice.reducer;
