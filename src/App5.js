import {useState} from 'react';
import './App.css';
import Content  from './Content';

// submit 2 the input va 2 the input thay doi dua tren du lieu nhap vao
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

export default App4;
