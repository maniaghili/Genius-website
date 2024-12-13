import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/util";

const theme = createContext(getLocalStorage('theme'))

export const ThemeProvider:FC<PropsWithChildren> = ({children}) => {

const [currentTheme,setCurrentTheme] = useState('light')

const allValues = {
    currentTheme,
    setCurrentTheme
}

useEffect(()=>{
const htt = window.document.querySelector('html')
htt?.classList.add(currentTheme)
},[])

return (
    <theme.Provider value={allValues as  any}>
       {children}
    </theme.Provider>
)
    
}