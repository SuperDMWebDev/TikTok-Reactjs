import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import Content from './Content';
import reportWebVitals from './reportWebVitals';
// fake comment dung chung voi app12
// moi 2s phat ra 1 event 
function emitComment(id){
  setInterval(()=>{
    // tu dong phat 1 event
    //custom event : doi so thu nhat event name, doi so thu 2 object event (key-value)
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`,
      {
        detail: `noi dung comment cua lesson${id}`
      })
    )
  },2000)
}
emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
