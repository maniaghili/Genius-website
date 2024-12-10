import { setUrlParam } from "../../assets/funcs/url"

 const pagination = () => {
  return (
   <div className="flex items-center justify-center" > 
        <ul className="flex flex-nowrap h-fit max-w-fit relative gap-1 items-center overflow-visible rounded-medium">
            <li onClick={()=>{setUrlParam('filter','free')}} role="button" className="hover:bg-blue-400 rounded-xl bg-blue-100 duration-300 tap-highlight-transparent select-none touch-none border-medium border-default bg-transparent data-[hover=true]:bg-default-100 data-[pressed=true]:scale-[0.97] transition-transform-background flex flex-wrap truncate box-border items-center justify-center text-default-foreground outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[disabled=true]:text-default-300 data-[disabled=true]:pointer-events-none shadow-sm min-w-9 w-9 h-9 text-small rounded-medium">1</li>
            <li onClick={()=>{setUrlParam('filters','frees')}} role="button" className="hover:bg-blue-400 rounded-xl bg-blue-100 duration-300 tap-highlight-transparent select-none touch-none border-medium border-default bg-transparent data-[hover=true]:bg-default-100 data-[pressed=true]:scale-[0.97] transition-transform-background flex flex-wrap truncate box-border items-center justify-center text-default-foreground outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[disabled=true]:text-default-300 data-[disabled=true]:pointer-events-none shadow-sm min-w-9 w-9 h-9 text-small rounded-medium">2</li>
            <li role="button" className="hover:bg-blue-400 rounded-xl bg-blue-100 duration-300 tap-highlight-transparent select-none touch-none border-medium border-default bg-transparent data-[hover=true]:bg-default-100 data-[pressed=true]:scale-[0.97] transition-transform-background flex flex-wrap truncate box-border items-center justify-center text-default-foreground outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 data-[disabled=true]:text-default-300 data-[disabled=true]:pointer-events-none shadow-sm min-w-9 w-9 h-9 text-small rounded-medium">3</li>
        </ul>
   
   </div>
  )
}

export default pagination
