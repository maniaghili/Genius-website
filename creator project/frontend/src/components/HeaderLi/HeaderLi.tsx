import { PropsWithChildren, useState } from "react"
import './HeaderLi.css'


type pro = {
    svg:boolean
}



const HeaderLi:React.FC<PropsWithChildren<pro>> = ({svg,children}) => {


  const [rightMenu,setRightMenu] = useState(false)
  


  return (
    <li className=' group relative  h-14 flex items-center gap-1'>
      <div className="flex justify-end jjl opacity-65"><p>{children}</p></div>
      {
        svg&&
        <>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="opacity-80 w-5 h-5 gg">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
          </svg>
          <div className="bg-white drop_down absolute z-10  top-10  w-48 min-h-40 rounded-lg  group-hover:visible ">
              <ul className="w-full ">
                <li onMouseEnter={()=>{setRightMenu(true)}} onMouseLeave={()=>{setRightMenu(false)}} className="text-black mt-1 hover:text-blue-600  h-8 cursor-pointer flex items-center text-[13px] font-semibold mr-2 justify-between ">
                      <p>برنامه نویسی وب</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                      </svg>
                  </li>
                  <li onMouseEnter={()=>{setRightMenu(true)}} onMouseLeave={()=>{setRightMenu(false)}} className=" text-black mt-1 hover:text-blue-600  h-8 cursor-pointer flex items-center text-[13px] font-semibold mr-2 justify-between ">
                       <p>برنامه نویسی وب</p>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2 h-5">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                       </svg>
                  </li>
                  <li onMouseEnter={()=>{setRightMenu(true)}} onMouseLeave={()=>{setRightMenu(false)}} className="text-black mt-1 hover:text-blue-600  h-8 cursor-pointer flex items-center text-[13px] font-semibold mr-2 justify-between ">
                        <p>برنامه نویسی وب</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                  </li>
                  <li onMouseEnter={()=>{setRightMenu(true)}} onMouseLeave={()=>{setRightMenu(false)}} className="text-black mt-1 hover:text-blue-600  h-8 cursor-pointer flex items-center text-[13px] font-semibold mr-2 justify-between ">
                        <p>برنامه نویسی وب</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                  </li>
                 
              </ul>
             {
              rightMenu&&
              <div className="absolute w-80 top-0 left-[-166%] rounded-l-xl bg-white min-h-48 z-10" onMouseEnter={()=>{setRightMenu(true)}} onMouseLeave={()=>{setRightMenu(false)}}>
              <span className="opacity-75 text-[13px] font-bold">محبوب ترین موضوعات</span>
              <ul className="mr-7 aa mt-2">
                <li className="hover:text-blue-600">asasas</li>
                <li className="hover:text-blue-600">sasaa</li>
                <li className="hover:text-blue-600">sasasas</li>
               
             

                 
              </ul>
              </div>
             }
          </div>
    
    
        </>
    }
    
    </li>
   
  )
}

export default HeaderLi
