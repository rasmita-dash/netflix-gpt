import useGetMovieVideo from "../Hooks/useGetMovieVideo";
import { useSelector } from "react-redux";

const VideoBackground = (props)=>{
    const trailer = useSelector((store) => store.movies.videoOnMainContainer);
    useGetMovieVideo(props.movie.id);
    if(!trailer) return;
    return (<div className="">
        <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
        </iframe>
    </div>)
}
export default VideoBackground;