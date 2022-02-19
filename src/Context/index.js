import React,{useState, createContext, useContext} from 'react';
import Content  from './Content';
import {ThemeProvider, ThemeContext} from './ThemeContext';

//useContext
// const themeContext = createContext();
// cach 1 de dung themeContext la export
// export const themeContext = createContext();

//Compa=>CompB=>CompC
//1.Create context 
//2.Provider(cung cap du lieu)
//3.Consumer(nhan du lieu)
function Context(){
    const themeContext=useContext(ThemeContext);
    console.log(themeContext);
    return(
        <ThemeProvider>
            <div style={{padding: '20px'}}>
                <button>Toggle me</button>
                <Content/>
            </div>
        </ThemeProvider>
    )
}
export default Context;