import { useSelector } from "react-redux"
import MoviesList from "./MoviesList"

const SecondaryContainer = () =>{
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    if (!nowPlayingMovies && !popularMovies && !topRatedMovies && !upcomingMovies) return;
    return (<div className="bg-black mt-[40%] z-20 w-screen">
                <div className="ml-12 ">
                    {nowPlayingMovies && <MoviesList title="Now Playing" movies={nowPlayingMovies}></MoviesList>}
                    {topRatedMovies && <MoviesList title="Top Rated" movies={topRatedMovies}></MoviesList>}
                    {popularMovies && <MoviesList title="Popular" movies={popularMovies}></MoviesList>}
                    {upcomingMovies && <MoviesList title="Upcoming" movies={upcomingMovies}></MoviesList>}
                </div>
            </div>
            )
}
export default SecondaryContainer