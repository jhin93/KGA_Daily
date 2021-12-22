import React from "react"
import User from "./User"

function UserList({users, onRemove, onToggle}) { // 인자추가
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
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove}
                        onToggle={onToggle}
                    /> //key값으로 객체에 접근한다.
                ))
            }
        </div>
    );
}

export default React.memo(UserList) 
// 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용합니다.
// 이 메서드는 오직 성능 최적화를 위하여 사용됩니다. 렌더링을 “방지”하기 위하여 사용하지 마세요. 버그를 만들 수 있습니다.
// https://ko.reactjs.org/docs/react-api.html#reactmemo