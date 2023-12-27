import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Utilities/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { addUser } from "../Utilities/userSlice";
import { LOGO } from "../Utilities/constants";

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
    return <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-40" alt="Netflix"
        src= {LOGO}></img>
        {user && <div className="flex justify-between">
            <img alt="image" className="w-12 h-12" src={user?.photoURL}></img>
            <button className="font-bold" onClick={handleLogout}>Logout</button>
        </div>}
    </div>
}

export default Header;