import {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
import App12 from './App12';
function Content()
{
    const [title,setTitle]=useState(true);
    let changeTitle=()=>{
        setTitle(!title);
        
    }
    
    return (
    
        <>
        <button onClick={changeTitle}>Toggle</button>
        {title && <App12/>}
        </>
    )

}
export default Content