import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <Home /> },
            { path: '/appointment', element: <PrivateRoute> <Appointment /></PrivateRoute> },
            { path: '/reviews', element: <Home /> },
            { path: '/contact', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
        ]
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            { path: '/dashboard', element: <MyAppointment /> },
            { path: '/dashboard/allUsers', element: <AdminRoute><AllUsers /></AdminRoute> },
        ]
    }
]);