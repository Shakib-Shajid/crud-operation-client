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
            },
        ]
    },

]);

export default router;