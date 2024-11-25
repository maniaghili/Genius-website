import { useState } from "react"

const sessionBox = () => {

    const [isDrop,setIsDrop] = useState(false)

  return (
    <>
    <div onClick={()=>{setIsDrop(is=>!is)}} className=" select-none bg-slate-200 flex justify-between items-center cursor-pointer border group rounded-2xl h-10">
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
    {isDrop&&
    <div className="w-full flex justify-center h-8 items-center">
    <div className="w-4/5 bg-white rounded-xl border h-full justify-between flex items-center">
        <div className="flex items-center ">
        <p className="font-bold text-[12px] opacity-60 mr-2"> 1</p>
        <span className="font-bold text-[12px] opacity-80">معرفی دوره</span>
        </div>
        <div>
            <div className="flex items-center opacity-60">
                <p className="font-bold text-[12px]">۰۳:۵۸</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z">
                    </path>
                </svg>
            </div>
            <div></div>
        </div>
    </div>
    </div>}
    </>
  )
}

export default sessionBox
