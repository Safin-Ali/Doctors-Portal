import { createBrowserRouter } from "react-router-dom";
import AppointmentPage from "../pages/appointment/AppointmentPage";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
    {path:'/', element: <Main></Main>,children:[
        {path: '/', element: <Home></Home>},
        {path: '/appoinment', element: <AppointmentPage></AppointmentPage>},
    ]}
])

export default router;