import React from "react";

// 재사용가능한 컴포넌트
function User({user, onRemove}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            {/* id를 가지고 삭제 */}
            <button onClick={() => onRemove(user.id)}>Delete</button> 
        </div>
    );
} 

export default User