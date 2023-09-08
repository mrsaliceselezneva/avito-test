import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFound: true,
};

const foundSlice = createSlice({
    name: "foundSlice",
    initialState,
    reducers: {
        setIsFound(state, action) {
            state.isFound = action.payload;
        },
    },
});

export const { setIsFound } = foundSlice.actions;

export default foundSlice.reducer;
