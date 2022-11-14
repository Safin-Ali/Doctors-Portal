import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
    {path:'/', element: <Main></Main>,children:[
        {path: '/', element: <Home></Home>}
    ]}
])

export default router;