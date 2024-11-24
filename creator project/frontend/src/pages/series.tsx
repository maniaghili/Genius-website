import { useState } from "react";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import FooterBottom from "../components/footerBottom/footerBottom";

const series = () => {

const [isSelectCourseType,setIsSelectCourseType] = useState(false)
const [isCategoryCourse,setIsCategoryCourse] = useState(false)
  
  return (
    <>
    <HeaderTop /> 
    <div className="w-full  flex justify-center">
      <div className="w-[96%] h-[800px] flex gap-3">
       <div className="bg-white h-full w-1/4">
         <div className="h-fit sticky top-[20px] ">
          <div className='lg:w-full flex justify-center my-4 gap-3 '>
            <div className='flex justify-center items-center sm:mr-2 lg:mr-0'>
                <div className='h-14 bg-blue-700 w-14  rounded-full flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                     <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clip-rule="evenodd"></path>
                  </svg>
                </div>
            </div>
            <div className=' h-full flex flex-col justify-center'>
                <p className='text-blue-700 font-bold akh'>دوره های آموزشی  </p>
                <p className="text-[11px] font-bold opacity-70">دوره ببین، تمرین کن، برنامه نویس شو </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center ">
            <p className="font-bold text-[13px]">جست وجو دوره</p>
            <div className="bg-slate-200 h-10 rounded-xl  overflow-hidden justify-between flex items-center my-2">
              <input type="text" className="bg-slate-200 h-10 " placeholder="عنوان دوره..." />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-3 w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path></svg>
            </div>
            <div className="bg-slate-200 h-10 flex overflow-hidden rounded-xl items-center justify-between my-2">
            <p className="mr-1 font-bold text-[13px]">در حال برگزاری</p>
             
            </div>
            <div onClick={()=>{setIsSelectCourseType(type => !type)}} className="select-none bg-slate-200 h-10  flex  overflow-hidden rounded-xl hover:text-blue-600 transition-all cursor-pointer items-center justify-between my-2">
             
                <div className="flex items-center">

                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"></path>
                     </svg>
                   <p className="mr-1 font-bold text-[13px]"> نوع دوره</p>
                </div>
                   {isSelectCourseType?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={'ml-3 w-5 h-5 rotate-180'}>
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                   </svg>:
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={'ml-3 w-5 h-5'}>
                   <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
               </svg>}
              
           
            </div>
            {isSelectCourseType &&
            <div className="bg-slate-200 my-3 h-24 rounded-2xl">
            <ul className="mt-2 mr-2 flex flex-col gap-2">
              
            <li className="flex items-center gap-1"><input type="radio" name="select" /><p className="font-bold text-[13px] opacity-70">رایگان</p></li>
            <li className="flex items-center gap-1"><input type="radio" name="select" /><p className="font-bold text-[13px] opacity-70">فقط نقدی</p></li>
            <li className="flex items-center gap-1"><input type="radio" name="select" /><p className="font-bold text-[13px] opacity-70">نقدی و اعضای ویژه</p></li>
            </ul>
          </div>}
            <div className="h-[1px] opacity-40 bg-gray-900 w-full"></div>
            <div onClick={()=>{setIsCategoryCourse(is=>!is)}} className=" hover:text-blue-600 select-none bg-slate-200 h-10 flex overflow-hidden rounded-xl justify-between items-center  my-2">
            
             <div className="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"></path>
              </svg>
              <p className="mr-1 font-bold text-[13px]">دسته بندی دوره</p> 
             </div>
             {isCategoryCourse?
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-3 rotate-180 w-5 h-5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
         </svg>:
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-3 w-5 h-5">
         <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
     </svg>}
            </div>
          </div>
          {isCategoryCourse&&
          <div className="bg-slate-200 my-3 h-24 rounded-2xl">
          <ul className=" h-full mr-2 flex flex-col gap-2">
            
          <li className="flex items-center mt-2 gap-1"><input type="radio" name="select" /><p className="font-bold text-[13px] opacity-70">پایتون</p></li>
          <li className="flex items-center gap-1"><input type="radio" name="select" /><p className="font-bold text-[13px] opacity-70">جاوا اسکریپت</p></li>
          <li className="flex items-center gap-1"><input type="radio" name="select" /><p className="font-bold text-[13px] opacity-70"> نود جی  </p></li>
          </ul>
        </div>
    }
    </div>
       </div>
        <div className="w-3/4 bg-slate-600 h-full">s</div>
      </div>
    </div>
         
    <FooterBottom />
    </>
  )
}

export default series
