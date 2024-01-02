import { useDispatch } from "react-redux";
import {addTopRatedMovies} from "../Utilities/moviesSlice";
import {TMDB_HEADER_OPTIONS} from "../Utilities/constants";
import { useEffect } from "react";

const useGetTopRatedMovies = () =>{

    const dispatch=useDispatch();
    const getTopRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', TMDB_HEADER_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() => {getTopRatedMovies()},[]);
}

export default useGetTopRatedMovies;