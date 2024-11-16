import { PropsWithChildren } from 'react'
import './circleButton.css'

const circleButton:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='parent'>
      {children}
    </div>
  )
}

export default circleButton
