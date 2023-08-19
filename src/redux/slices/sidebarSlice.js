import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectFilter: null,
    linkFilter: '',
};

const sidebarSlice = createSlice({
    name: 'sidebarSlice',
    initialState,
    reducers: {
        setSelectFilter(state, action) {
            state.selectFilter = action.payload;
        },
        setLinkFilter(state, action) {
            state.linkFilter = action.payload;
        },
        setClear(state) {
            state.selectFilter = null;
            state.linkFilter = null;
        },
    },
});

export const { setSelectFilter, setLinkFilter, setClear } = sidebarSlice.actions;

export default sidebarSlice.reducer;
