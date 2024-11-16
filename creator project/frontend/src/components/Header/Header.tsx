import './Header.css'
import CircleButton from '../circleButton/circleButton'
import HeaderLi from '../HeaderLi/HeaderLi'
import Username from '../userName/Username'
function Header() {
  return (
    <div className="flex justify-center border border-b-2">
     <div className="w-[95%] h-22 flex  justify-between  ">
      <div className="w-[50%]  flex" >
        <div className="w-lg-[20%] w-md-[45%] flex items-center gap-2">
          <button className='bg-slate-300 rounded-full w-9 h-9 flex flex-col gap-1 items-center justify-center sm:flex lg:hidden'>
             <div className='h-[1px] w-[50%] bg-black'></div>
             <div className='h-[1px] w-[50%] bg-black'></div>
             <div className='h-[1px] w-[50%] bg-black'></div>
          </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-700 sm:hidden lg:inline">
            <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"></path>
            <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd"></path>
        </svg>
        <div className='flex flex-col gap-0'>
          <p className="opacity-70 akademi-header font-semibold ">آکادمی</p>
          <p className=" na-header  font-bold text-blue-700">
            نابغه
          </p>
        </div>
        
        </div>
        
        <div className="w-[75%]">


       <ul className=' h-full items-center gap-7 mr-3 sm:hidden lg:flex'>
        <HeaderLi svg={true}>
        دسته بندی آمـــوزشها 
        </HeaderLi>
        <HeaderLi svg={false}>
        مقالات آموزشی 
        </HeaderLi>
        <HeaderLi svg={true}>
        لینکهای مفید 
        </HeaderLi>
       </ul>


        </div>
      </div>
      
      
      <div className="w-md-[30%] ">
        <div className='flex items-center h-full gap-4'>
          <div className='flex items-center gap-4 sm:hidden lg:flex'>
          <CircleButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path>
    </svg>
          </CircleButton>
          <CircleButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
          </svg>
          </CircleButton>
          </div>
          <CircleButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
          </svg>
          </CircleButton>
          <CircleButton>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
          </svg>
          </CircleButton>
            
          <Username name='مانی' />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Header
