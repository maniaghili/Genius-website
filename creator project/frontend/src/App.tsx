import { useRoutes } from 'react-router-dom'
import { Router } from './router/router'
import './App.css'



function App() {
const router = useRoutes(Router)
  return (
    <>
    {router}
    
    </>
  )
}

export default App
