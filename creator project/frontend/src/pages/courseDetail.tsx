
import HeaderTop from "../components/HeaderTop/HeaderTop"
import FooterBottom from "../components/footerBottom/footerBottom"
import CourseTimeInfo from "../components/courseTimeInfo/courseTimeInfo"
const courseDetail = () => {
  return (
    <>
    <HeaderTop />
    <div className="w-full flex justify-center ">
      <div className="w-[95%]  gap-3  flex justify-center">
       <div className="w-[65%] overflow-hidden ">
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
          <div className="bg-slate-200 h-10 rounded-2xl w-1/2 sticky top-[50x]">
          <ul className="w-full flex items-center opacity-80  h-full">
            <li className="w-1/3 flex items-center gap-2">  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z">
                    </path>
                </svg>
                <p className="font-bold text-[14px]">معرفی</p>

            </li>
            <li className="w-1/3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
                    </path>
                </svg>
                <p className="font-bold text-[14px]">معرفی</p>

            </li>
            <li className="w-1/3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155">
                    </path>
                </svg>
                <p className="font-bold text-[14px]">معرفی</p>

            </li>
           </ul>
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <p className="font-bold text-[14px]">معرفی دوره</p>
            <span className="opacity-70 text-[13px]">
            بدون شک در حال حاضر یکی از پرکاربردترین فریمورک‌های جاوا اسکریپتی که می‌توانید در دنیای وب پیدا بکنید React است. زمانی که یک فریمورک در زمینه‌های مختلف کاربرد داشته باشد نیز در نهایت باعث خواهد شد که فرصت‌های شغلی بسیار زیادی داشته باشد. اما آیا فکر می‌کنید برای قبول شدن در یک فرصت شغلی مناسب، تمام موارد لازم را در اختیار دارید؟ اگر حس می‌کنید در رابطه با این قضیه مطمئن نیستید و شک دارید، بهتر است با این دوره آموزشی همراه باشید.
            </span>
            <h2 className="font-bold">دوره آموزشی پروژه محور react و next</h2>
            <img src="../../public/01.jpg" className="rounded-2xl mt-4" alt="" />
            <span className="opacity-70 text-[13px]">
            زمانی که شما با موضوعات مختلف یک ابزار آشنایی پیدا کردید، یک نکته مهم که باید در نظر داشته باشید این است که چگونه با کنار هم قرار دادن ویژگی‌های مختلف خواهید توانست یک پروژه واقعی را ایجاد کنید. این موضوع دقیقا هدفی است که یک آموزش پروژه محور دنبال می‌کند. در یک آموزش پروژه محور در ابتدا شما به صورت مستقیم یا غیر مستقیم با مفاهیم اولیه آشنا شده و سپس فرایند یادگیری موضوعات جدید را در خلال ایجاد پروژه شروع خواهید کرد.

منظور از غیر مستقیم بودن یادگیری مفاهیم اولیه این است که در برخی از وبسایت‌های آموزشی از جمله وبسایت آموزشی نابغه ما دوره‌های مقدماتی را پیشتر ضبط کرده و از شما انتظار داریم که ابتدا آن‌ها را به خوبی نگاه کرده و یاد گرفته باشید. به همین دلیل است که ما در پایان نوشته‌های مربوط به هر دوره یک قسمت اختصاصی به نام «پیش‌نیازها» را ایجاد کرده و در آنجا خواهیم گفت که برای یادگیری این دوره آموزشی نیاز خواهید داشت چه پیش‌نیازهایی را در ابتدا طی کنید.
            </span>
            <h2 className="font-bold">سر فصلها</h2>
            <div className="bg-slate-200 flex justify-between items-center cursor-pointer border group rounded-2xl h-10">
              <div className="flex gap-2">
                <span className="font-bold text-[12px]">فصل اول</span>
                <p className="font-bold text-[12px] opacity-70 group-hover:opacity-100 ">معرفی</p>
              </div>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" opacity-70 group-hover:opacity-100 ml-4 w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                </svg>
              </div>
            </div>
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