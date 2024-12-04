import { getLocalStorage } from "../../../utils/util"


const navigateUser = (isLogin:string,isNotLogin:string) => {
  let isUserLogin = getLocalStorage('userToken')
  if(isUserLogin){
    return isLogin
  }
  return isNotLogin
}

export {navigateUser}