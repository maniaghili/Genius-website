
import HeaderTop from "../components/HeaderTop/HeaderTop"
import FooterBottom from "../components/footerBottom/footerBottom"
import CourseTimeInfo from "../components/courseTimeInfo/courseTimeInfo"
const courseDetail = () => {
  return (
    <>
    <HeaderTop />
    <div className="w-full flex justify-center ">
      <div className="w-[95%]  gap-3  flex justify-center bg-black">
       <div className="w-[65%] overflow-hidden bg-blue-600">
          <div className="flex flex-col items-center  justify-center">
           <img src="../../public/01.jpg" className="rounded-2xl mt-4" alt="" />
           <div className="bg-slate-200 w-[95%] rounded-b-2xl h-fit flex flex-col gap-2">
            <p className="font-bold text-[13px] mr-3 text-green-500">تکمیل شده</p>
            <span className="font-bold mr-3">دوره پروژه محور React و Next</span>
            <p className="opacity-70 text-[14px] mr-3 mb-5">ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه است که قصد داریم در قالب این دوره react را در قالب پروژه به شما آموزش دهیم.</p>
           </div>
          </div>
          <div className="w-full my-5 h-32 flex gap-5">
            <CourseTimeInfo text={'مدت دوره'} time={'۱۴:۵۴:۱۶'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-600 w-5 h-5">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clip-rule="evenodd"></path>
              </svg>
            </CourseTimeInfo>
            <CourseTimeInfo text={'تعداد جلسات'} time={99}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-600 w-5 h-5">
                  <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z" clip-rule="evenodd"></path>
                  </svg>
            </CourseTimeInfo>
            <CourseTimeInfo text={'نوع دوره'} time={'ویژه / نقدی'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-600 w-5 h-5">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd"></path>
                  </svg>
            </CourseTimeInfo>
            <CourseTimeInfo text={'شرکت‌کنندگان'} time={'۱۲۲ دانشجو'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-blue-600 w-5 h-5">
                  <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z">
                      </path>
            </svg>
            </CourseTimeInfo>
            
          </div>
       </div>
       <div className="w-[35%] rounded-2xl overflow-hidden bg-red-500" > sz</div>
      </div>
    </div>
    <FooterBottom />
    
    </>
  )
}

export default courseDetail
