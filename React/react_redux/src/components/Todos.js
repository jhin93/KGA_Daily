import React, { useState } from "react";

const TodoItem = React.memo(function TodoItem({todo, onToggle}){
    return (
        <li
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    )
});

const TodoList = React.memo(function todoList({todos, onToggle}){
    return (
        <ul>
            {todos.map( todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            ))}
        </ul>
    )
});

function Todos({ todos, onCreate, onToggle }) {
    // redux를 사용한다고 해서 모든 state(상태)를 redux에서 관리해야 하는 것은 아니다.
    const [text, setText] = useState("");
    const onChange = (e) => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // submit event 발생 시 refresh 방지
        onCreate(text);
        setText("") // initialize input 
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={text}
                    placeholder="input todo..."
                    onChange={onChange}
                />
                <button type="submit">Regist</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}


export default Todos;
