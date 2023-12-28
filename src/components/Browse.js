import Header from "./Header";
import MainContainer from "./MainContainer";
import useGetNowPlayingMovies from "../Hooks/useGetNowPlayingMovies";

const Browse = () =>{
    useGetNowPlayingMovies();
    return (<div>
        <Header></Header>
        <MainContainer></MainContainer>
        </div>);
}

export default Browse;