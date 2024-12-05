import Index from "../pages/Index"
import Login from "../pages/login";
import Register from "../pages/register/register";
import Series from "../pages/series";
import CourseDetail from "../pages/courseDetail";
import UserProfile from "../pages/userprofile";
import Basket from "../pages/basket";
import ArticleDetail from "../pages/articleDetail";
import {userProfile} from "../router/userprofile";
import { RouteObject } from "react-router-dom";


export const Router:RouteObject[] = [
    {path:"/" ,element: <Index />},
    {path:'/login', element:<Login />},
    {path:'/register' ,element:<Register />},
    {path:'/series' ,element:<Series />},
    {path:'/courseDetail/:courseName',element:<CourseDetail />},
    {path:'/userbasket',element:<Basket />},
    {path:'/articleDetail/:articleName' , element:<ArticleDetail />},
    {path:'/userprofile',element:<UserProfile />,children : userProfile}
]

 