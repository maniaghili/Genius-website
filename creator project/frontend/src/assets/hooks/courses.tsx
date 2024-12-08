import axios from "axios"
import { FC } from "react"
import { useQuery } from "react-query"

type filter = string | undefined


const useCourses:FC<filter> = (filters) => {
  const allCourses = useQuery("Courses",() =>axios.get("http://localhost:4000/v1/courses"),
  {staleTime:3000000,
    cacheTime:30000000,
    keepPreviousData:true,
})

if(filters){
   let rr = allCourses?.data?.data?.filter((course:any)=>course.categoryID.name == filters)
  return [rr]
    
}else{


    return [allCourses?.data?.data]
}
}

export default useCourses
