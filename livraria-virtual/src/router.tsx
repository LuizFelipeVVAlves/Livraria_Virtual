import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import MainLayout from "./Layouts/mainLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home /> 
            }
        ]
    }
]);

export default router;