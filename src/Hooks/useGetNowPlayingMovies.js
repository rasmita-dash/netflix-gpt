import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../Utilities/moviesSlice";
import {TMDB_HEADER_OPTIONS} from "../Utilities/constants";
import { useEffect } from "react";

const useGetNowPlayingMovies = () =>{

    const dispatch=useDispatch();
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_HEADER_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() => {getNowPlayingMovies()},[]);
}

export default useGetNowPlayingMovies;