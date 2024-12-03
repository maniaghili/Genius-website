import { createContext, useState,PropsWithChildren } from "react";

const userInfo = createContext(undefined)


type allInfoType = {userInfos:any,
    setUserInfo:React.Dispatch<React.SetStateAction<object>>,
    userToken:any,
    setUserToken:React.Dispatch<React.SetStateAction<string>>
} 


const ContextProvider:React.FC<PropsWithChildren> = ({children}) =>{

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


export {ContextProvider,userInfo}