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
    },
});

export const { setSearch, setRequest, setClearSearch } = searchSlice.actions;

export default searchSlice.reducer;
