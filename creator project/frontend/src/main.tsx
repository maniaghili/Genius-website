
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './fonts/Mj_Mokhtar.ttf'
import './fonts/Mj_Free_0.ttf'
import './fonts/Samim.ttf'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
    <App />
 </BrowserRouter>
  
)



