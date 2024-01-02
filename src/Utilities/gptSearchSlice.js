import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice= createSlice({
    name: 'gptSearch',
    initialState:{
        toggleSearch: false
    },
    reducers:{
        toggleGPTSearch: (state) => {
            state.toggleSearch = !state.toggleSearch
        }
    }
});

export const {toggleGPTSearch} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;