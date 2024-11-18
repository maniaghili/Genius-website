import { PropsWithChildren } from "react"
import './circleui.css'
type props = {
    text:string
    color:string
}

const circleui:React.FC<PropsWithChildren<props>> = ({text,color,children}) => {
   
    
  return (
    <div className={"flex items-center justify-center kkk " + color}>

    <div className="bg-transparent h-28 w-20 flex-col m-4">
      <div className="h-4/6 bg-white rounded-full flex justify-center items-center">
      {children}
      </div>
      <p className="h-2/6 bg-transparent flex justify-center items-center font-bold">{text}</p>
    </div>
    </div>
  )
}

export default circleui
