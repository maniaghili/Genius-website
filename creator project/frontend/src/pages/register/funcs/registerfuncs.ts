
import { setLocalStorage, showIziToast } from "../../../utils/util";



const handleUserRegister = (data:{
    accessToken:string
}) => {
setLocalStorage('userToken',data.accessToken)
 showIziToast('با موفقیت وارد شدید','موفق','green')
}


export {handleUserRegister}