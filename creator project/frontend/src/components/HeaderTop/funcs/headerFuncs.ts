import { getLocalStorage } from "../../../utils/util"


const navigateProfile = () => {
  let isLogin = getLocalStorage('userToken')
  if(isLogin){
    return '/userProfile'
  }
  return '/login'
}

export {navigateProfile}