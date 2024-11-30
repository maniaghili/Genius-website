
import HeaderTop from "../components/HeaderTop/HeaderTop"
import FooterBottom from "../components/footerBottom/footerBottom"
import CommentBox from "../components/commentBox/commentBox";
const articleDetail = () => {
  return (
    <>
    <HeaderTop />
    <div className="w-full flex justify-center ">
      <div className="w-[95%]  gap-3  flex md:flex-row ssm:flex-col ssm:gap-5 justify-center">
       <div className="md:w-[65%] ssm:w-full overflow-hidden ">
          <div className="flex flex-col items-center  justify-center">
           <img src="../../public/01.jpg" className="rounded-2xl mt-4" alt="" />
           <div className="bg-slate-200 w-[95%] rounded-b-2xl h-fit flex flex-col gap-2">
            <p className="font-bold text-[13px] mr-3 text-green-500">تکمیل شده</p>
            <span className="font-bold mr-3">دوره پروژه محور React و Next</span>
            <p className="opacity-70 text-[14px] mr-3 mb-5">ساخت وبسایت فروشگاهی با React عنوان دوره پروژه محور react در نابغه است که قصد داریم در قالب این دوره react را در قالب پروژه به شما آموزش دهیم.</p>
           </div>
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
            
          </div>
          <div className="my-5 ">
            <p className="font-bold my-2 text-[14px]">دیدگاه ها</p>
            <div className="border rounded-2xl flex flex-col gap-5">
              <div className="flex justify-center"><p className="font-bold text-[12px] mr-3 opacity-80 mt-3  ">ارسال دیدگاه</p></div> 
              <div className="flex mr-3 gap-2">
                <img src="../../public/01.jpeg" className="w-10 rounded-full h-10" alt="" />
                <div>
                  <p className="font-bold text-[12px]">مانی علیقلی</p>
                  <p className="font-bold text-[12px] opacity-70">2 هفته پیش</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <textarea className="bg-slate-200 w-11/12 h-36 rounded-2xl"  placeholder="نظر خود را وارد کنید">

                </textarea>
                 
              </div>
              <div className="flex justify-end m-4">
                <div className="bg-blue-600 cursor-pointer hover:opacity-90 transition-all text-white p-1 px-2 rounded-3xl flex justify-center gap-2 items-center"> 
                  <p>ثبت دیدگاه</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
             <CommentBox />
             
             
           {/* comments */}
          </div>
       </div>
       <div className="md:w-[35%] ssm:w-full md:inline rounded-2xl ssm:h-fit md:h-full bg-white" > 
          <div className="flex flex-col overflow-hidden h-fit rounded-2xl md:sticky md:top-[90px]">
         
          <div className="w-full h-fit flex justify-center mt-7">
          <div className="w-11/12 bg-white gap-2 flex flex-col justify-center items-start my-20 rounded-b-2xl h-20">
                <div className="flex w-fit items-center gap-2 justify-start ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 w-5 h-5">
                 <path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z">
                 </path>
                 </svg>

                 <p className="font-bold text-[13px]"> نویسنده مقاله</p>
                </div>
                 <div className="flex w-fit mr-3 justify-start">
             <div>
             <div className="flex gap-2">
               < img src="../../public/01.jpeg" className="w-10 rounded-full h-10" alt="" />
                      <div>
                           <p className="font-bold text-[12px]">مانی علیقلی</p>
                          <p className="font-bold text-[12px] opacity-70">2 هفته پیش</p>
                     </div>
                    </div>
                <div className="bg-slate-100 p-3 text-[13px] font-bold w-fit h-fit my-3 rounded-b-2xl rounded-tl-2xl">
                  <p>اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم دانشی که در این راه بدست آوردم را در اختیار دیگران قرار بدم :)</p></div>

                </div>
              </div>
             </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBottom />
    
    </>
  )
}

export default articleDetail