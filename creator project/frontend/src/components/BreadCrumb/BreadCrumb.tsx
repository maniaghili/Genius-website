
import './BreadCrumb.css'

const BreadCrumb = () => {
  return (

    <div className='w-full flex justify-center mt-10 h-24 '>
      <div className='w-[95%] bg-slate-100 rounded-2xl flex dark:bg-gray-900 dark:text-white justify-between items-center'>
         <div className='lg:w-1/5 md:h-3/5 flex justify-center h-full gap-3 '>
            <div className=' flex justify-center items-center sm:mr-2 lg:mr-0'>
                <div className='h-14 bg-blue-700 w-14  rounded-full flex justify-center items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                     <path fill-rule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clip-rule="evenodd"></path>
                  </svg>
                </div>
            </div>
            <div className=' h-full flex flex-col justify-center ssm:hidden sa:inline-block'>
                <p className='text-blue-700 font-bold akh'>آخرین دوره های</p>
                <p>منتشر شده</p>
            </div>
         </div>
         <div className='lg:w-[10%] ssm:2/5 sm:w-1/5 rounded-2xl overflow-hidden felx w-full items-center ml-2 '>
            <div className='w-full ssm:p-0 sm:p-2 bg-slate-200 flex justify-center items-center hover:opacity-80 dark:bg-gray-900 dark:text-white` hover:text-blue-500 transition-all'>
                <button className='font-bold moshahede'>مشاهده همه</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
                </svg>
                </div>
         </div>
      </div>
    </div>
    
    
  )
}

export default BreadCrumb
