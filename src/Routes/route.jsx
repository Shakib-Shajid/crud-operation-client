import { createBrowserRouter } from "react-router-dom";
import Users from "../components/Users";
import Main from "../components/Main";
import App from "../App";
import Update from "../components/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/users",
                element: <Users />,
                loader: ()=>fetch('http://localhost:5000/users')
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
            },

        ]
    },

]);

export default router;