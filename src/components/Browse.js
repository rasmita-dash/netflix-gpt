import Header from "./Header";
import MainContainer from "./MainContainer";
import useGetNowPlayingMovies from "../Hooks/useGetNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../Hooks/useGetPopularMovies";
import useGetUpcomingMovies from "../Hooks/useUpcomingMovies";
import useGetTopRatedMovies from "../Hooks/useGetTopRatedMovies";

const Browse = () =>{
    useGetNowPlayingMovies();
    useGetPopularMovies();
    useGetUpcomingMovies();
    useGetTopRatedMovies();
    return (<div className="flex flex-col">
        <Header></Header>
        <MainContainer></MainContainer>
        <SecondaryContainer></SecondaryContainer>
        </div>);
}

export default Browse;