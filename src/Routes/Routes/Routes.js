import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/ServiceDetails/ServiceDetails";
import LogIn from "../../Pages/LogIn/LogIn";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])