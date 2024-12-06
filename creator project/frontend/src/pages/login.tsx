
import { useForm } from "react-hook-form"
import HeaderTop from "../components/HeaderTop/HeaderTop"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { handleUserRegister } from "./register/funcs/registerfuncs"
import { useContext ,FC} from "react"
import { userInfo } from "../context/context";
import { showIziToast } from "../utils/util";
import { memo } from "react"
import { getMe } from "../utils/getMe"
import { showSwal } from "../utils/swal"

type userInfo = {
    identifier:string,
    password:string | number
}

const login:FC =memo(() => {

    const Navigate = useNavigate()
    const user = useContext(userInfo)

    const {register,handleSubmit,formState:{errors}} = useForm()

    const loginHandler = (e:{userNic:string,userPass:string|number}) => {

      const userinfo:userInfo = {
        identifier:e.userNic,
        password:e.userPass
    }
       axios.post("http://localhost:4000/v1/auth/login",userinfo)
       .then(res=>{
        handleUserRegister(res.data)
        getMe().then((infos:any)=>{
            if(infos){
              user.setUserInfo(infos[0])
              user.setUserToken(infos[1])
              infos[0].role === 'ADMIN' && showSwal({
                title:'آیا میخواهید به پنل ادمین بروید؟',
                icon:'info',
                buttons:['خیر','بله']
              }).then(resolve=>{
                if(resolve){

                }else{
                    Navigate('/')
                }
              })
              
            }
           })
        
    })
    .catch(()=>{
       showIziToast("ناموفق","نام کاربری یا رمز ورود اشتباه است ","red")
    })
    }
  return (
      <>
      <HeaderTop />
    <div className="h-screen flex items-start justify-center bg-background p-5">
        <div className="w-full max-w-sm space-y-5  rounded-2xl">
            <div className="bg-gradient-to-b from-secondary bg-gray-100 to-background rounded-3xl space-y-5 px-5 pb-5">
                <div className="bg-white rounded-b-3xl space-y-2 p-5">
                    <Link to="./home.html" className="inline-flex items-center gap-2 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                            <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>
                            <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="flex flex-col items-start">
                            <span className="font-semibold text-sm text-muted">آکــــادمـــی</span>
                            <span className="font-bold text-xl  text-blue-600">نـــابــــغه</span>
                        </span>
                    </Link>
                </div>

                {/* <!-- auth:verification:form --> */}
                <form action="#" className="space-y-3" onSubmit={handleSubmit(loginHandler as any)}>
                <div className="flex items-center ">
                      <div className="font-bold text-[12px]">حساب کاربری ندارید؟</div>
                      <Link to={"/register"} className="font-bold text-[12px] text-blue-600">ثبت نام</Link>
                  </div>

                    {/* <!-- form:field:wrapper --> */}
                    <div className="flex items-center justify-start relative flex-col gap-3">
                        <input type="text" {...register("userNic",{required:"حداقل 5 رقم الزامیست",minLength:{value:5,message:"حداقل 5 رقم الزامیست"}})} placeholder="نام کاربری یا ایمیل خود را وارد نمایید" dir="ltr" className="bg-gray-50 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5" />
                        {
                            errors.userNic && <span className="text-red-600 w-full text-[10px]">{errors.userNic.message as string}</span>
                        }
                        <input type="text" {...register("userPass",{required:"حداقل 8 رقم الزامیست",minLength:{value:8,message:"حداقل 8 رقم الزامیست"}})} placeholder="رمز عبور خود را وارد نمایید" dir="ltr" className="bg-gray-50 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5" />
                        {
                            errors.userPass && <span className="text-red-600 w-full text-[10px]">{errors.userPass.message as string}</span>
                        }
                    </div>
                    {/* <!-- end form:field:wrapper --> */}

                    {/* <!-- form:submit button --> */}
                    <button type="submit" className="flex text-white items-center justify-center gap-1 w-full h-10 bg-blue-700 rounded-full text-primary-foreground transition-all hover:opacity-80 px-4">
                        <span className="font-semibold  text-sm">برو بریم</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    {/* <!-- end form:submit button --> */}
                </form>
                {/* <!-- end auth:verification:form --> */}
            </div>
            <div className="bg-gray-100 rounded-xl space-y-5 p-5">
                <div className="font-medium text-xs text-center text-muted">
                    ورود شما به معنای پذیرش <a href="#" className="text-foreground transition-colors hover:text-primary hover:underline">شرایط</a> و
                    <a href="#" className="text-foreground transition-colors hover:text-primary hover:underline">قوانین
                        حریم خصوصی</a> است.
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
) 

export default login
