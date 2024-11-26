
import Heartcircle from "../heartcircle/heartcircle"

const commentBox = () => {
  return (
    <div className="flex flex-col items-end">
    <div className="w-full flex flex-col my-6 items-center border h-fit rounded-2xl">
    <div className="flex justify-between w-full m-2 mt-4">
      <div className="flex mr-3">
          <div className="flex mr-3 gap-2">
           <img src="../../public/01.jpeg" className="w-10 rounded-full h-10" alt="" />
            <div>
               <p className="font-bold text-[12px]">مانی علیقلی</p>
               <p className="font-bold text-[12px] opacity-70">2 هفته پیش</p>
            </div>
          </div>
     </div>
     <div className="flex gap-2 ml-5">
      <div className="bg-slate-200  hover:text-blue-700 cursor-pointer rounded-2xl w-20 flex p-1 justify-center gap-2 items-center opacity-80">
        <p className="font-bold text-[12px]">پاسخ</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fill-rule="evenodd" d="M12.207 2.232a.75.75 0 0 0 .025 1.06l4.146 3.958H6.375a5.375 5.375 0 0 0 0 10.75H9.25a.75.75 0 0 0 0-1.5H6.375a3.875 3.875 0 0 1 0-7.75h10.003l-4.146 3.957a.75.75 0 0 0 1.036 1.085l5.5-5.25a.75.75 0 0 0 0-1.085l-5.5-5.25a.75.75 0 0 0-1.06.025Z" clip-rule="evenodd"></path>
        </svg>
      </div>
         <Heartcircle />
     </div>
    </div>
    <div className="w-[95%] my-3 bg-slate-400 h-[1px] opacity-50"></div>
    <div className="mb-5 w-[95%]">
      <p className="font-bold text-[13px] opacity-70">من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز بیشتری دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو ببینم این دوره رو ببینم(بخش6دوره بیشتر مد نظرمه)</p>
    </div>
  </div>

  <div className="w-11/12 flex flex-col  items-center border h-fit rounded-2xl">
    <div className="flex justify-between w-full m-2 mt-4">
      <div className="flex mr-3">
          <div className="flex mr-3 gap-2">
           <img src="../../public/01.jpeg" className="w-10 rounded-full h-10" alt="" />
            <div>
               <p className="font-bold text-[12px]">مانی علیقلی</p>
               <p className="font-bold text-[12px] opacity-70">2 هفته پیش</p>
            </div>
          </div>
     </div>
     <div className="flex gap-2 ml-5">
      <div className="bg-slate-200  hover:text-blue-700 cursor-pointer rounded-2xl w-20 flex p-1 justify-center gap-2 items-center opacity-80">
        <p className="font-bold text-[12px]">پاسخ</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fill-rule="evenodd" d="M12.207 2.232a.75.75 0 0 0 .025 1.06l4.146 3.958H6.375a5.375 5.375 0 0 0 0 10.75H9.25a.75.75 0 0 0 0-1.5H6.375a3.875 3.875 0 0 1 0-7.75h10.003l-4.146 3.957a.75.75 0 0 0 1.036 1.085l5.5-5.25a.75.75 0 0 0 0-1.085l-5.5-5.25a.75.75 0 0 0-1.06.025Z" clip-rule="evenodd"></path>
        </svg>
      </div>
         <Heartcircle />
     </div>
    </div>
    <div className="w-[95%] my-3 bg-slate-400 h-[1px] opacity-50"></div>
    <div className="mb-5 w-[95%]">
      <p className="font-bold text-[13px] opacity-70">من این دوره رو خریدم و میخوام نکست هم بعدا یاد بگیرم چون نیاز بیشتری دارم به اموزش های این دوره میشه بدون اینکه دوره نکست رو ببینم این دوره رو ببینم(بخش6دوره بیشتر مد نظرمه)</p>
    </div>
  </div>
  </div>
  )
}

export default commentBox
