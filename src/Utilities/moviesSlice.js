import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        videoOnMainContainer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies= action.payload
        },
        addVideoOnMainContainer: (state, action) =>{
            state.videoOnMainContainer = action.payload
        }
    }
});

export default moviesSlice.reducer;

export const {addNowPlayingMovies, addVideoOnMainContainer} = moviesSlice.actions;