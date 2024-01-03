import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTSearchSuggestions = ()=>{
    const suggestedMovies = useSelector((store)=> store.gptSearch.suggestedMovies);
    const suggestedNames = useSelector((store)=> store.gptSearch.gptSuggestedNames);
    
    // let moviesList =[];
    // suggestedMovies?.map(suggestion=> {
    //     moviesList = moviesList.concat(suggestion);
    // });
    // return (<div className="bg-black z-20 w-screen">
    // <div className="ml-12 ">        
    //     {moviesList.length >0 && <MoviesList title="GPT suggestions" movies={moviesList}></MoviesList>}
    // </div></div>);
    return (<div className="bg-black z-20 w-screen">
    <div className="ml-12 "> 
    {
        suggestedMovies?.map((movies, index) =>{
        return movies && <MoviesList title={suggestedNames?.[index]} movies={movies}></MoviesList>

    })  }     
    </div></div>);
    
}
export default GPTSearchSuggestions;