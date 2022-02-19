import {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
import App12 from './App12';
import App13 from './App13';
import React from 'react';
function Content()
{
    const [title,setTitle]=useState(true);
    let changeTitle=()=>{
        setTitle(!title);
        
    }
    
    return (
    
        <>
        <button onClick={changeTitle}>Toggle</button>
        {title && <App13/>}
        </>
    )

}
export default Content