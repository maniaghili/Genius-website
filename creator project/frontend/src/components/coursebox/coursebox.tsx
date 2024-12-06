import './coursebox.css'
import Heartcircle from '../heartcircle/heartcircle'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { memo, useEffect } from 'react'
const coursebox:React.FC = memo(({...course}:any) => {
console.log(course);

    useEffect(()=>{
        Aos.init({
            delay: 100
        })
    })

    

  return (
    
        <div className="md:w-11/12 ssm:w-full min-h-96  rounded-3xl  flex flex-col items-center" data-aos="zoom-in-up">              
                <img src={`http://localhost:4000/courses/covers/${course.cover}`} className="w-full h-5/12 rounded-3xl" alt="" />
                <div className="w-5/6 h-16  rounded-2xl bg-slate-100">
                    <div className="flex flex-col justify-center p-1">
                    <p className="text-green-600 font-bold">. {course.isComplete?'تکمیل شده':'در حال ضبط'}</p>
                    <h3 className="font-bold">{course.name}</h3>
                    </div>
                    <div className="flex mt-5 mb-2 w-full justify-start gap-3">
                        <div className="flex items-center opacity-70 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path></svg>
                        <span className="flex text-[12px] font-bold">{course.registers}</span>
                        </div>
                        <div className="flex items-center w-fit opacity-70 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"></path></svg>
                        <span className="flex">5.0</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center">
                        <div className="w-9/12  h-full flex items-center">
                        <img src="../../../public/01.jpeg" className="w-10 rounded-full h-10" alt="user" />
                        <div className="h-10 w-full">
                            <p className="opacity-70 ss">مدرس دوره:</p>
                            <span className="ss">{course.creator}</span>
                        </div>
                        </div>
                        <div className="w-3/12 h-full flex justify-center items-center">
                        <p className=" text-green-600 ray">{course.price?course.price:'رایگان!'}</p>
                        </div>
                    </div>
                    <div className="flex w-full gap-5 mt-3">
                        <Link to={'/courseDetail/jk'} className=" select-none bg-blue-600 w-4/5 cursor-pointer rounded-2xl flex justify-center items-center hover:bg-blue-500 transition-all">
                            <span className="text-white p-2">مشاهده دوره</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                                <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                        <Heartcircle />
                    </div>
                </div>
                

        </div>
  )
})

export default coursebox
