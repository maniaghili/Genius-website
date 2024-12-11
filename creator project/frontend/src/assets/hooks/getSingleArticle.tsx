import axios from "axios"
import { useQuery } from "react-query"


export const useSingleArticle = (shortName:string) => {

const {data : article} = useQuery([shortName,'article'],()=>axios.get(`http://localhost:4000/v1/articles/${shortName}`),{
    staleTime:1000000,
    cacheTime:1000000
  })
 return [article?.data]

}
