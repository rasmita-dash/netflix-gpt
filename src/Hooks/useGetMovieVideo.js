import { useEffect } from "react";
import { TMDB_HEADER_OPTIONS } from "../Utilities/constants";
import {addVideoOnMainContainer} from "../Utilities/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useGetMovieVideo = (movie_id) =>{
    const dispatch = useDispatch();
  
    const videoOnMainContainer = useSelector((store) => store.movies.videoOnMainContainer);
    const getMovieVideo = async() =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, TMDB_HEADER_OPTIONS);
        const json = await data.json();
        const filteredMovies = json?.results?.filter(video => video.type= "Trailer");
        const trailerVideo = filteredMovies.length > 0? filteredMovies[0]: json[0];
        dispatch(addVideoOnMainContainer(trailerVideo));
    }
    useEffect(()=>{
        !videoOnMainContainer && getMovieVideo()
    }, []);
}

export default useGetMovieVideo;