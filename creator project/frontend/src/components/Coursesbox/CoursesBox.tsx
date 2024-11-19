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
            </div>

        </div>
        
        
        <div className="w-1/3 bg-slate-500">s</div>
       </div>
    </div>
    </>
  )
}

export default CoursesBox
