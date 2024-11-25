import { PropsWithChildren } from "react"
import CircleButton from "../circleButton/circleButton"
const courseTimeInfo:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-col items-center gap-2 justify-center bg-slate-200 w-1/4 rounded-xl  h-full">
             <CircleButton id={undefined}>
              {children}
             </CircleButton>
              <div className="flex flex-col items-center">
              <p className="text-[13px] font-bold opacity-70">مدت دوره</p>
              <p className="text-[13px] font-bold">۱۴:۵۴:۱۶</p>
              </div>
            </div>
  )
}

export default courseTimeInfo
