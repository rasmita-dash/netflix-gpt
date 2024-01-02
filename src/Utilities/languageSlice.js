import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"language",
    initialState: {selectedLanguage:"en"},
    reducers: {
        addSelectedLanguage : (state,action) =>{
            state.selectedLanguage= action.payload
        }
    }
});

export const {addSelectedLanguage} = languageSlice.actions;

export default languageSlice.reducer;