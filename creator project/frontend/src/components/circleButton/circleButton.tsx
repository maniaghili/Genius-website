import { PropsWithChildren } from 'react'
import './circleButton.css'

const circleButton:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <button className='parent'>
      {children}
    </button>
  )
}

export default circleButton
