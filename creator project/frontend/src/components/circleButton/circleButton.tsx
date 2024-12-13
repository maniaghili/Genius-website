import { memo, PropsWithChildren, useContext } from 'react';
import './circleButton.css';
import { showSwal } from '../../utils/swal';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../context/themeProvider';
type id = {
id?:number | boolean |undefined
}

const circleButton:React.FC<PropsWithChildren<id>> = memo(({children,id}):JSX.Element => {
  
  const Navigate = useNavigate()
  const themes = useContext(theme)  as any
  
  const clickHaandler = () => {
     if(id == 1){
       if(themes.currentTheme == 'light'){
        themes.setCurrentTheme('dark')
       }else{
        themes.setCurrentTheme('light')
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
