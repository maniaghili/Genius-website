import { memo, useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Coursebox from "../coursebox/coursebox";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/navigation.css';
import { useQuery } from "react-query";
import axios from "axios";


const CoursesBox = memo(() => {
  
const [courses,setCourses] = useState([])

 const {data} = useQuery("Courses",() =>axios.get("http://localhost:4000/v1/courses"),{staleTime:200000})

  useEffect(()=>{
    setCourses(data?.data)
  },[data])
  
  console.log('salam');
  

  return (
    <>
    <BreadCrumb />
    <div className="w-full flex justify-center mt-10 h-[480px]">
       <div className="w-[95%] ssm:justify-center flex gap-4 overflow-hidden rounded-2xl h-full">
       <Swiper
        
        navigation={true}
        modules={[ Navigation]}
        loop={true}
        className="mySwiper"
        breakpoints={{
          100:{
            slidesPerView:1
          },
          550:{
            slidesPerView:2
          },
          1050:{
            slidesPerView:3
          }

        }}
      >
        {
          courses?.map(course=>(
            <SwiperSlide key={course._id}><Coursebox {...course} /></SwiperSlide>
          ))
        }
      </Swiper>
      
       </div>
    </div>
    
      
    </>
    
  )
})

export default CoursesBox
