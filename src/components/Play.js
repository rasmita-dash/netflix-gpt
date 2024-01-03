import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { TMDB_HEADER_OPTIONS } from "../Utilities/constants";

const Play = () => {
    const {movieId} = useParams();
    console.log (movieId);
    const [playVideo, setPlayVideo] =useState(null);
    const getMovie = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, TMDB_HEADER_OPTIONS);
        const json = await data.json();
        setPlayVideo(json?.results[0]);
    }
    useEffect(() => {getMovie()},[]);
    
    return (<><Header></Header>
        <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + playVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </>)
}
export default Play;