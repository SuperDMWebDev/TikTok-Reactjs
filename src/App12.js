import {useEffect, useReducer} from 'react';
import { useState } from 'react/cjs/react.development';
import React from 'react';
// du lieu nay ko can re render dat ngoai function
const lessons=[
    {
        id:1,
        name:'Reactjs'
    },
    {
        id:2,
        name:'Nodejs'
    },
    {
        id:3,
        name:'Vuejs'
    }
]

// lien quan toi fake comment trong content.js
function App12()
{
    const [lessonId,setLessonId]=useState(1);
    useEffect(()=>{
        const handleComment=({detail})=>{
                console.log(detail);
        }
        // tu dong in ra noi dung component tuong ung moi 2s
        // them eventlistener cho custom event lesson-id
        window.addEventListener(`lesson-${lessonId}`,handleComment);
        return ()=>{
            // remove envent listener cho custom event lesson-id
            window.removeEventListener(`lesson-${lessonId}`,handleComment);
        }
        // moi khi lessonId thay doi se rerender lai
    },[lessonId])
    return(
      <div>
          {lessons.map(lesson=>(
              <li
                key={lesson.id}
                style={{
                    color: lessonId==lesson.id?
                    'red':'#333'
                }}
                onClick={()=>setLessonId(lesson.id)}
              
              >

                {lesson.name}
              </li>
          ))}
      </div>
    )

}
export default App12;