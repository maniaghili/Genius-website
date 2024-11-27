import HeaderTop from "../components/HeaderTop/HeaderTop"
import FooterBottom from "../components/footerBottom/footerBottom"
const userProfile = () => {
  return (
    <div>
     <HeaderTop />
     <div className="w-full flex justify-center h-fit">
        <div className="w-[95%] flex justify-center gap-4">
            <div className="w-[30%] bg-blue-200">
               <div className="w-full h-96 flex items-center flex-col bg-black">
                  <div className="bg-slate-500 w-[95%] flex  sticky top-20">
                    <div className="w-full  flex items-center">
                        <img src="../../../public/01.jpeg" className="w-10 rounded-full h-10" alt="user" />
                        <div className="h-10 w-full">
                            <p className="opacity-70 ss">خوش آمدید</p>
                            <span className="ss">مانی علیقلی نژاد</span>
                        </div>
                    </div>
                  </div>
                  <div className="h-fit w-full flex justify-center">
                    <ul className="bg-slate-300 w-[95%] flex flex-col gap-2 items-center rounded-xl h-full">
                        <li className="bg-slate-100 flex w-[90%] h-9 rounded-2xl mt-4">a</li>
                        <li className="bg-slate-100 flex w-[90%] h-9 rounded-2xl">a</li>
                        <li className="bg-slate-100 flex w-[90%] h-9 rounded-2xl">s</li>
                        <li className="bg-slate-100 flex w-[90%] h-9 rounded-2xl">d</li>
                        <li className="bg-slate-100 flex w-[90%] h-9 rounded-2xl">f</li>
                        <li className="bg-slate-100 flex w-[90%] h-9 rounded-2xl mb-3">g</li>
                    </ul>
                  </div>
               </div>
            </div>
            <div className="w-[70%] bg-red-400">l</div>
        </div>
     </div>
     <FooterBottom />
    </div>
  )
}

export default userProfile
