import MovieCard from "./MovieCard";

const MoviesList = (props) =>{
    return (<div>
        <h1 className="text-white">{props.title}</h1>
        <div className="flex overflow-x-auto hover:overflow-x-scroll">
            {props.movies.map(movie =>{
                return <MovieCard movie= {movie} key= {movie.id}></MovieCard>
            })}
        </div>
    </div>)
}
export default MoviesList;