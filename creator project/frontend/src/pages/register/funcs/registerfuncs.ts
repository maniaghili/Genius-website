
import { setLocalStorage } from "../../../utils/util";



const handleUserRegister = (data:{
    accessToken:string
}) => {


setLocalStorage('userToken',data.accessToken)

alert('ثبت نام موفقیت امیز بود')

}


export {handleUserRegister}