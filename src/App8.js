import {useEffect, useReducer} from 'react';
import { useState } from 'react/cjs/react.development';
// resize lai man hinh, du lieu thay doi lien tuc nen phai dung useEffect
function App8()
{
    // set width = chieu ngang hien tai
    const [width,setWidth]=useState(window.innerWidth);

    useEffect(()=>{
        const handleResize=()=>{
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleResize)
        return (()=>{
            window.removeEventListener('resize',handleResize);
        })
    },[])
    return(
        <>
            <h1>{width}</h1>
        </>
    )

}
export default App8