import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import MainLayout from "./Layouts/mainLayout";
import Genders_Page from "./pages/Genders_Page/Genders_Page";
import Book_Details from "./pages/Book_Details/Book_Details";



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
            },
            {
                path: "/home/gender",
                element: <Genders_Page></Genders_Page>
            },
            {
                path: "/home/book/:bookId",
                element: <Book_Details></Book_Details>
            }
        ]
    }
]);

export default router;