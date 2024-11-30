
const userInfos = () => {
  return (
    <>
    <div className="flex items-center mt-10 w-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg>
                    <p className="text-[14px] font-bold">اطلاعات کاربر </p>
                </div>
                <div className="mt-5 md:mb-0  w-full ">
                <div className="w-full grid ssm:grid-cols-1  md:grid-cols-2 gap-5">
      <div className="w-full mt-3 h-10">
        <p>نام و نام خوانوادگی</p>
        <input className="bg-slate-200 w-full rounded-xl h-full" type="text" />
      </div>
      <div className="w-full mt-3 h-10">
        <p>ایمیل</p>
        <input className="bg-slate-200 w-full rounded-xl h-full" type="email" />
      </div>
      <div className="w-full mt-3 h-10">
        <p>شماره تلفن</p>
        <input className="bg-slate-200 w-full rounded-xl h-full" type="number" />
      </div>
      <div className="w-full mt-3 h-10">
        <p>رمز عبور </p>
        <input className="bg-slate-200 w-full rounded-xl h-full" type="password" />
      </div>

    </div>
    <div className="bg-blue-600 mt-11 w-fit p-2 rounded-2xl">
      <button>ثبت تغییرات</button>
    </div>
    </div>
    
  </>
  )
}

export default userInfos
