import {useState} from 'react';
import React from 'react';
import './App.css';


// submit 2 the input va 2 the input thay doi dua tren du lieu nhap vao
function App1() {
  const [email,setEmail]=useState()
  const [name,setName]=useState()
  function HandleClick()
  {
      console.log(email);
      console.log(name);
  }
  return (
    <div className="App">
       
        <input value={name||''} placeholder='Hay nhap name' onChange={e=>setName(e.target.value)} />
        <input value={email||''} onChange={e=>setEmail(e.target.value)}/>
        <button onClick={HandleClick}>Submit</button>

    </div>
  );
}

export default App1;
