import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';


const Elem = () => 
  React.createElement("button",{onClick:()=>alert("Button created without JSX")},"Click ME!");

const ElemWithJSX = () => (
  <button onClick={()=> alert("Button created with JSX usage clicked")}>Click ME JSX</button>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

