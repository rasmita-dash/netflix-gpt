import MovieCard from "./MovieCard";

const MoviesList = (props) =>{
    return (<div className="scrollbar-hide">
        <h1 className="text-white">{props.title}</h1>
        <div className="flex overflow-x-auto hover:overflow-x-scroll scrollbar-hide">
            {props.movies?.length>0 ? (props.movies?.map(movie =>{
                return <MovieCard movie= {movie} key= {movie.id}></MovieCard>
            })) : <h1>No Movies found</h1>}
        </div>
    </div>)
}
export default MoviesList;