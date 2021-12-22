import React from "react"
import User from "./User"

function UserList({users, onRemove}) { // 인자추가
    // const users = [
    //     {
    //         id: 1,
    //         username: "Undead",
    //         email: "undead@undercity.com"
    //     },
    //     {
    //         id:2,
    //         username: "Bloodelf",
    //         email: "bloodelf@silvermoon.com"
    //     },
    //     {
    //         id:3,
    //         username: "Nightelf",
    //         email: "nightelf@darnasus.com"
    //     }
    // ]

    // return (
    //     <div>
    //         <div>
    //             <b>{users[0].username}</b> <span>{users[0].email}</span>
    //         </div>
    //         <div>
    //             <b>{users[1].username}</b> <span>{users[1].email}</span>
    //         </div>
    //         <div>
    //             <b>{users[2].username}</b> <span>{users[2].email}</span>
    //         </div>
    //     </div>
    // );

    // 재사용 컴포넌트를 불러와서 출력
    // return (
    //     <div>
    //         <User user={users[0]} />
    //         <User user={users[1]} />
    //         <User user={users[2]} />
    //     </div>
    // )

    // map 메소드
    return (
        <div>
            {/* 리턴에서 스크립트를 쓸 때 {} 안에서 작성한다. */}
            {
                users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove}/> //key값으로 객체에 접근한다.
                ))
            }
        </div>
    );
}

export default UserList