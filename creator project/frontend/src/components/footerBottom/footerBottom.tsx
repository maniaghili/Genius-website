
const footerBottom = () => {



  return (
    <div className="w-full flex justify-center mt-11 border-t-gray-300 border">
        <div className=" w-[95%] bg-slate-100 rounded-2xl">
            <div className="w-full flex justify-end -mt-4 transition-all">
                <button onClick={()=>{scrollTo(0,5)}} className="bg-slate-200 rounded-2xl p-1 flex justify-center items-center">
                <p >برگشت به بالا</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path>
                </svg>
                </button>
            </div>
            <div className="w-full">
                <div className="w-lg-[20%] w-md-[45%] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-700 ">
                        <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>
                        <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd"></path>
                    </svg>
                    <div className='flex flex-col gap-0'>
                        <p className="opacity-70 akademi-header font-semibold ">آکادمی</p>
                        <p className=" na-header  font-bold text-blue-700">
                        نابغه
                        </p>
                    </div>
         
                </div> 
            </div>
        </div>
    </div>
  )
}

export default footerBottom
