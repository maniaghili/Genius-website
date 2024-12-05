import { memo, PropsWithChildren } from 'react';
import './circleButton.css';

type id = {
id?:number | boolean |undefined
}

const circleButton:React.FC<PropsWithChildren<id>> = memo( ({children,id}):JSX.Element => {
  

  const clickHaandler = () => {
     if(id == 1){
      console.log('dark');
      
     }else if(id == 2){
      let pro = prompt('نام دوره مورد نظر را وارد نمایید')
      console.log(pro);
      
     }
  }
  
  return (
   <div onClick={clickHaandler}>
    {children}
   </div>
   
   
  )
})

export default circleButton
