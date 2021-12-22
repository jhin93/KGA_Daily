import React, {useRef, useState} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function AddUser () {
    const [inputs, setInputs] = useState({
        username: "",
        email: ""
    });

    const {username, email} = inputs;
    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: "Undead",
            email: "undead@undercity.com"
        },
        {
            id:2,
            username: "Bloodelf",
            email: "bloodelf@silvermoon.com"
        },
        {
            id:3,
            username: "Nightelf",
            email: "nightelf@darnasus.com"
        }
    ]);

    const nextId = useRef(4) //id가 3까지 있으니 4를 넣어줌
    const onCreate = () => {
        const user = {
            id: nextId.current, // current는 현재값. useRef에 넣어준 4값.
            username,
            email
        };
        setUsers(users.concat(user)) // concat메소드는 붙여넣기

        setInputs({
            username: "", // 초기화
            email: ""
        })
        nextId.current += 1; // 아이디를 추가했으니 1이 늘어남
    }

    return (
        <>
            <CreateUser 
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} />
        </>
    )
};

export default AddUser

// 수업자료
// https://react.vlpt.us/basic/11-render-array.html