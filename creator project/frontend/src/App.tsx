import { useLocation, useRoutes } from 'react-router-dom'
import { Router } from './router/router'
import './App.css'
import { getMe } from './utils/getMe'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { userInfo } from './context/context'

function App() {

  const {pathname} = useLocation()
  
  useLayoutEffect(()=>{
     window.scrollTo(0,0)
     console.clear()
  },[pathname])

  const userAllInfos = useContext(userInfo)

useEffect(()=>{
   getMe().then((infos:any)=>{
    if(infos){
      userAllInfos.setUserInfo(infos[0])
      userAllInfos.setUserToken(infos[1])
    }
   })
  },[])
  
const router = useRoutes(Router)
  return (
    <>
    {router}
   
    </>
  )
}

export default App
