import {useState, createContext} from 'react';
const ThemeContext=createContext();
function ThemeProvider({children}){
    const [theme,setTheme] =useState('dark');
    const toggleTheme=()=>{
        setTheme(theme==='dark'?'light':'dark');
    }
    const value1={
        theme,
        toggleTheme
    }   
    return(
        <ThemeContext.Provider value={value1}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeProvider,ThemeContext} 