//1. create context
//2. add values inside context
//3. apply context on root/component level
//4. access context data without props
import { createContext, useState } from "react";

export const ThemeContext = createContext()
export function ThemeProvider(props)
{
    let [theme,setTheme]=useState('light')
    let themeStyle =""
    theme==='light'? themeStyle = "bg-light text-dark" : themeStyle = "bg-dark text-light"

    return (
        <ThemeContext.Provider value={{theme,setTheme,themeStyle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
