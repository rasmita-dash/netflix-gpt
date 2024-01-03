import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Play from "./Play";

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
        },
        {
            path: "/Play/:movieId",
            element: <Play/>
        }
    ])
    return (<div>
        <RouterProvider router={AppRouter}/>
    </div>)
}

export default Body;