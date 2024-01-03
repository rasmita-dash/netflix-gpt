import { useDispatch, useSelector } from "react-redux";
import {lang} from "../Utilities/languageConstants";
import { useRef } from "react";
import openai from "../Utilities/openAI";
import {MOVIE_SEARCH_API, TMDB_HEADER_OPTIONS} from "../Utilities/constants";
import { addGPTSuggestedNames, addSuggestedMovies } from "../Utilities/gptSearchSlice";

const GPTSearchBar = ()=>{
    const searchText = useRef(null);
    const selectedLang = useSelector((store) => store.language.selectedLanguage);
    const dispatch = useDispatch();
    const search = async () =>{
        // Need to buy openAI paid plan for accessing the API.Hence mimicking openAI response.
        const gptQuery = "recommend some movie names for the query: " + searchText.current.value + ". Give just name of the movies, separeted by comma like Don, Gadar,Sadak,NH, Kick"
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content:  gptQuery}],
        //     model: 'gpt-3.5-turbo',
        //   });
        // console.log(gptResults.choices);
        let gptResults = {choices:[{message:{content:"hera pheri, don, golmaal,raaz, bhooth, Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan"}}]};
        const suggestedMovies=gptResults.choices[0].message.content.split (",");
        dispatch(addGPTSuggestedNames(suggestedMovies));
        const promiseArray = suggestedMovies.map(movieName => searchTMDBMovies (movieName));
        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addSuggestedMovies(tmdbResults));
    }

    const searchTMDBMovies = async(movieName)=>{
        const data = await fetch(MOVIE_SEARCH_API.replace("{search_name}", movieName), TMDB_HEADER_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    return (
        <div className="flex justify-center">
            <form className="w-1/2 flex justify-center" onSubmit={(e)=> e.preventDefault()}>
                <input type="text" ref={searchText} placeholder={lang[selectedLang].gptSearchPlaceHolder} className="w-3/4 m-4 px-4"></input>
                <button onClick={search} className="w-1/4 bg-red-700 text-white m-4 px-4 py-2 rounded-lg">{lang[selectedLang].search}</button>
            </form>
        </div>
    )
}
export default GPTSearchBar;