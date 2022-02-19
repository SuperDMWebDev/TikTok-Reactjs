import React, {useReducer, useRef} from "react";
import reducer, {initState} from "./reducer";
import {setJob,addJob,deleteJob} from "./actions";
import logger from './logger';
/// todoapp with reducer
// cac buoc tao reducer
//1 .inistate

//2.actions

//payload la du lieu truyen vao


//3.reducer


//4.dispatch

function ToDo(){
    const [state,dispatch]=useReducer(logger(reducer),initState);
    const {job,jobs}=state;
    // console.log(state);
    const inputRef=useRef()
    function handleSubmit()
    {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus();
    }
    return(
        <div style={{padding:'0px 20px'}}>
            <h3>Todo</h3>
            <input 
            ref={inputRef}
            value={job}
             placeholder="Enter todo"
             onChange={e=>{
                 dispatch(setJob(e.target.value));
             }}/>
            <button onClick={handleSubmit}>Add</button>
            <ul>
               {jobs.map((job,index)=>(<li key={index}>{job} 
               
                <span onClick={()=>dispatch(deleteJob(index))}>
                    &times;
                </span>
               </li>))}
            </ul>
        </div>
    )
}
export default ToDo;