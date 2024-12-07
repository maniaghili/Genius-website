import { createContext, useState,PropsWithChildren,FC, useEffect } from "react";
import { getMe } from "../utils/getMe";


type allInfoType = {
    userInfos:{},
    setUserInfo:React.Dispatch<React.SetStateAction<object>>,
    userToken:string,
    setUserToken:React.Dispatch<React.SetStateAction<string>>
} 

const userInfo = createContext(createContext(null) as any)
const AuthContextProvider:FC<PropsWithChildren> = ({children}) =>{

const [userInfos,setUserInfo] = useState({})
const [userToken,setUserToken] = useState('')

useEffect(()=>{
    getMe().then((infos:any)=>{
     if(infos){
       setUserInfo(infos[0])  
       setUserToken(infos[1])
     }
    })
   },[])

const allInfo:allInfoType = {
    userInfos,
    setUserInfo,
    userToken,
    setUserToken
}

    return(
          <userInfo.Provider value={allInfo as any}>
               {children}
          </userInfo.Provider>
    )
}

export type {allInfoType}
export {AuthContextProvider,userInfo}
