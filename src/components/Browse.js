import Header from "./Header";
import MainContainer from "./MainContainer";
import useGetNowPlayingMovies from "../Hooks/useGetNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../Hooks/useGetPopularMovies";
import useGetUpcomingMovies from "../Hooks/useUpcomingMovies";
import useGetTopRatedMovies from "../Hooks/useGetTopRatedMovies";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GPTSearchPage";

const Browse = () =>{
    useGetNowPlayingMovies();
    useGetPopularMovies();
    useGetUpcomingMovies();
    useGetTopRatedMovies();
    const gptSearchToggle = useSelector((store) => store.gptSearch.toggleSearch);
    return (<div className="flex flex-col">
        <Header></Header>
        {gptSearchToggle ? <GPTSearchPage></GPTSearchPage> : 
                                (<>
                                <MainContainer></MainContainer>
                                <SecondaryContainer></SecondaryContainer>
                                </>)}
        
        </div>);
}

export default Browse;