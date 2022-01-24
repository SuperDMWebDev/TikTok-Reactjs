import {useState} from 'react';
import './App.css';


// submit 2 the input va 2 the input thay doi dua tren du lieu nhap vao
function App3() {
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

    const [checked,setChecked]=useState([]);
    function HandleClick()
    {
        console.log({id: checked});
    }
    function HandleCheck(id)
    {
        setChecked(prev=>{

            const isChecked=checked.includes(id);
            if(isChecked)
            {
                return checked.filter(element=>element!==id)
            }
            
            else{
                return [...prev,id]
            }
        })
    }
  return (
    <div className="App">
        {
            courses.map(course=>(
                <div key={course.id}>
                    <input type="checkbox" checked={checked.includes(course.id)}
                    onChange={()=>HandleCheck(course.id)}/>
                {course.name}
                </div>
            ))
        }
        <button onClick={HandleClick}>Submit</button>

    

    </div>
  );
}

export default App3;
