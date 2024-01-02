import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utilities/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { addUser } from "../Utilities/userSlice";
import { LOGO, USER_LOGO } from "../Utilities/constants";
import { toggleGPTSearch } from "../Utilities/gptSearchSlice";
import { SUPPORTED_LANGUAGES } from "../Utilities/languageConstants";
import { addSelectedLanguage } from "../Utilities/languageSlice";

const Header = () =>{
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const user = useSelector((store)=>store.user);
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              dispatch(addUser({email: user.email, photoURL: user.photoURL, uid: user.uid,
                displayName: user.displayName}));
              navigate("/browse");
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });
          return () => unsubscribe();
    }, []);
    const handleLogout = () =>{
        signOut(auth)
        .then(() => {})
        .catch((error) => {
          navigate("/error");
        });
    }
    const toggleSearch = () =>{
        dispatch(toggleGPTSearch());
    }
    const handleLanguageSelection = ()=>{
        const selectedLang = document.getElementById("selectLanguage").value;
        dispatch(addSelectedLanguage(selectedLang));
    }
    return <div className="absolute w-screen text-white px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-40" alt="Netflix"
        src= {LOGO}></img>
        <div className="flex justify-between">
            <select className="my-4 rounded-lg bg-red-400" onChange={handleLanguageSelection} id="selectLanguage">
                {
                    SUPPORTED_LANGUAGES.map(ln => {
                        return <option value={ln.lang_id}>{ln.language}</option>
                    })
                }
            </select>
        {user && <>
            <button className="bg-red-500 text-white rounded-lg py-2 px-4 my-4 mx-2" onClick={toggleSearch}>GPT Search</button>
            <img alt="image" className="w-12 h-12 mx-2" src= {USER_LOGO}></img>
            <button className="font-bold mx-2" onClick={handleLogout}>Logout</button>
            </>}
        </div>
    </div>
}

export default Header;