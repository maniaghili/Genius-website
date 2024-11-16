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
    console.log(hover.current)
    
    }

  return (
    <li onMouseMove={()=>{hoverHandler()}} className='relative opacity-70 flex items-center gap-1'>
      <p>{children}</p>
    {
        svg&&
        <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
    </svg>
    <ul className="drop_down absolute top-10 w-44 min-h-40 rounded-lg" ref={hover} >
        <li className="text-white"><p>s</p><p>s</p><p>s</p></li>
        <li className="text-white ">sada</li>
    </ul>
        </>
    }
    
    </li>
  )
}

export default HeaderLi
