import { lazy } from "react";
import {userProfile} from "../router/userprofile";
import { RouteObject } from "react-router-dom";
const Index = lazy(()=>import("../pages/Index"));
const UserProfile =  lazy(()=>import ("../pages/userprofile"));
const Basket = lazy(()=>import("../pages/basket"))
const CourseDetail  = lazy(()=>import("../pages/courseDetail"))
const ArticleDetail = lazy(()=>import( "../pages/articleDetail"))
const Login = lazy(()=>import("../pages/login"));
const Register = lazy(()=>import("../pages/register/register"))
const Series = lazy(()=>import("../pages/series"))


export const Router:RouteObject[] = [
    {path:"/" ,element: <Index />},
    {path:'/login', element:<Login />},
    {path:'/register' ,element:<Register />},
    {path:'/series/:catName' ,element:<Series />},
    {path:'/courseDetail/:courseName',element:<CourseDetail />},
    {path:'/userbasket',element:<Basket />},
    {path:'/articleDetail/:articleName' , element:<ArticleDetail />},
    {path:'/userprofile',element:<UserProfile />,children : userProfile}
]

 