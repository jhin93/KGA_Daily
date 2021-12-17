import logo from './logo.svg';
import './App.css';
import Wow from './Wow';
import Counter from './Counter';

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


// ---------------- 수업 예제 ------------------
function App(){
  return(
    <div>
      <Counter />
    </div>
  );
}

export default App;