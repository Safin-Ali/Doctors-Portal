import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Form/Login";
import Signup from "../components/Form/Signup";
import AppointmentPage from "../pages/appointment/AppointmentPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
    {path:'/', element: <Main></Main>,children:[
        {path: '/', element: <Home></Home>},
        {path: '/appoinment', element: <AppointmentPage></AppointmentPage>},
        {path: '/login', element: <Login></Login>},
        {path: '/signup', element: <Signup></Signup>},
        {path: '/dashboard', element: <Dashboard></Dashboard>},
    ]},
])

export default router;