import React, { useEffect, useState, useLayoutEffect } from 'react';
//useLayoutEffect hoat dong de ung dung ko bi chuong nhoang (video 35)
function Content(){
    const [count,setCount]=useState(1);
    useLayoutEffect(()=>{
        if(count>3)
        {
            setCount(0);
        }
    },[count]);
    const handleRun=()=>{
        setCount(count+1);
        
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Click</button>
        </div>
    )
}
export default Content;