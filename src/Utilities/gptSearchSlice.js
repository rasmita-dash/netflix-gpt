import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice= createSlice({
    name: 'gptSearch',
    initialState:{
        toggleSearch: false,
        suggestedMovies: null,
        gptSuggestedNames: null
    },
    reducers:{
        toggleGPTSearch: (state) => {
            state.toggleSearch = !state.toggleSearch
        },
        addGPTSuggestedNames:(state,action)=>{
            state.gptSuggestedNames=action.payload
        },
        addSuggestedMovies:(state,action) =>{
            state.suggestedMovies = action.payload
        }
    }
});

export const {toggleGPTSearch, addGPTSuggestedNames, addSuggestedMovies} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;