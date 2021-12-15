import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './Car'
import Gundam from "./Gundam"
import Archangel from './Archangel';
import Headercomp from './Headercomp';
import reportWebVitals from './reportWebVitals';

// 기존

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Archangel /> */}
    <Headercomp />
    {/* <Gundam cargo = "Archangel"/> */}
  </React.StrictMode>,
  document.getElementById('header')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// ---------------------- 12/15 수업 예제-----------------
// App.js 없이 아래처럼 컴포넌트를 index.js에 바로 입력하는 것도 가능.
// class Gundam extends React.Component {
//   constructor(props) {
//       super(props);
//   }

//   render() {
//       return <h1>This Gundam is {this.props.model}!!!</h1>
//   }
// }

// ---------------------- 12/14 수업 예제-----------------

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <th>John</th>
//     </tr>
//     <tr>
//       <th>Elsa</th>
//     </tr>
//   </table>
// )

// ReactDOM.render(myelement, document.getElementById("root"));


// ReactDOM.render(<p>Hello</p>, document.getElementById("root"));




// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <h1>
//         Hello {this.props.name}
//       </h1>
//     )
//   }
// }


// ReactDOM.render(
//   <HelloMessage name="React" />,
//   document.getElementById("root")
// )


// const myElement = <h1>I Love React !!!!</h1> // JSX type
// const myElement = React.createElement('h1', {}, 'Did not use jsx') // React Element type
// const myElement = <h1>React is {5 + 5} times better with JSX!!!</h1>
// const myElement = (
//   <ul>
//     <li>Apple</li>
//     <li>Goolge</li>
//     <li>Amazon</li>
//     <li>Facebook</li>
//   </ul>
// )

// const myElement = (
//   <div>
//     <h1>Hello World</h1>
//     <p>I Love React and nodejs !!!</p>
//   </div>
// )

// const myElement = (
//   <input type="text" />
// );
// const myElement = <h1 className="myClass">Hello World !!!</h1>

// const x = 8;
// let txt = "Hello World!!!";
// if(x < 10){
//   txt = "Hello"
// }
// const myElement = <h1>{txt}</h1>;

// const myElement = <h1>{(x) < 10 ? "Hello" : "Hello World!!!"}</h1>

// ReactDOM.render(myElement, document.getElementById("root"));
// --------------------------------------------


