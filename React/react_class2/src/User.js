import React from "react";

// 재사용가능한 컴포넌트
function User({user, onRemove,onToggle}) {
    return (
        <div>
            <b
                style={{
                    cursor:"pointer", 
                    color: user.active ? "green" : "black" // user.active 가 true면 초록 아니면 검정
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            {/* id를 가지고 삭제 */}
            <button onClick={() => onRemove(user.id)}>Delete</button> 
        </div>
    );
} 

export default User