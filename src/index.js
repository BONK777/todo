import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './style.css'

const name = "ALEXEY";

const textColor = "red";

ReactDOM.render(
  <React.StrictMode>
    <App name={name} color={textColor}/>
  </React.StrictMode>,
  document.getElementById('root')
);
