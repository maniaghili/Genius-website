import { PropsWithChildren, useState } from "react"
import './HeaderLi.css'
import { Link } from "react-router-dom"
import { useQuery } from "react-query";
import axios from "axios";

type categoriesType = {
  categories:any
}

const HeaderLi:React.FC<PropsWithChildren<categoriesType>> = ({categories,children}) => {

const [rightMenu,setRightMenu] = useState<undefined | string>(undefined) 
const [isShowMenu,setIsShowMenu] = useState<Boolean>(false)
const {data} = useQuery("Courses",() =>axios.get("http://localhost:4000/v1/courses"),{staleTime:3000000,cacheTime:30000000,keepPreviousData:true})

  return (
    <li className='group relative  h-14 flex items-center gap-1'>
      <div className="flex justify-end jjl opacity-65"><p>{children}</p></div>
       
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="group-hover:rotate-180 opacity-80 w-5 h-5 transition-all">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
          </svg>
          <div className="bg-white drop_down absolute z-10  top-10  w-48 min-h-40 rounded-lg  group-hover:visible ">
              <ul className="w-full ">
                {categories?.map((category:any)=>
                  <li key={category._id} onMouseEnter={()=>{setRightMenu(category.title)
                    setIsShowMenu(true)
                  }} onMouseLeave={()=>{setIsShowMenu(false)}} className="text-black mt-1 hover:text-blue-600  h-8 cursor-pointer flex items-center text-[13px] font-semibold mr-2 justify-between ">
                  <Link to={`/series/${category.name}`} className="w-full text-black mt-1 hover:text-blue-600  h-8 cursor-pointer flex items-center text-[13px] font-semibold mr-2 justify-between">
                    <p>{category.title}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 ml-2 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                      </svg>
                  </Link>
                 </li>
                )}
                  
                 
              </ul>
             {
                isShowMenu&&
              <div className="absolute w-80 top-0 left-[-166%] rounded-l-xl bg-white min-h-48 z-10" onMouseEnter={()=>setIsShowMenu(true)} onMouseLeave={()=>setIsShowMenu(false)}>
              <span className="opacity-75 text-[13px] font-bold">محبوب ترین موضوعات</span>
              <ul className="mr-7 aa mt-2">
                
                
               {data?.data.map((course : any)=>
                  course.categoryID.title == rightMenu && <li key={course._id} className="hover:text-blue-600 text-[14px] font-bold"><Link to={`/courseDetail/${course.shortName}`}>{course.name}</Link></li>
               )}
              </ul>
              </div>
              
             }
          </div>
    
    
        
    
    
    </li>
   
  )
}

export default HeaderLi
