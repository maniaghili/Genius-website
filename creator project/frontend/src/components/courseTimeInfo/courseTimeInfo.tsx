import { PropsWithChildren } from "react"
import CircleButton from "../circleButton/circleButton"

type props = {
    text: string,
    time:string | number
}

const courseTimeInfo:React.FC<PropsWithChildren<props>> = ({text,time,children}) => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center bg-slate-200 dark:bg-gray-800 w-1/4 rounded-xl  h-full">
             <CircleButton id={undefined}>
              {children}
             </CircleButton>
              <div className="flex flex-col items-center">
              <p className="text-[13px] font-bold opacity-70">{text}</p>
              <p className="text-[13px] font-bold">{time}</p>
              </div>
            </div>
  )
}

export default courseTimeInfo
