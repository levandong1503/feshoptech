import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        value: '1',
    },
    reducers: {
        switchCategory: (state, action) => {
            state.value = action.payload;
        },

        getCategory: (state, action) => {
            return state.value;
        },
    },
});

export const { switchCategory, getCategory } = categorySlice.actions;
export default categorySlice.reducer;
