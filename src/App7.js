import {useEffect} from 'react';
import { useState } from 'react/cjs/react.development';
// cach dung useEffec(,[deps]) tu render lai moi khi deps thay doi 
function App7()
{
    const tabs=['posts','comments','albums']
    const [title,setTitle]=useState('');
    const [post,setPost]=useState([]);
    const [type1,setType1]=useState('posts');
    console.log(type1);
    // useEffect se chay 2 lan ( lan 1 la sau khi mounted , lan 2 la sau khi sua type1)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type1}`)
        .then(res=>res.json())
        .then(posts=>setPost(posts));
    },[type1])
    
    return (
    
        <>
            {
                tabs.map((element)=>(
                    <button key={element} style={type1===element ? {color:'#fff', backgroundColor:'#333'}:{}} onClick={()=>setType1(element)}>
                        {element}
                    </button>
                ))
            }
            <ul>
               {
                   post.map((element)=><li key={element.id}>{element.title || element.name}</li>)
               }
            </ul>
        </>
    )

}
export default App7