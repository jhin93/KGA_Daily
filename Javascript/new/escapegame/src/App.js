import logo from './logo.svg';
import './App.css';
import React from "react";
import { useRef } from 'react';
import "./game";

// var [columnNum, RowNum] = prompt("두 숫자를 띄어쓰기로 입력하세요 ").split(" "
export default function App () {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <canvas id="myCanvas" width="600" height="600" style={{"backgroundColor" : "beige"}}></canvas>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



