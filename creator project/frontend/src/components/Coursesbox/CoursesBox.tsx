import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Coursebox from "../coursebox/coursebox";

import { Swiper, SwiperSlide } from 'swiper/react';

import {  Navigation } from 'swiper/modules';
 import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/navigation.css';


const CoursesBox = () => {
  return (
    <>
    <BreadCrumb />
    <div className="w-full flex justify-center mt-10 h-[480px]">
       <div className="w-[95%] ssm:justify-center flex gap-4 overflow-hidden rounded-2xl h-full">
       <Swiper
        
        navigation={true}
        modules={[ Navigation]}
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
        <SwiperSlide><Coursebox /></SwiperSlide>
        <SwiperSlide><Coursebox /></SwiperSlide>
        <SwiperSlide><Coursebox /></SwiperSlide>
        <SwiperSlide><Coursebox /></SwiperSlide>
        <SwiperSlide><Coursebox /></SwiperSlide>
        <SwiperSlide><Coursebox /></SwiperSlide>
        
        
      </Swiper>
      
       </div>
    </div>
    
      
    </>
    
  )
}

export default CoursesBox
