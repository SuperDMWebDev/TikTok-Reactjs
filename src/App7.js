import {useEffect} from 'react';
import { findRenderedDOMComponentWithTag } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useState } from 'react/cjs/react.development';
import React from 'react';
// cach dung useEffec(,[deps]) tu render lai moi khi deps thay doi 
// hien thi button khi scroll xuong duoi > 200
function App7()
{
    const tabs=['posts','comments','albums']
    const [title,setTitle]=useState('');
    const [post,setPost]=useState([]);
    const [type1,setType1]=useState('posts');
    const [showTop,setShowTop]=useState(false);
    console.log(type1);
    // useEffect se chay 2 lan ( lan 1 la sau khi mounted , lan 2 la sau khi sua type1)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type1}`)
        .then(res=>res.json())
        .then(posts=>setPost(posts));
    },[type1])
    useEffect(()=>{
        const handleScroll=()=>
        {
            if(window.scrollY>200)
            {
                setShowTop(true);
            }
            else
            {
                setShowTop(false);
            }

        }   
        window.addEventListener('scroll', handleScroll);


        // clean up function dung de remove listener khi trang nay bi remove 
        return ()=>{
            window.removeEventListener('scroll',handleScroll);}
    },[])


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

            {
                showTop &&
                    <button style={{
                            position:'fixed',
                            right:20,
                            bottom:20
                    }}>
                        GO TO TOP
                    </button>
                }

            }
        </>
    )

}
export default App7