import 'izitoast/dist/js/iziToast.min.js'
import 'izitoast/dist/css/iziToast.min.css'
import iziToast from 'izitoast'

const showIziToast = (title:string,message:string,color:string) => {

      iziToast.show({
        title,
        message,
        color,
        timeout:1500,
        position:'topRight',
      })

}

const setLocalStorage = (key:string,value:string) => {

return localStorage.setItem(key,value)

}

const getLocalStorage = (key:string) => {
   return localStorage.getItem(key)
}

const removeLocalStorage = (key:string) => {
   localStorage.removeItem(key)
}



export{setLocalStorage,getLocalStorage,removeLocalStorage,showIziToast}