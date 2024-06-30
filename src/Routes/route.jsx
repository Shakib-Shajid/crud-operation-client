import { createBrowserRouter } from "react-router-dom";
import Users from "../components/Users";
import Main from "../components/Main";
import App from "../App";

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
        ]
    },

]);

export default router;