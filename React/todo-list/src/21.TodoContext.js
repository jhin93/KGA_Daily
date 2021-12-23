import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: 'Create Project',
    done: true
  },
  {
    id: 2,
    text: 'Component Styling',
    done: true
  },
  {
    id: 3,
    text: 'Make Context',
    done: false
  },
  {
    id: 4,
    text: 'Developing Functional',
    done: false
  }
];

function TodoReducer(state, action) {  // 사용자 정의 state를 줌
  switch(action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map(
        todo => todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unahndled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}) {  // children이 
  // useReducer(<reducer>, <initialstate>)
  const [state, dispatch] = useReducer(TodoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);

  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return context;
}

export function useTodoDispatch() { // Context를 사용하려고 만든 함수
  const context = useContext(TodoDispatchContext);

  if(!context) {
    throw new Error('Cannot find TodoProvider');
  }

  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
}