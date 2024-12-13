import {  memo, useEffect, useState } from "react";
import HeaderTop from "../components/HeaderTop/HeaderTop";
import FooterBottom from "../components/footerBottom/footerBottom";
import CourseBox from "../components/coursebox/coursebox";
import useCourses from "../assets/hooks/courses";
import { getUrlParam } from "../assets/funcs/url";
import IsNotData from "../components/isNotData/isNotData";
const searchCourses = memo(() => {

  const [courses,setCourses] = useState([])
  const [allCourses] = useCourses(undefined) as any
  const param = getUrlParam('search')
    console.log(param);
    

  useEffect(()=>{
    const filteredCourses = allCourses?.filter((course:any)=>course.name.includes(param))
    console.log(filteredCourses);
    
    setCourses(filteredCourses)
  },[allCourses?.length,param])

 
 
    return (
      <>
      <HeaderTop /> 
      
        <div className='lg:w-full flex justify-start my-4 gap-3 dark:text-gray-300'>
              <div className='flex justify-center items-center sm:mr-2 lg:mr-0'>
                  <div className='h-14 bg-blue-700 w-14  rounded-full flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                       <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
              </div>
              <div className=' h-full flex flex-col justify-center'>
                  <p className='text-blue-700 font-bold akh'>دوره های جست و جو شده  </p>
                  <p className="text-[11px] font-bold opacity-70">دوره ببین، تمرین کن، برنامه نویس شو </p>
              </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[96%] flex justify-center">
          <div className=" my-4 justify-center items-center ssm:gap-28 ssm:mb-24 sa:gap-8 ssm:grid-cols-1 md:gap-5 lg:grid-cols-3 md:grid-cols-2 grid w-full h-full  sa:grid-cols-2 ">
           {courses?.length?courses?.map((course : any)=>
            <CourseBox key={course._id} {...course} />
            ):<IsNotData dataName="دوره ای مطابق با سرچ شما وجود نداشت" />}
           </div>
          </div>
        </div>
          
      
        
         
           
      <FooterBottom />
      </>
    )
  })

export default searchCourses
