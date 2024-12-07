import React, { memo, useContext } from "react"
import './UserInfo.css'
import { Link } from "react-router-dom"
import { navigateUser } from "../HeaderTop/funcs/headerFuncs"
import { userInfo } from "../../context/context"
import { removeLocalStorage, showIziToast } from "../../utils/util"
import { showSwal } from "../../utils/swal"

type name = {
    name:string | boolean | undefined
    isName:boolean
}


const Username:React.FC<name> = memo(({name,isName}) => {
   
  const user = useContext(userInfo)
 
 
   return (  
     <div className="flex items-center h-full group relative ">
           <div className="w-2/3">
              <p className='jjl opacity-65'>{name?name:'کاربر مهمان'}</p>
           </div>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="group-hover:rotate-180 transition-all w-5 h-5">
             <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
         </svg>
         <ul className="group-hover:visible drop_down bg-slate-50 absolute top-16 w-44 left-4  overflow-hidden min-h-40 rounded-lg">
          <li className="text-black mt-1 cursor-pointer gap-3  h-8 flex items-center hover:text-blue-500">
          <Link className="flex gap-3 items-center w-full h-full" to={navigateUser('/userprofile','/login')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path>
             </svg>
           <p className="text-[13px] font-bold">{name && isName ?'مشاهده پروفایل':'ورود/ ثبت نام'}</p>
          </Link>
          </li>
          <li className="text-black mt-1 gap-3 cursor-pointer h-8 flex items-center hover:text-blue-500">
          <Link className="flex gap-3 items-center w-full h-full" to={navigateUser('/series','/login')} >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"></path>
           </svg>
           <p className="text-[13px] font-bold">دوره ها</p>
          </Link>
          </li>
          <li className="text-black mt-1 cursor-pointer gap-3 h-8 flex items-center hover:text-blue-500">
          <Link className="flex gap-3 items-center w-full h-full" to={'/userbasket'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
           <p className="text-[13px] font-bold"> سبد خرید</p>
          </Link>
          </li>
          
          
             {
               name && isName &&
               <>
               <li className="text-black mt-1  gap-3 cursor-pointer h-8 flex items-center  hover:text-blue-500">
           <Link className="flex gap-3 items-center w-full h-full" to={navigateUser('/userprofile/userTickets','/login')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"></path>
             </svg>
           <p className="text-[13px] font-bold">تیکت ها</p>
           </Link>
          </li>
               
          <li onClick={()=>{
           showSwal({
             title:'خروج از حساب',
             text:'آیا مطمین هستید؟',
             icon:'warning',
             buttons:['خیر','بله']
           }).then(resolve=>{
             if(resolve){
               showIziToast('موفق','از حساب کاربری خود خارج شدید','green') 
               removeLocalStorage('userToken')
          
               user.setUserToken('')
               user.setUserInfo({})
             }
             
           })
          
          
          }} className="text-red-600 mt-1  gap-3 cursor-pointer h-8 flex items-center hover:text-blue-500" >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5">
               <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"></path>
               </svg>
                  <p className="text-[13px] font-bold">خروج از حساب  </p>
           </li>
               
               </>
             }
         
         </ul>
     </div>
   )
 })

export default Username
