import logo from './logo.svg';
import './App.css';
// import Wow from './Wow';
// import Counter from './Counter';
// import {CalData,Textaddition} from './CalcResult';
// import Jsxtest from './Jsxtest';
// import Jsxcss from './Jsxcss';
import Block4 from './Block4 copy';
import TabRouter from './TabRouter';


// 기존

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App(){
  return(
    <>
      {/* <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div> */}
      <TabRouter />
    </>
  );
}

export default App;