
import { setLocalStorage } from "../../../utils/util";



const handleUserRegister = (data:{
    accessToken:string
}) => {
setLocalStorage('userToken',data.accessToken)
alert('ورود موفقیت امیز بود')
}


export {handleUserRegister}