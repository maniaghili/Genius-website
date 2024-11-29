import './coursebox.css'
import Heartcircle from '../heartcircle/heartcircle'
import { Link } from 'react-router-dom'
const coursebox = () => {
  return (
    
        <div className="md:w-11/12 ssm:w-full  h-96  rounded-3xl  flex flex-col items-center">              
                <img src="../../../public/02.jpg" className="w-full h-5/12 rounded-3xl" alt="" />
                <div className="w-5/6 h-16  rounded-2xl bg-slate-100">
                    <div className="flex flex-col justify-center p-1">
                    <p className="text-green-600 font-bold">. تکمیل شده</p>
                    <h3 className="font-bold">قدم صفر برنامه نویسی</h3>
                    </div>
                    <div className="flex mt-5 mb-2 w-full justify-start gap-3">
                        <div className="flex items-center opacity-70 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z">
                            </path>
                            <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z">
                            </path>
                        </svg>
                        <span className="flex"><p>5</p>فصل</span>
                        </div>
                        <div className="flex items-center w-fit opacity-70 gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd"></path>
                            </svg>
                        <span className="flex"><p>12</p>ساعت</span>
                        </div>
                    </div>
                    <div className="w-full h-16 flex justify-between items-center">
                        <div className="w-9/12  h-full flex items-center">
                        <img src="../../../public/01.jpeg" className="w-10 rounded-full h-10" alt="user" />
                        <div className="h-10 w-full">
                            <p className="opacity-70 ss">مدرس دوره:</p>
                            <span className="ss">مانی علیقلی نژاد</span>
                        </div>
                        </div>
                        <div className="w-3/12 h-full flex justify-center items-center">
                        <p className=" text-green-600 ray">رایگان!</p>
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
}

export default coursebox
