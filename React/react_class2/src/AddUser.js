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
            email: "" // 초기화
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
                // CreateUser에서 받은 onCreate props를 함수 onCreate로 전달. 사실 받은건 없고 그냥 onCreate를 작동하는 트리거로 보인다.
            />
            <UserList users={users} />
        </>
    )
};

export default AddUser

// 수업자료
// https://react.vlpt.us/basic/11-render-array.html