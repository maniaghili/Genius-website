import Index from "../pages/Index"
import Login from "../pages/login";
import Register from "../pages/register";
import Series from "../pages/series";
import CourseDetail from "../pages/courseDetail";
import UserProfile from "../pages/userprofile";
import Basket from "../pages/basket";
import UserCourses from "../pages/userPanel/userCourses";
import UserInfos from "../pages/userPanel/userInfos";
import UserTickets from "../pages/userPanel/userTickets";
import ArticleDetail from "../pages/articleDetail";
type ss = {
    path:string ,
    element: JSX.Element,
    children?:any
}

export const Router:ss[] = [
    {path:"/" ,element: <Index />},
    {path:'/login', element:<Login />},
    {path:'/register' ,element:<Register />},
    {path:'/series' ,element:<Series />},
    {path:'/courseDetail/:courseName',element:<CourseDetail />},
    {path:'/userbasket',element:<Basket />},
    {path:'/articleDetail/:articleName' , element:<ArticleDetail />},
    {path:'/userprofile/*',element:<UserProfile />,children:[
        {path:'courses',element:<UserCourses />},
        {path:'userInfos',element:<UserInfos />},
        {path:'userTickets',element:<UserTickets />},

    ]}
]

 