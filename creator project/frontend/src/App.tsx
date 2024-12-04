import { useRoutes } from 'react-router-dom'
import { Router } from './router/router'
import './App.css'
import { getMe } from './utils/getMe'
import { useContext, useEffect } from 'react'
import { userInfo } from './context/context'



function App() {
  const userAllInfos = useContext(userInfo)
  useEffect(()=>{
   getMe().then((infos:any)=>{
    userAllInfos.setUserInfo(infos[0])
    userAllInfos.setUserToken(infos[1])
   })
  
  },[userAllInfos])
  


const router = useRoutes(Router)
  return (
    <>
    {router}
   
    </>
  )
}

export default App
