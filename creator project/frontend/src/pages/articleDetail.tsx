
import { memo } from "react";
import HeaderTop from "../components/HeaderTop/HeaderTop"
import FooterBottom from "../components/footerBottom/footerBottom"
import { useParams } from "react-router-dom";
import { useSingleArticle } from "../assets/hooks/getSingleArticle";
import { changeTime } from "../assets/funcs/changeTime";
const articleDetail = memo(() => {
  const param = useParams().articleName


   const [articles] = useSingleArticle(param as string)
  
    return (
      <>
      <HeaderTop />
      <div className="w-full flex justify-center ">
        <div className="w-[95%]  gap-3  flex md:flex-row ssm:flex-col ssm:gap-5 justify-center">
         <div className="md:w-[65%] ssm:w-full overflow-hidden ">
            <div className="flex flex-col items-center  justify-center">
             <img src={`http://localhost:4000/courses/covers/${articles?.cover}`} className="rounded-2xl mt-4 w-full" alt="" />
             <div className="bg-slate-200 dark:bg-gray-800 dark:text-gray-300 w-[95%] rounded-b-2xl h-fit flex flex-col gap-2">
              <span className="font-bold mr-3 mt-5 dark:text-gray-300">{articles?.title}</span>
              <p className="opacity-70 text-[14px] mr-3 mb-5">{articles?.description}</p>
             </div>
            </div>
            
            <div className="mt-10 flex flex-col gap-4">
              <h2 className="font-bold dark:text-gray-300">{articles?.title}</h2>
              <img src={`http://localhost:4000/courses/covers/${articles?.cover}`} className="rounded-2xl mt-4" alt="" />
              {
                articles &&<span className="opacity-70 text-[13px] dark:text-gray-300" dangerouslySetInnerHTML={{__html:articles?.body}}></span>
              }
              
            </div>
            
         </div>
         <div className="md:w-[35%] ssm:w-full md:inline rounded-2xl ssm:h-fit md:h-full dark:bg-gray-950 dark:text-gray-300 bg-white" > 
            <div className="flex flex-col overflow-hidden h-fit rounded-2xl md:sticky md:top-[90px]">
           
            <div className="w-full h-fit flex justify-center mt-7">
            <div className="w-11/12 bg-white dark:bg-gray-950 gap-2 flex flex-col justify-center items-start my-20 rounded-b-2xl h-20">
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
                             <p className="font-bold text-[12px]">{articles?.creator.name}</p>
                            <p className="font-bold text-[12px] opacity-70">{articles && changeTime(articles.creator.createdAt)} </p>
                       </div>
                      </div>
                  <div className="bg-slate-100 dark:bg-gray-800 p-3 text-[13px] font-bold w-fit h-fit my-3 rounded-b-2xl rounded-tl-2xl">
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
)

export default articleDetail