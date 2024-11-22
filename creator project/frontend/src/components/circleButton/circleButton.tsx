import { PropsWithChildren } from 'react'
import './circleButton.css'

type id = {
id:number | boolean |undefined
}

const circleButton:React.FC<PropsWithChildren<id>> = ({children,id}) => {
  
  const clickHaandler = () => {
     if(id == 1){
      console.log('dark');
      
     }else if(id == 2){
      console.log('search');
      
     }else if(id == 3){
      console.log('basket');
      
     }else if(id == 4) {
     location.href = 'login'
     }
    
  }
  
  return (
    <button onClick={clickHaandler} className='parent bg-slate-100 hover:bg-slate-200 transition-all '>
      {children}
    </button>
  )
}

export default circleButton
