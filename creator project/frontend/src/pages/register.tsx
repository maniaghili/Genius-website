
import { Link } from "react-router-dom"
import HeaderTop from "../components/HeaderTop/HeaderTop"
import { useForm } from "react-hook-form"
import { ReactNode, useContext } from "react"
import axios from "axios"
import { userInfo } from "../context/context"

type userInfo = {
    email: string,
    name: string,
    password: number | string,
    phone: number,
    userName: string
}

const register = () => {
    const {register,handleSubmit,formState:{errors}} = useForm()
    
    const registerHandler = (e:userInfo) => {
     const userInfo = {
        username:e.userName,
        email:e.email,
        password:e.password,
        confirmPassword:e.password,
        name:e.name,
        phone:e.phone
     }
     
      axios.post("http://localhost:4000/v1/auth/register",userInfo,{
      }).then(data=>
        data.statusText === 'Created' && alert('ثبت نام موفقیت امیز بود')
      ).catch(()=>{alert('کاربر با این مشخصات قبلا ثبت نام کرده است')})
    }
    

    let ali:any = useContext(userInfo)

 
    
    

  return (
    <>
    <HeaderTop />
  <div className="h-screen flex items-start justify-center bg-background p-5">
      <div className="w-full max-w-sm space-y-5  rounded-2xl">
          <div className="bg-gradient-to-b from-secondary bg-gray-100 to-background rounded-3xl space-y-5 px-5 pb-5">
              <div  className="bg-white rounded-b-3xl space-y-2 p-5">
                  <a href="./home.html" className="inline-flex items-center gap-2 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
                          <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>
                          <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd"></path>
                      </svg>
                      <span className="flex flex-col items-start">
                          <span className="font-semibold text-sm text-muted">آکــــادمـــی</span>
                          <span className="font-bold text-xl  text-blue-600">نـــابــــغه</span>
                      </span>
                  </a>
              </div>

              {/* <!-- auth:verification:form --> */}
              <form action="#" className="space-y-3" onSubmit={handleSubmit((e:userInfo | any)=>registerHandler(e))}>
                  <div className="flex items-center">
                      <div className="font-bold text-[12px]">حساب کاربری دارید؟</div>
                      <Link to={'/login'} className="font-bold text-[12px] text-blue-600">ورود</Link>
                  </div>
                

                  {/* <!-- form:field:wrapper --> */}
                  <div className="flex items-start relative flex-col gap-3">
                      <input type="text" {...register('userName',{required:'نام کاربری را وارد کنید'})} placeholder="نام کاربری خود را وارد نمایید" dir="ltr" className="bg-gray-50 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5" />
                      {errors.userName && <span className="text-[9px] w-fit font-bold text-red-600">{errors.userName.message  as ReactNode}</span>}
                      <input type="text" {...register('name',{required:'نام خود را وارد نمایید'})} placeholder="نام خود را وارد نمایید" dir="ltr" className="bg-gray-50 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5" /> 
                      {errors.name && <span className="text-[9px] w-fit font-bold text-red-600">{errors.name.message as ReactNode}</span>}
                      <input type="text" {...register('password',{minLength:{value:8,message:'8 رقم الزامیست'}})} placeholder="رمز عبور خود را وارد نمایید" dir="ltr" className="bg-gray-50 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5" />
                      {errors.password && <span className="text-[9px] w-fit font-bold text-red-600">{errors.password.message  as ReactNode}</span>}
                      <input type="text" {...register('phone',{required:'شماره تماس را وارد کنید'})} placeholder="شماره تماس خود ر وارد نمایید" dir="ltr" className="bg-gray-50 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5" />
                      {errors.phone && <span className="text-[9px] w-fit font-bold text-red-600">{errors.phone.message  as ReactNode}</span>}
                      <input type="text" {...register('email',{required:'وارد کردن ایمیل الزامی است'})} placeholder="ایمیل خود را وارد نمایید" dir="ltr" className="bg-gray-50 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5" />
                      {errors.email && <span className="text-[9px] w-fit font-bold text-red-600">{errors.email.message  as ReactNode}</span>}
                      
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

export default register
