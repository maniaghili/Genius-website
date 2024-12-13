import axios from "axios"
import { memo, useContext, useEffect, useState } from "react"
import { userInfo } from "../../context/authContext"
import IsNotData from "../../components/isNotData/isNotData"
const userTickets = memo(() => {
 
  const user = useContext(userInfo)
  const [userTickets,setUserTickets] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:4000/v1/tickets/user",{
      headers:{
        "Authorization" : `Bearer ${user.userToken}`
      }
    }).then(tickets=>{
      setUserTickets(tickets.data)
    })
  })
    return (
      <>
      <div className="flex items-center my-10 w-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path></svg>
       <p className="text-[14px] font-bold">تیکت های کاربر </p>
          </div>
          <div className=" w-full ">
            {userTickets?.length?'':
            <IsNotData dataName="هنوز تیکتی ثبت نکرده اید" />}
      </div>
      </>
    )
  }
)

export default userTickets
