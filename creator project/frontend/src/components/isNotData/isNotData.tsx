
const isNotData = (dataName:{
    dataName:string
}) => {
  return (
    <div className="bg-red-500 text-white flex justify-center items-center rounded-2xl my-5 w-full h-10"><p>
           هنوز {dataName.dataName} برای این دوره بارگذاری نشده است
    </p></div>
  )
}

export default isNotData
