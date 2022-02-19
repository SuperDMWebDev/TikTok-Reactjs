import { useReducer, useState } from "react";
import React from 'react';
// su khac nhau giua useState va useReducer
// ve co ban useState tuong tu nhu useReducer
// useState dung cho cac kieu du lieu don gian va du lieu phuc tap ( nhung it nhu object khong long nhau)
//cach dung reducer
//1. inistate
//2. dinh nghia cac hanh dong
//3. khai bao reducer 
// 4. dispatch(active action)
const initState=0;

const up_Action='up';
const down_Action='down';

//reducer nhan vao 2 tham so: state va action 
const reducer=(state,action)=>{
    console.log('call reducer')
    switch(action){

        case up_Action:
            return state+1;
        case down_Action:
            return state-1;
        default:
            throw new Error('Invalid action');
    }
}

// function App17(){
//     const [count,setCount]=useState(0);
//     return(
//         <div style={{padding: '0px 20px'}}>
//             <h1>{count}</h1>
//             <button
//                 onClick={()=>setCount(count-1)}
//             >Down</button>
//             <button
//                 onClick={()=>setCount(count+1)}
//             >Up</button>
//         </div>
//     )
// }
// cai tren tuong tu cai duoi
function App17(){
    const [count,dispatch]=useReducer(reducer,initState);
    return(
        <div style={{padding: '0px 20px'}}>
            <h1>{count}</h1>
            <button
                onClick={()=>dispatch(down_Action)}
            >Down</button>
            <button
                onClick={()=>dispatch(up_Action)}
            >Up</button>
        </div>
    )
}
export default App17;