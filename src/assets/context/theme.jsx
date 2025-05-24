import { createContext, useState } from "react";

export const ThemeContextt = createContext()

export function ThemeProvider({ children }){
    const [theme, setTheme] = useState(false)
    return <ThemeContextt.Provider value={{theme, setTheme}}>
        { children }
    </ThemeContextt.Provider>
}