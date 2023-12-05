import { useState } from "react";
import Header from "./Header";

const Login = () =>{
    const [isSignInForm, setIsSignInForm]=useState(true);
    const toggleSignIn = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    return ( <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>
        <form className="absolute m-auto top-0 bottom-0 left-0 right-0 w-3/12 h-3/4 bg-black rounded-lg text-white bg-opacity-80">
            <div className="flex flex-wrap justify-center">
                <div className="w-3/4 mt-6">{isSignInForm? <label>Sign In </label>: <label> Sign Up </label>}</div>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="w-3/4 bg-gray-500 my-4 p-2 rounded-lg"/>}
                <input type="text" placeholder="Email Address" className="w-3/4 bg-gray-500 my-4 p-2 rounded-lg"/>
                <input type="password" placeholder="Password" className="w-3/4  bg-gray-500 my-4 p-2 rounded-lg"/>
                <button className="w-3/4  bg-red-700 my-6 p-2 rounded-lg">{isSignInForm? <label>Sign In </label>: <label> Sign Up </label>}</button>

                <div className="my-8 mx-4 font-extralight font-small">
                {isSignInForm? <label> New to Netflix? </label>: <label> Already have an account? </label>} 
                <button onClick={toggleSignIn}>{isSignInForm? <label>Sign up now. </label>: <label> Sign In </label>} </button>
                </div>
            </div>
        </form>
        </div>)
}

export default Login;