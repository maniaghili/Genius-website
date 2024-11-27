import { PropsWithChildren } from "react"
import CircleButton from "../circleButton/circleButton"

type prop = {
    text:string,
    value:string
}

const infoBox:React.FC<PropsWithChildren<prop>> = ({text,value,children}) => {
  return (
    <div className="bg-slate-200 flex items-center gap-2 justify-center w-full h-16 rounded-xl">
    <CircleButton id={undefined}>
   {children}
    </CircleButton>
    <div>
       <p className="opacity-70 text-[12px]">{text} </p>
       <p className="text-[13px] font-bold">{value}</p>
    </div>
 </div>
  )
}

export default infoBox
