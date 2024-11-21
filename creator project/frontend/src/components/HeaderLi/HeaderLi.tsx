import { PropsWithChildren, useRef, useState } from "react"
import './HeaderLi.css'
type pro = {
    svg:boolean
}



const HeaderLi:React.FC<PropsWithChildren<pro>> = ({svg,children}) => {


  const [ali,setAli] = useState(false)

type rr = {
    current:any
}
    
   const hover = useRef() as rr
   
   const hoverHandler = () => {
    hover.current.classList.add('active')
    
    }

    const endHandler = () => {
      hover.current.classList.remove('active')
    }

  return (
    <li  onMouseMove={()=>{hoverHandler()}} onMouseLeave={endHandler} className='relative opacity-95 h-14 flex items-center gap-1'>
      <p className="jjl opacity-80" >{children}</p>
      {
        svg&&
        <>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="opacity-80 w-5 h-5 gg">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
          </svg>
          <div className="bg-white drop_down absolute z-10  top-10  w-48 min-h-40 rounded-lg  "  ref={hover} >
              <ul onMouseLeave={endHandler} onMouseEnter={()=>{hoverHandler()}} className="w-full ">
                <li onMouseEnter={()=>{setAli(true)}} onMouseLeave={()=>{setAli(false)}} className="text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                      <p>برنامه نویسی وب</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                      </svg>
                  </li>
                  <li onMouseEnter={()=>{setAli(true)}} onMouseLeave={()=>{setAli(false)}} className=" text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                       <p>برنامه نویسی وب</p>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                       </svg>
                  </li>
                  <li onMouseEnter={()=>{setAli(true)}} onMouseLeave={()=>{setAli(false)}} className="text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                        <p>برنامه نویسی وب</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                  </li>
                  <li onMouseEnter={()=>{setAli(true)}} onMouseLeave={()=>{setAli(false)}} className="text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                        <p>برنامه نویسی وب</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                  </li>
                 
              </ul>
             {
              ali&&
              <div className="absolute w-96 top-0 left-[-200%] rounded-xl bg-white h-96  z-10" onMouseEnter={()=>{setAli(true)}} onMouseLeave={()=>{setAli(false)}}>
              <ul >
                <li className="text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                      <p>برنامه نویسی وب</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                      </svg>
                  </li>
                  <li className="text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                       <p>برنامه نویسی وب</p>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                       </svg>
                  </li>
                  <li className="text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                        <p>برنامه نویسی وب</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                  </li>
                  <li className="text-black mt-1 hover:text-blue-600  h-10 flex items-center justify-between border-b-2 ">
                        <p>برنامه نویسی وب</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                        </svg>
                  </li>
                 
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
