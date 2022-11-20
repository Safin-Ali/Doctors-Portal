import { createBrowserRouter } from "react-router-dom";
import AlluserTable from "../components/dashboard-table/AlluserTable";
import Dashtable from "../components/dashboard-table/Dashtable";
import Login from "../components/Form/Login";
import Signup from "../components/Form/Signup";
import PageNotFound404 from "../pages/404-Not-Found/PageNotFound404";
import AppointmentPage from "../pages/appointment/AppointmentPage";
import AllUsers from "../pages/dashboard/AllUsers";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import AdminPage from "../pages/private/AdminPage";
import PrivatePage from "../pages/private/PrivatePage";

const router = createBrowserRouter([

    {path: '/*', element:<PageNotFound404></PageNotFound404>},

    {path:'/', element: <Main></Main>,children:[

        {path: '/', element: <Home></Home>},

        {path: '/appoinment', element: <AppointmentPage></AppointmentPage>},

        {path: '/login', element: <Login></Login>},

        {path: '/signup', element: <Signup></Signup>},

        {path: '/dashboard',element: <PrivatePage><Dashboard></Dashboard></PrivatePage>,children:[

            {path:'/dashboard/myappointments',element:<Dashtable></Dashtable>},

            {path:'/dashboard/users',element:<AdminPage><AllUsers></AllUsers></AdminPage>},

        ]},
    ]},
])

export default router;