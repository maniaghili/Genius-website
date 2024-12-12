import { Link } from "react-router-dom"
import Heartcircle from "../heartcircle/heartcircle"
import Aos from 'aos';
import { FC, useEffect } from 'react'

const ArticleBox:FC = ({...article}:any) => {

  useEffect(()=>{
    Aos.init({
        delay: 150,
        duration:700
    })
    
})
  return (
    <div className='bg-slate-100 dark:bg-gray-800 rounded-2xl w-[95%]  overflow-hidden' data-aos="zoom-in-up" >
              <div className='m-3 rounded-xl '>
                <Link to={`/articleDetail/${article.shortName}`} className="w-full h-60% overflow-hidden rounded-xl">
                <img src={`http://localhost:4000/courses/covers/${article.cover}`} className=' hover:scale-105 duration-150  w-full rounded-xl' alt="" />
                </Link>
                <div className='flex justify-between '>
                  <p className='mt-2 font-bold'>{article.title}</p>
                  <div className='mt-[-20px] ml-4'>
                  <Heartcircle />
                  </div>
                </div>
                <div className='flex justify-between items-center mt-3'>
                   <div className='flex justify-center items-center gap-2'>
                    <img src=" ../../../public/01.jpeg" className="w-10 rounded-full h-10" alt="userPhoto" />
                    <span className='font-bold'>{article.creator.name}</span>
                   </div>
                   <Link to={`/articleDetail/${article.shortName}`}>
                   <div className='bg-slate-200 dark:bg-gray-900 p-1 rounded-3xl hover:bg-slate-100 transition-all cursor-pointer'>
                    <span className='text-blue-600 '> مشاهده</span>
                    </div>
                   </Link>
                </div>
                <div className='flex items-center justify-end gap-1 mt-3'>
                  <div className='flex items-center gap-1 opacity-70'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                      </svg>
                      <p className='ff'>زمان مطالعه:</p>
                  </div>
                  <span className='ff font-bold'>20 دقیقه</span>
                </div>
              </div>
                
              </div>
  )
}

export default ArticleBox
