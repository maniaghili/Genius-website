import BreadCrumb from "../BreadCrumb/BreadCrumb";
import './Coursesbox.css';
const CoursesBox = () => {
  return (
    <>
    <BreadCrumb />
    <div className="w-full flex justify-center mt-5 h-96 ">
       <div className="w-[95%] bg-zinc-700 flex gap-4 overflow-hidden rounded-2xl h-full">
        <div className="w-1/3  bg-gray-400">x</div>
        <div className="w-1/3 bg-gray-400">s</div>
        <div className="w-1/3 bg-slate-500">s</div>
       </div>
    </div>
    </>
  )
}

export default CoursesBox
