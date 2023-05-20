import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <Home /> },
            { path: '/appointment', element: <PrivateRoute> <Appointment /></PrivateRoute> },
            { path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute> },
            { path: '/reviews', element: <Home /> },
            { path: '/contact', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    },
]);