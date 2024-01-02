import GPTSearchBar from "./GPTSearchBar";
import GPTSearchSuggestions from "./GPTSearchSuggestions";
import { BACKGROUND } from "../Utilities/constants";

const GPTSearchPage = ()=>{
    return <div>
        <div className="absolute -z-10">
            <img src={BACKGROUND}/>
        </div>
        <div className="pt-[10%]">
            <GPTSearchBar></GPTSearchBar>
            <GPTSearchSuggestions></GPTSearchSuggestions>
        </div>
    </div>
}

export default GPTSearchPage;