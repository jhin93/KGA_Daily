import React, {useRef, useState} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function UserManage () {
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
            email: "undead@undercity.com",
            active: true
        },
        {
            id:2,
            username: "Bloodelf",
            email: "bloodelf@silvermoon.com",
            active: false
        },
        {
            id:3,
            username: "Nightelf",
            email: "nightelf@darnasus.com",
            active: false
        }
    ]);

    const nextId = useRef(4) //id가 3까지 있으니 4를 넣어줌

    // 생성함수
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

    // 삭제함수
    const onRemove = (id) => { // 인자를 id로 표현
        setUsers(users.filter(user => user.id !== id)) 
        // 인자로 받은 id와 같지 않은 아이디들을 필터링. prop로 받은 id와 같지 않은 id들로 새로운 배열 생성
        // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
    }

    // 색상변경함수
    const onToggle = (id) => {
        setUsers(
            users.map(user =>
                user.id === id ? {...user, active: !user.active} : user 
                // 1. 기존의 id와 props로 전달된 user.id(User.js에서 onclick으로 클릭된 user.id)가 같으면 -> 한마디로 유저리스트 중에서 클릭된 아이디를 캐치
                // 2. 해당 id를 가진 user의 active에다가 그와 반대되는 active값을 넣는다. 앞의 ...user은 user가 가진게 많아서 써준 것. 
                // 3. 같지 않으면 user를 맵에서 던져줌
            )
        )
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
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    )
};

export default UserManage

// 수업자료
// https://react.vlpt.us/basic/11-render-array.html