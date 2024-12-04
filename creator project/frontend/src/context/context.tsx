import { createContext, useState,PropsWithChildren,FC } from "react";


type allInfoType = {
    userInfos:{},
    setUserInfo:React.Dispatch<React.SetStateAction<object>>,
    userToken:string,
    setUserToken:React.Dispatch<React.SetStateAction<string>>
} 

const userInfo = createContext(createContext(null) as any)
const ContextProvider:FC<PropsWithChildren> = ({children}) =>{

const [userInfos,setUserInfo] = useState({})
const [userToken,setUserToken] = useState('')



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
export {ContextProvider,userInfo}
