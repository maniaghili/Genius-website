import Index from "../pages/Index"
import Login from "../pages/login";
import Register from "../pages/register";
import Series from "../pages/series";
type ss = {
    path:string ,element: JSX.Element
}

export const Router:ss[] = [
    {path:"/" ,element: <Index />},
    {path:'/login', element:<Login />},
    {path:'/register' ,element:<Register />},
    {path:'/series' ,element:<Series />}
]

 