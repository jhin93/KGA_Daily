import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './components/21.TodoTemplate';
import TodoHead from './components/21.TodoHead';
import TodoList from './components/21.TodoList';
import TodoCreate from './components/21.TodoCreate';
import { TodoProvider } from './21.TodoContext';
// import ReduceExam from './22.ReduceExam'

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

// function App() {
//   return (
//     <>
//     <div>
//       <ReduceExam />
//     </div>
//     </>
//   )
// }

function App() {
  return (
    <>
      <div>
        <TodoProvider>
          <GlobalStyle />
            <TodoTemplate>
              <TodoHead />
              <TodoList />
              <TodoCreate />
            </TodoTemplate>
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
