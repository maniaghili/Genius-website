
import './HeaderBottom.css'

const HeaderBottom = () => {
  return (
    <div className='w-full  flex items-center justify-center mt-6'>
      <div className='w-[95%] flex justify-center items-center  bg-slate-100 rounded-lg  py-12 h-full gap-10 flex-wrap '>

        <div className='w-2/5'>s</div>
        <div className="flex-shrink-0 flex justify-center md:w-72 w-2/5 md:order-2 -order-1 h-full ">
          <img src="./../../../public/main.png" className="max-w-full h-full" alt="..." />
        </div>


      </div>
    </div>
  )
}

export default HeaderBottom
