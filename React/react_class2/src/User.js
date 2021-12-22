import React from "react";

// 재사용가능한 컴포넌트
function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
} 

export default User