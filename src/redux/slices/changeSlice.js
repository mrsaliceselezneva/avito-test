import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isChange: false,
};

const cangeSlice = createSlice({
    name: "cangeSlice",
    initialState,
    reducers: {
        setIsChange(state, action) {
            state.isChange = action.payload;
        },
    },
});

export const { setIsChange } = cangeSlice.actions;

export default cangeSlice.reducer;
