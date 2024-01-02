import { useSelector } from "react-redux";
import {lang} from "../Utilities/languageConstants";

const GPTSearchBar = ()=>{
    const selectedLang = useSelector((store) => store.language.selectedLanguage)
    return (
        <div className="flex justify-center">
            <form className="w-1/2 flex justify-center">
                <input type="text" placeholder={lang[selectedLang].gptSearchPlaceHolder} className="w-3/4 m-4 px-4"></input>
                <button className="w-1/4 bg-red-700 text-white m-4 px-4 py-2 rounded-lg">{lang[selectedLang].search}</button>
            </form>
        </div>
    )
}
export default GPTSearchBar;