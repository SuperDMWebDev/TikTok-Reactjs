import {useRef, useState,useEffect} from 'react';
import React from 'react';
//useRef dung de luu mot bien toan cuc 

function App14(){
    const [count,setCount]=useState(60);
    //dat const vi chi thay doi property current chu ko thay doi timerId
    const timerId= useRef();

    //tim gia tri turoc do cua count
    const prevCount=useRef();


 


    useEffect(()=>{
        prevCount.current=count;
    },[count])
    console.log(count,prevCount.current);


    //lay 1 element thay cho getElementById
    const h1Ref=useRef();
    useEffect(()=>{
        const rect=h1Ref.current.getBoundingClientRect();
        console.log(rect);
    })

    const handleStart=()=>{
        timerId.current=setInterval(()=>{
            setCount((prev)=>prev-1)
        },1000)
        console.log('Start->',timerId.current);
    }
    const handleEnd= function(){
        clearInterval(timerId.current);
        console.log('End->',timerId.current);
    }
    return (
        <div style={{padding: 20}}>
                <h1 ref={h1Ref}>{count}</h1>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleEnd}>End</button>
        </div>
    )
}
export default App14;