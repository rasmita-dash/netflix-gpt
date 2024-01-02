import { useNavigate } from "react-router-dom";

const MovieCard = (props)=>{
    const movie = props.movie;
    const navigate = useNavigate();
    const openMovie = (movieId) =>{
        navigate("play")
    }
    return (<div  className="flex">
        <div className="w-60 rounded-lg">
            <img src={"https://image.tmdb.org/t/p/w200/"+movie.poster_path} 
                alt={movie.title} onClick={ () => openMovie(movie.id)}></img>
        </div>
    </div>)
}

export default MovieCard;