import {useState} from 'react';
import './App.css';
import Content  from './Content';
import React from 'react';
// dung 1 button de an hien 1 element
function App5() {
    const [show,setShow]=useState(false)
    function HandleClick()
    {
        setShow(!show);
    }
   return(
       <div>
           <button onClick={()=>HandleClick()}>Show</button>
           {show && <Content/>}
       </div>
   )
    
}

export default App5;
