import React, { useRef } from "react"
import './UserInfo.css'
type name = {
    name:string
}

type rr = {
    current:any
}
    
  

const Username:React.FC<name> = ({name}) => {
    const hover = useRef() as rr
   
    const hoverHandler = () => {
     hover.current.classList.add('active')
     
     }
 
     const endHandler = () => {
       hover.current.classList.remove('active')
     }
  return (  
    <div className="flex items-center h-full" onMouseLeave={endHandler} onMouseEnter={hoverHandler}>
      <div  >
          <p className='jjl'>{name}</p>
          <p className='opacity-70'>خوش آمدید</p>

          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
        </svg>
        <ul onMouseLeave={endHandler} onMouseEnter={hoverHandler} className="drop_down absolute z-10  top-16 w-40 left-4 min-h-40 rounded-lg " ref={hover} >
         <li className="text-black mt-1  h-10 flex items-center "><p>s</p></li>
         <li className="text-black mt-1 h-10 flex items-center">sada</li>
        </ul>
    </div>
  )
}

export default Username
