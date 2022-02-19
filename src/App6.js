import {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
import React from 'react';
// cach dung useEffec(,[]) de call api 1 lan du co re-render di nua
function App6()
{
    const [title,setTitle]=useState('');
    const [post,setPost]=useState([]);
    // lay du lieu tu file json 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>setPost(posts));
    },[])
    console.log(post);
    
    return (
    
        <>
            <input  value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <ul>
                {
                    post.map((element)=><li key={element.id}>{element.title}</li>)
                }
            </ul>
        </>
    )

}
export default App6