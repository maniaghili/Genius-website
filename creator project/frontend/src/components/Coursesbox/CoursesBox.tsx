import BreadCrumb from "../BreadCrumb/BreadCrumb";
import './Coursesbox.css';
const CoursesBox = () => {
  return (
    <>
    <BreadCrumb />
    <div className="w-full flex justify-center mt-5 h-[480px] ">
       <div className="w-[95%] flex gap-4 overflow-hidden rounded-2xl h-full">
        <div className="w-1/3  bg-gray-400">x</div>
        
        
        
        <div className="w-1/3  rounded-3xl overflow-hidden flex flex-col items-center">
            <img src="../../../public/02.jpg" className="w-full h-2/5 rounded-3xl" alt="" />
            <div className="w-5/6 h-16  rounded-2xl bg-slate-200">
                <div className="flex flex-col justify-center p-1">
                  <p className="text-green-600 font-bold">. تکمیل شده</p>
                  <h3 className="font-bold">قدم صفر برنامه نویسی</h3>
                </div>
                <div className="flex mt-5 w-full justify-start gap-3">
                    <div className="flex items-center opacity-70 gap-1">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                           <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h3.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12A1.5 1.5 0 0 1 17 6.622V12.5a1.5 1.5 0 0 1-1.5 1.5h-1v-3.379a3 3 0 0 0-.879-2.121L10.5 5.379A3 3 0 0 0 8.379 4.5H7v-1Z">
                           </path>
                           <path d="M4.5 6A1.5 1.5 0 0 0 3 7.5v9A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-5.879a1.5 1.5 0 0 0-.44-1.06L9.44 6.439A1.5 1.5 0 0 0 8.378 6H4.5Z">
                           </path>
                       </svg>
                       <span className="flex"><p>5</p>فصل</span>
                    </div>
                    <div className="flex items-center opacity-70 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd"></path>
                        </svg>
                       <span className="flex"><p>12</p>ساعت</span>
                    </div>
                </div>
            </div>

        </div>
        
        
        <div className="w-1/3 bg-slate-500">s</div>
       </div>
    </div>
    </>
  )
}

export default CoursesBox
