import { memo, PropsWithChildren } from 'react';
import './circleButton.css';
import { showSwal } from '../../utils/swal';
import { useNavigate } from 'react-router-dom';

type id = {
id?:number | boolean |undefined
}

const circleButton:React.FC<PropsWithChildren<id>> = memo(({children,id}):JSX.Element => {
  
  const Navigate = useNavigate()

  const clickHaandler = () => {
     if(id == 1){
     let htt = window.document.querySelector('html')
     if(htt?.classList.value == 'dark'){
      htt?.classList.remove('dark')
      localStorage.setItem('theme','dark')
     }else{
      htt?.classList.add('dark')
     }
 
     }else if(id == 2){
       showSwal({
        title:'یافتن دوره',
        text:'نام دوره یا مقاله مورد نظر را وارد نمایید',
        icon:'info',
        buttons:['لغو','تایید'],
        content:'input',
      }).then(data=>{
        Navigate(`/allCoursesSearch?search=${data}`)
      })
      
     }
  }
  
  return (
   <div onClick={clickHaandler}>
    {children}
   </div>
   
   
  )
})

export default circleButton
