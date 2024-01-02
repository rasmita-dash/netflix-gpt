import { useDispatch } from "react-redux";
import {addUpcomingMovies} from "../Utilities/moviesSlice";
import {TMDB_HEADER_OPTIONS} from "../Utilities/constants";
import { useEffect } from "react";

const useGetUpcomingMovies = () =>{

    const dispatch=useDispatch();
    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', TMDB_HEADER_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(() => {getUpcomingMovies()},[]);
}

export default useGetUpcomingMovies;