import {React, useState, memo, useCallback} from 'react';
import App151 from './App151';
//useCallback de tao 1 cho tham chieu giup cho increase ko bi re render  
function App15()
{
    const [count,setCount]=useState(0)
    const increase=useCallback(()=>{
        setCount(count=>count+1);
    },[])
    return(
        <>
        <div style={{padding: '10px 20px'}}>
            <App151 onIncrease={increase}/>
            <h1>{count}</h1>
        </div>
        </>
    )
}
export default App15;