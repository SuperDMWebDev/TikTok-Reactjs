import {useState} from 'react';
import './App.css';

/// cach de tao thay doi radio chi duoc chon 1 gia tri , submit in ra gia tri duoc chon
function App2() {
  const courses=[{
      id:1,
      name:'Html,css'
  },
    {
      id:2,
      name:'Javascript'
    },
    {
        id:3,
        name:'Reactjs'
    }]

    const [checked,setChecked]=useState(2);
    console.log(checked);
    function HandleClick()
    {
      //  vi du in ra id : 2, id : 1 
        console.log({"id": checked});
    }
  return (
    <div className="App">
        {
            courses.map(course=>(
                <div key={course.id}>
                    <input type="radio" checked={course.id === checked}
                    onChange={()=>setChecked(course.id)}/>
                {course.name}
                </div>
            ))
        }
        <button onClick={HandleClick}>Submit</button>

    

    </div>
  );
}

export default App2;
