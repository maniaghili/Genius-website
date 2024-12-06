import './HeaderTop.css'
import CircleButton from '../circleButton/circleButton'
import HeaderLi from '../HeaderLi/HeaderLi'
import Username from '../userName/Username'
import {  memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { userInfo } from "../../context/context";
import { navigateUser } from './funcs/headerFuncs';

const HeaderTop = memo(
  () => {
    const user = useContext(userInfo)
    const [colaps,setColaps] = useState(false)
    
    return (
      <div className=' sticky w-full top-0 shadow-md box-border z-40  bg-slate-50  border-b-2  '>

    <div className="flex justify-center relative ">
     <div className="w-[95%] h-[75px] flex justify-between">
      <div className="w-[50%] flex">
        <div className="w-lg-[20%] w-md-[45%] flex items-center gap-2">
          <button onClick={()=>{setColaps(true)}} className='  coli_button bg-slate-100 rounded-full w-9 h-9 flex flex-col gap-1 items-center justify-center ssm:flex lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
          </button>
        <Link className='flex items-center' to={'/'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-700 ">
            <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>
            <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd"></path>
        </svg>
        <div className='flex flex-col gap-0 ssm:hidden md:inline-block'>
          <p className="opacity-70 akademi-header font-semibold ">آکادمی</p>
          <p className=" text-[20px] font-bold text-blue-700">
            نابغه
          </p>
        </div>
        </Link>
        
        </div>
        
        <div className="w-[75%]">


       <ul className=' h-full items-center gap-5 mr-3 ssm:hidden lg:flex '>
        <HeaderLi>
      دسته بندی آمـــوزش 
        </HeaderLi>
       <Link to="/series" className='opacity-65 text-[13px] font-bold'>همه ی دوره ها</Link>
        <Username name='لینک های مفید' isName={user?.userInfos?.name} />  
       </ul>

        </div>
      </div>
      
      <div className="w-md-[30%] ">
        <div className='flex w-fit items-center h-full gap-4'>
          <div className='flex items-center gap-4 ssm:hidden lg:flex'>
          <CircleButton id={1}>
          <button className='parent bg-slate-100 hover:bg-slate-200 transition-all '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path>
          </svg>
          </button>
          </CircleButton>
          <CircleButton id={2}>
          <button className='parent bg-slate-100 hover:bg-slate-200 transition-all '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
          </svg>
          </button>
          </CircleButton>
          </div>
          <CircleButton >
          <Link className='parent bg-slate-100 hover:bg-slate-200 transition-all' to={'/userbasket'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
          </svg>
         </Link>
          </CircleButton>
          <CircleButton>
          
          <Link className='parent bg-slate-100 hover:bg-slate-200 transition-all' to={navigateUser('/userprofile','/login')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
          </svg>
         </Link>
          </CircleButton>
            
          <Username name={user?.userInfos?.name} isName={true}/>  
        </div>
      </div>
     </div>
     {
      colaps?
      <div  className='active_colaps z-50 absolute h-screen box-border w-full lg:hidden flex justify-between'>
       <div className='w-3/4 bg-white'>
       <div className='z-50 w-full  flex items-center justify-between'>
        
        <div className='flex w-1/2 h-1/5  gap-3 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-700">
            <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>
            <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd"></path>
          </svg>
          <div>
          <p className="opacity-70 akademi-header font-semibold">آکادمی</p>
          <p className=" na-header  font-bold text-blue-700">
            نابغه
          </p>
          </div>
        </div>
        

        <button onClick={()=>{setColaps(false)}} className='ml-2 h-10 w-10'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:text-red-500 w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
         </svg>

        </button>
       </div>

       <div className='w-full flex  flex-col items-center'>
         <div className='flex items-center gap-2 mt-4 bg-slate-200 rounded-2xl w-11/12 h-11 border border-neutral-700 border-opacity-30'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd"></path>
          </svg>
          <input type="text" className='bg-transparent h-full w-full' placeholder='دنبال چی میگردی؟'/>
         </div>
         
         <div className='w-11/12 mt-6 h-16 border-y-2 flex justify-between items-center  border-y-neutral-200 '> 
          <p className='font-bold'>تم تاریک</p>
           <div className="w-11 h-5 relative bg-background border-2 border-border peer-focus:outline-none rounded-full peer peer-checked:after:left-[26px] peer-checked:after:bg-background after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:bg-border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary peer-checked:border-primary">
           </div>
        </div>

        <div className='w-11/12 mt-7'>
        <div className='w-full h-40 '>
          <ul className='h-full '>
            <li className='opacity-60 hover:h-fit transition-all flex flex-col group justify-between items-start gap-3 h-10'>
                  <div className='flex justify-between items-center w-full'>
                   <div className='flex items-center gap-3 group'>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ">
                       <path fill-rule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path>
                     </svg>
                     <p>دسته بندی آموزشها</p>
                   </div> 

                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="transition-all group-hover:rotate-180 w-5 h-5">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                   </svg>
                  </div>
                 <div className='group-hover:flex hidden'>
                  <ul className='list-disc mr-10 mb-4'>
                    <li>فرانت اند</li>
                    <li>بک اند</li>
                    <li>فرانت اند</li>
                    <li>بک اند</li>
                  </ul>
                 </div>
            </li>
            <li className='opacity-60 flex justify-start items-center gap-3 h-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z">
                </path>
            </svg>
            <p> دوره ها</p>
            </li>
            <li className='opacity-60 flex justify-start items-center gap-3 h-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z">
                </path>
            </svg>
            <p>مقالات آموزشی</p>
            </li>
          </ul>
        </div>
        </div>

        </div>

        
       
       </div>
       <div onClick={()=>{setColaps(false)}} className='opacity-10 w-1/5 '></div>
     
     </div>:
     <div className=' colaps z-50 absolute  h-screen w-1/2 lg:hidden'>
     
    </div>
     }
    </div>
    
     </div>
    
  )
}
) 

export default HeaderTop
