import { PropsWithChildren } from 'react'
import './circleButton.css'
import { Link } from 'react-router-dom'
import { jsx } from 'react/jsx-runtime'

type id = {
id:number | boolean |undefined
}

const circleButton:React.FC<PropsWithChildren<id>> = ({children,id}):JSX.Element => {
  

  const clickHaandler = () => {
     if(id == 1){
      console.log('dark');
      
     }else if(id == 2){
      console.log('search');
      
     }else if(id == 3){
      console.log('basket');
      
     }else if(id == 4) {
     
     }
    
  }
  
  return (
   <>
    
      {id == 4? <Link className='parent bg-slate-100 hover:bg-slate-200 transition-all' to={'/login'}>{children}</Link>:<button onClick={clickHaandler} className='parent bg-slate-100 hover:bg-slate-200 transition-all '>
      {children}
      </button>}
   </>
   
  )
}

export default circleButton
