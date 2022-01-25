import {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';

function Content()
{
    const [title,setTitle]=useState('');
    useEffect((title)=>{
        document.title=title;
    })
    return (
    
        <>
            <input  value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </>
    )

}
export default Content