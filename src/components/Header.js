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
    return <div className="absolute w-screen text-white px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-40" alt="Netflix"
        src= {LOGO}></img>
        {user && <div className="flex justify-between">
            <button className="bg-red-500 text-white rounded-lg py-2 px-4 my-4 mx-2">GPT Search</button>
            <img alt="image" className="w-12 h-12 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fRSmTbm_0zv9go1d67EtI53bwPupSJBRr9B7VU4h3ML24V7iFov9dUX51_wK8tk_-Hg&usqp=CAU"></img>
            <button className="font-bold mx-2" onClick={handleLogout}>Logout</button>
        </div>}
    </div>
}

export default Header;