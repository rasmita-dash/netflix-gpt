import { useDispatch } from "react-redux";
import {addPopularMovies} from "../Utilities/moviesSlice";
import {TMDB_HEADER_OPTIONS} from "../Utilities/constants";
import { useEffect } from "react";

const useGetPopularMovies = () =>{

    const dispatch=useDispatch();
    const getPopularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular', TMDB_HEADER_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
    useEffect(() => {getPopularMovies()},[]);
}

export default useGetPopularMovies;