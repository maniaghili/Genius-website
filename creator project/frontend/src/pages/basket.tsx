
import HeaderTop from "../components/HeaderTop/HeaderTop";
import FooterBottom from "../components/footerBottom/footerBottom";
import Coursebox from "../components/coursebox/coursebox";
const basket = () => {
  return (
    <>
    <HeaderTop />
    <div className="w-full flex justify-center ">
        <div className="w-[95%] flex ssm:flex-col lg:flex-row gap-2">
           <div className="h-fit lg:w-2/3 ssm:w-full">
               <div className="bg-slate-200 mt-5 h-24 flex items-center rounded-xl">
                    <div className='lg:w-full md:h-3/5 flex mr-5 h-full gap-3 '>
                      <div className=' flex justify-center items-center sm:mr-2 lg:mr-0'>
                         <div className='h-14 bg-blue-700 w-14  rounded-full flex justify-center items-center'>
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                              <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clip-rule="evenodd"></path>
                           </svg>
                         </div>
                      </div>
                      <div className=' h-full flex flex-col justify-center '>
                         <p className='text-blue-700 font-bold'>سبد خرید شما</p>
                         <p className="text-[12px] font-bold opacity-70">۲ دوره به سبد اضافه کرده اید</p>
                      </div>
                    </div>
               </div>
               <div className="grid lg:gap-12 md:gap-16 sa:gap-10 ssm:gap-32 sa:grid-cols-2 md:grid-cols-2 mt-5 ssm:mb-36 sa:mb-16 ">
                      <div className=" relative">
                        <Coursebox />
                        <div className="h-8 w-8 rounded-2xl bg-red-600 flex justify-center items-center cursor-pointer absolute top-1 right-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                      </div>
                      <div className=" relative">
                        <Coursebox />
                        <div className="h-8 w-8 rounded-2xl bg-red-600 flex justify-center items-center cursor-pointer absolute top-1 right-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                      </div>
                      <div className=" relative">
                        <Coursebox />
                        <div className="h-8 w-8 rounded-2xl bg-red-600 flex justify-center items-center cursor-pointer absolute top-1 right-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                      </div>
                      <div className=" relative">
                        <Coursebox />
                        <div className="h-8 w-8 rounded-2xl bg-red-600 flex justify-center items-center cursor-pointer absolute top-1 right-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                      </div>
                      
                </div>
           </div>
           <div className="ssm:w-full lg:w-1/3">
              <div className="bg-slate-200 sticky top-[95px] rounded-xl flex flex-col items-center">
                 <div className="w-[90%]">
                 <div className="bg-white rounded-b-2xl w-full flex justify-start gap-2 items-center h-16">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-4 w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3">
                        </path>
                    </svg>
                    <p className="font-bold text-[14px]">اطلاعات پرداخت</p>
                 </div>
                 <div className="mt-5 w-full flex  h-10 gap-2 rounded-xl overflow-hidden">
                   <div className="w-[85%] bg-white flex items-center rounded-xl h-full">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="opacity-80 w-5 h-5">
                                                        <path fill-rule="evenodd" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.879a2.5 2.5 0 0 0 .732 1.767l7.5 7.5a2.5 2.5 0 0 0 3.536 0l3.878-3.878a2.5 2.5 0 0 0 0-3.536l-7.5-7.5A2.5 2.5 0 0 0 8.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"></path>
                                                    </svg>
                   <input type="text" placeholder="کد تخفیف خود را وارد نمایید" className="w-[90%] h-full"/>
                   </div>
                   <div className="w-[15%] h-full bg-blue-600 flex rounded-xl justify-center items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">
                        </path>
                    </svg>
                   </div>
                   
                </div>
                <div className="w-full flex justify-between mt-5 items-center">
                    <p className="font-bold text-[13px]">جمع کل</p>
                    <p className="font-bold text-[13px]">۱,۰۷۹,۰۰۰
                    تومان</p>

                </div>
                <div className="w-full flex justify-between mt-5 items-center">
                    <p className="font-bold text-[13px]"> موجودی کیف پول</p>
                    <p className="font-bold text-[13px]">۵۲۰,۰۰۰
                    تومان</p>

                </div>
                <div className="w-full flex justify-between mt-5 items-center">
                    <p className="font-bold text-[13px]">تخفیف </p>
                    <p className="font-bold text-[13px]">۱۸۵,۰۰۰
                    تومان</p>

                </div>
                <div className="w-full h-[1px] opacity-50 bg-gray-700 mt-8"></div>
                <div className="w-full flex justify-between mt-5 items-center">
                    <p className="font-bold text-[16px]">مبلغ قابل پرداخت</p>
                    <p className="font-bold text-[15px]">۱,۰۷۹,۰۰۰تومان</p>
                </div>
                <div className="h-10 items-center bg-blue-700  flex justify-center text-white rounded-3xl my-7">
                    <p>تکمیل فرایند خرید</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
                                    </svg>
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

export default basket
