import {useEffect, useReducer} from 'react';
import { useState } from 'react/cjs/react.development';
// tao ung dung chay nguoc 
function App9()
{
    // set width = chieu ngang hien tai
    const [countDown,setCountDown]=useState(180);
    console.log(countDown);

    // su dung useEffect tao 1 lan khong doi so , chay countdown=countdown-1
    useEffect(()=>{
        setInterval(()=>{
            setCountDown(element=>element-1);
        },2000)
    },[])
    return(
        <>
            <h1>{countDown}</h1>
        </> 
    )

}
export default App9