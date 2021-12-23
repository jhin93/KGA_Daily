import React from "react";
import styled from "styled-components";
import TodoItem from "./21.TodoItem";
import { useTodoState } from "../21.TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 28px;
  overflow-y: auto;
`;

export default function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))
      }
    </TodoListBlock>
  );

  // return (
  //   <TodoListBlock>
  //     <TodoItem text="Create Project" done={true} />
  //     <TodoItem text="Component Styling" done={true} />
  //     <TodoItem text="Make Context" done={false} />
  //     <TodoItem text="Developing Function" done={false} />
  //   </TodoListBlock>
  // );
}