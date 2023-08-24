import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    serachRequest: "",
};

const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearch(state, action) {
            state.selectCategory = action.payload;
        },
        setClearSearch(state) {
            state.serachRequest = "";
        },
    },
});

export const { setSearch, setClearSearch } = searchSlice.actions;

export default searchSlice.reducer;
