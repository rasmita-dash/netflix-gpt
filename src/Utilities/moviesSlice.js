import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        videoOnMainContainer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies= action.payload
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies= action.payload
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies= action.payload
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies= action.payload
        },
        addVideoOnMainContainer: (state, action) =>{
            state.videoOnMainContainer = action.payload
        }
    }
});

export default moviesSlice.reducer;

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addVideoOnMainContainer} = moviesSlice.actions;