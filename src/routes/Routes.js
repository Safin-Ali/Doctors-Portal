import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Form/Login";
import Signup from "../components/Form/Signup";
import AppointmentPage from "../pages/appointment/AppointmentPage";
import AllUsers from "../pages/dashboard/AllUsers";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import PrivatePage from "../pages/private/PrivatePage";

const router = createBrowserRouter([
    {path:'/', element: <Main></Main>,children:[
        {path: '/', element: <Home></Home>},
        {path: '/appoinment', element: <AppointmentPage></AppointmentPage>},
        {path: '/login', element: <Login></Login>},
        {path: '/signup', element: <Signup></Signup>},
        {path: '/dashboard/myappointments/:email', loader:async ({params}) => fetch(`http://localhost:5000/dashboard/myappointments/${params.email}`,{
            headers: {authorization: `Bearer ${localStorage.getItem('jwt-encrypt-key')}`}
        }), element: <PrivatePage><Dashboard></Dashboard></PrivatePage>},
        {path: '/users', element: <PrivatePage><AllUsers></AllUsers></PrivatePage>},
    ]},
])

export default router;