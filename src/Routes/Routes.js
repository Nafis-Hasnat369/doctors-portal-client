import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <Home /> },
            { path: '/appointment', element: <Home /> },
            { path: '/reviews', element: <Home /> },
            { path: '/contact', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    },
]);