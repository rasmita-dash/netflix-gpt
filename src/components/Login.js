import { useRef, useState } from "react";
import Header from "./Header";
import { validateSignIn, validateSignUp } from "../Utilities/Validate";
import { auth } from "../Utilities/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { BACKGROUND } from "../Utilities/constants";

const Login = () =>{
    const [isSignInForm, setIsSignInForm]=useState(true);
    const [errorMsg, setErrorMsg] =useState('');
    const fullName= useRef(null);
    const email= useRef(null);
    const password= useRef(null);
    const toggleSignIn = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleSignInSignUp=(e)=>{
        e.preventDefault();
        const validationMsg = isSignInForm? 
                                validateSignIn(email.current.value, password.current.value) : 
                                validateSignUp(email.current.value, password.current.value, fullName.current.value);
        if(validationMsg && validationMsg.length > 0){
            setErrorMsg(validationMsg)
        }else{
            if(isSignInForm){
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMsg(errorCode + ": " + errorMessage);
                    });
            }else{
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMsg(errorCode + ": " + errorMessage);
                    });
            }
        }
    }
    return ( <div>
        <Header></Header>
        <div className="absolute">
            <img src={BACKGROUND}/>
        </div>
        <form className="absolute m-auto top-0 bottom-0 left-0 right-0 w-3/12 h-3/4 bg-black rounded-lg text-white bg-opacity-80">
            <div className="flex flex-wrap justify-center">
                <div className="w-3/4 mt-6">{isSignInForm? <label>Sign In </label>: <label> Sign Up </label>}</div>
                {!isSignInForm && <input type="text" ref={fullName} placeholder="Full Name" className="w-3/4 bg-gray-500 my-4 p-2 rounded-lg"/>}
                <input ref={email} type="text" placeholder="Email Address" className="w-3/4 bg-gray-500 my-4 p-2 rounded-lg"/>
                <input type="password" ref={password} placeholder="Password" className="w-3/4  bg-gray-500 my-4 p-2 rounded-lg"/>
                <p>{errorMsg}</p>
                <button className="w-3/4  bg-red-700 my-6 p-2 rounded-lg" onClick={e=> handleSignInSignUp(e)}>
                    {isSignInForm? <label>Sign In </label>: <label> Sign Up </label>}
                </button>

                <div className="my-8 mx-4 font-extralight font-small">
                {isSignInForm? <label> New to Netflix? </label>: <label> Already have an account? </label>} 
                <button onClick={toggleSignIn}>{isSignInForm? <label>Sign up now. </label>: <label> Sign In </label>} </button>
                </div>
            </div>
        </form>
        </div>)
}

export default Login;