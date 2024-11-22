import { PropsWithChildren } from 'react'
import './circleButton.css'

const circleButton:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <button className='parent bg-slate-100 hover:bg-slate-200 transition-all '>
      {children}
    </button>
  )
}

export default circleButton
