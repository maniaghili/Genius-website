import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/util";

export const theme = createContext(null)

export const ThemeProvider:FC<PropsWithChildren> = ({children}) => {

  const localTheme = getLocalStorage('theme')

const [currentTheme,setCurrentTheme] = useState(localTheme || 'light')

const allValues = {
    currentTheme,
    setCurrentTheme
}

useEffect(()=>{
const htt = document.querySelector('html')
if(currentTheme == 'light' || null){
    htt?.classList.add('light')
    htt?.classList.remove('dark')
}else{
  
    htt?.classList.add('dark')
    htt?.classList.remove('light')
}
setLocalStorage('theme',currentTheme)

},[currentTheme])

return (
    <theme.Provider value={allValues as  any}>
       {children}
    </theme.Provider>
)
    
}