import { useRoutes } from 'react-router-dom'
import { Router } from './router/router'
import './App.css'
import {ContextProvider} from './context/context'


function App() {
const router = useRoutes(Router)
  return (
    <>
    <ContextProvider>
    {router}
   
    </ContextProvider>
    </>
  )
}

export default App
