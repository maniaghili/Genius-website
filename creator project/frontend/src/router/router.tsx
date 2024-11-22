import Index from "../pages/index/Index"
import Login from "../pages/index/login"
type ss = {
    path:string ,element: JSX.Element
}

export const Router:ss[] = [
    {path:"/" ,element: <Index />},
    {path:'/login', element:<Login />}
]

 