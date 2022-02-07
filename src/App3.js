import {useState} from 'react';
import './App.css';


// tao checkbox ( dung include de chon nhieu checkbox va ky thuat xu li khi xoa bo checkbox)
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
           // o day co the dung mang check hoac prev deu duoc 
            const isChecked=prev.includes(id);
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
