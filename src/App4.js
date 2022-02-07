import {useState} from 'react';
import './App.css';


// su dung localsotrage de hien thi ra du lieu
function App4() {
   
  const [job,setJob]=useState('');
  // ?? neu la null hoac undefined
  const [jobs,setJobs]=useState(()=>{
    const jsonStorageJobs=localStorage.getItem('jobs');
  
    const storageJobs=JSON.parse(jsonStorageJobs);
    console.log(jsonStorageJobs);
    console.log(storageJobs);
    return storageJobs ??[]}
      );
  function HandleClick()
  { 
        setJobs((prev)=>{
            const newJob = [...prev,job];
            const jsonJob= JSON.stringify(newJob);

            // luu vao local storeage
            localStorage.setItem('jobs',jsonJob);   

            console.log(jsonJob)
            return newJob;
        });
        // lam the input thanh rong
        setJob('');

  }
  return (
    <div style={{padding : 32}} className="App">
            <input value={job} onChange={e=>setJob(e.target.value)}/>
            <button onClick={()=>HandleClick()} >Add</button>

            <ul>
                {
                    jobs.map((element,index)=><li key={index}>{element}</li>)
                }
            </ul>

    </div>
  );
}

export default App4;
