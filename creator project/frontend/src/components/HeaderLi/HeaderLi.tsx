import { PropsWithChildren, useRef } from "react"
import './HeaderLi.css'
type pro = {
    svg:boolean
}



const HeaderLi:React.FC<PropsWithChildren<pro>> = ({svg,children}) => {

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
    <li  onMouseMove={()=>{hoverHandler()}} onMouseLeave={endHandler} className='relative opacity-70 h-14 flex items-center gap-1'>
      <p className="jjl" >{children}</p>
      {
        svg&&
        <>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 gg">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
    </svg>
    <ul onMouseLeave={endHandler} onMouseEnter={()=>{hoverHandler()}} className="drop_down absolute z-10  top-10 w-44 min-h-40 rounded-lg " ref={hover} >
        <li className="text-black mt-1  h-10 flex items-center "><p>s</p></li>
        <li className="text-black mt-1 h-10 flex items-center">sada</li>
    </ul>
        </>
    }
    
    </li>
  )
}

export default HeaderLi
