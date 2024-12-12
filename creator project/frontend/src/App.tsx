import { useLocation, useRoutes } from 'react-router-dom'
import { Router } from './router/router'
import './App.css'
import { Suspense, useLayoutEffect } from 'react'
import { QueryClientProvider,QueryClient } from 'react-query'
import{ReactQueryDevtools} from 'react-query/devtools'
function App() {

  const allQueries = new QueryClient()
  const {pathname} = useLocation()
  
  useLayoutEffect(()=>{
     window.scrollTo(0,0)
     console.clear()
  },[pathname])

  
const router = useRoutes(Router)
  return (
    
   <QueryClientProvider client={allQueries}>
   <Suspense>
    <div className='dark:bg-gray-950'>
    {router}
    </div>
    </Suspense>
   <ReactQueryDevtools />
   </QueryClientProvider>
    
  )
}

export default App
