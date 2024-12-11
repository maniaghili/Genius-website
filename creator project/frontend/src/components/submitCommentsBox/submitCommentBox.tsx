import { SetStateAction, useContext, useState } from "react"
import { userInfo } from "../../context/authContext"
import { changeTime } from "../../assets/funcs/changeTime";
import axios from "axios";
import { showSwal } from "../../utils/swal";
import { showIziToast } from "../../utils/util";

const submitCommentBox = ({shortName}:{shortName:string}) => {
  const user = useContext(userInfo)
  const [commentBody,setCommentBody] = useState(null)
  
  const submitCommentHandler = () => {
    const commentDetail = {
      body:commentBody,
      courseShortName:shortName,
      score:5
    }

    axios.post("http://localhost:4000/v1/comments",commentDetail,{
      headers:{
        "Authorization" : `Bearer ${user.userToken}`
      }
    }).then(()=>{
        showSwal({
          icon:"success",
          title:'عملیات موفق',
          text:'کامنت شما با موفقیت ثبت شد و پس از تایید مدیر نمایش داده می شود'
        })}).catch(()=>{
          showSwal({
            icon:"error",
            title:'عملیات ناموفق',
            text:'مشکلی در ثبت کامنت بوجود آمده است'
          })
        })
     
  }
  
  return (
    <>
     <p className="font-bold my-2 text-[14px]">دیدگاه ها</p>
            <div className="border rounded-2xl flex flex-col gap-5">
              <div className="flex justify-center"><p className="font-bold text-[12px] mr-3 opacity-80 mt-3  ">ارسال دیدگاه</p></div> 
              <div className="flex mr-3 gap-2">
                <img src="../../public/01.jpeg" className="w-10 rounded-full h-10" alt="" />
                <div>
                  <p className="font-bold text-[12px]">{user.userToken?user.userInfos.name:'کاربر مهمان'}</p>
                  <p className="font-bold text-[12px] opacity-70">{changeTime(new Date as any)}</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <textarea onClick={()=>{
                  if(!user.userToken){
                    showIziToast('خطا','قبل از ثبت کامنت حتما باید ثبت نام کرده باشید','red')
                  }
                }} onBlur={(e)=>{setCommentBody(e.target.value as SetStateAction<any>)}} className="bg-slate-200 w-11/12 h-36 rounded-2xl"  placeholder="نظر خود را وارد کنید">

                </textarea>
                 
              </div>
              <div className="flex justify-end m-4">
                <div onClick={submitCommentHandler} className="bg-blue-600 cursor-pointer hover:opacity-90 transition-all text-white p-1 px-2 rounded-3xl flex justify-center gap-2 items-center"> 
                  <p>ثبت دیدگاه</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
    </>
  )
}

export default submitCommentBox
