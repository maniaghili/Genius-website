
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './fonts/Mj_Mokhtar.ttf'
import './fonts/Mj_Free_0.ttf'
import './fonts/Samim.ttf'
import App from './App.tsx'
import './index.css'
import { ContextProvider } from './context/context.tsx'

createRoot(document.getElementById('root')!).render(
   <ContextProvider>

 <BrowserRouter>
    <App />
 </BrowserRouter>
   </ContextProvider>
  
)



