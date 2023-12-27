import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../Utilities/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utilities/userSlice";

const Body = () =>{
    const AppRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/Login",
            element:<Login/>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ])
    return (<div>
        <RouterProvider router={AppRouter}/>
    </div>)
}

export default Body;