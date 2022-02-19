import {useEffect, useReducer} from 'react';
import { useState } from 'react/cjs/react.development';
import React from 'react';
//return duoc goi truoc khi re render khi count thay doi ( dung voi file content.js)
function App10()
{
  
    const [count,setCount]=useState(1);
    

    
    useEffect(()=>{
       console.log(`Mounted or re-render lan thu ${count}`);
       return()=>{
        console.log(`Clean up lan thu ${count}`);
       }
    },[count])
    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>
                Click me1
            </button>
        </> 
    )

}
export default App10;