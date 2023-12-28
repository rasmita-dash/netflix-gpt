import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () =>{
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    if (movies === null) return;
    const mainMovie = movies[0];
    return (
    <div className="pt-[7%] absolute text-white ">
        <div className="absolute text-lg w-screen aspect-video pt-[10%] px-6 md:px-24 bg-gradient-to-r from-black">
            <VideoTitle movie={mainMovie}></VideoTitle>
            <div className="">
                <button className="m-4 px-10 rounded-lg bg-red-500 opacity-70 w-50 ">&#x27A4; Play</button>
                <button className="m-4 px-10 rounded-lg bg-blue-500 opacity-70 w-65">More Info!</button>
            </div>
        </div>
        <VideoBackground movie={mainMovie}></VideoBackground>
    </div>);
}

export default MainContainer;