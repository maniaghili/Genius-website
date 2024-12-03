import { userInfo } from "../../../context/context";
import { setLocalStorage } from "../../../utils/util";
import { useContext } from "react";


const userInfos = useContext(userInfo)

console.log(userInfos);


const handleUserRegister = (data:{
    accessToken:string
}) => {
console.log(data);
 
setLocalStorage('userToken',data.accessToken)

}


export {handleUserRegister}