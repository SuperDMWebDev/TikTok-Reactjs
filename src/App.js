import './App.css';
import {React, useState} from 'react';
const totals=[100,200,300]

function App() {
  const [counter,setCounter]=useState(()=>{
    const sum=totals.reduce((total,element)=>total+element,3);
    return sum;
  });

  const [info,setInfo]=useState({
    name:'Nguyen Van A',
    age: 18,
    address: 'Ha Noi'
  })

  function HandleClick(){
      setCounter(counter=>counter+1);
      setCounter(counter=>counter+1);
      setCounter(counter=>counter+1);

  }
  function HandleClick1()
  { 
    setInfo({
      ...info,
      address:'Ho Chi Minh'
    })
  }
  return (
    <div className="App">
        <h1>{counter}</h1>
        <button onClick={HandleClick}>Increase</button>

        <h2>{JSON.stringify(info)}</h2>
        <button onClick={HandleClick1}>Increase</button>

        

    </div>
  );
}

export default App;
