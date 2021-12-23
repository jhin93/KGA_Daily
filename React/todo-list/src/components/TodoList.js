import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    overflow-y: auto;
`;

function TodoList () {
    return (
        <TodoListBlock>
            <TodoItem text="Create Project" done={true}/>
            <TodoItem text="Component Styling" done={true}/>
            <TodoItem text="Make Context" done={false}/>
            <TodoItem text="Developing Function" done={false}/>
        </TodoListBlock>
    );
}

export default TodoList