import Header from "./Header";
import {TMDB_HEADER_OPTIONS} from "../Utilities/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utilities/moviesSlice";

const Browse = () =>{
    const dispatch=useDispatch();
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_HEADER_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() => {getNowPlayingMovies()},[]);
    return (<div>
        <Header></Header>
        
        </div>);
}

export default Browse;