import React, {useEffect} from "react";

// 재사용가능한 컴포넌트
function User({user, onRemove,onToggle}) {
    // useEffect
    // 빈배열을 넣어주면 첫 렌더링만 실행, 배열 없으면 리렌더링때마다 함수 실행
    // https://www.daleseo.com/react-hooks-use-effect/  
    useEffect(() => {
        console.log("Set user value");
        console.log(user);
        return () => { // 특정값이 업데이트 되기 직전 혹은 사라지기 전에 업데이트를 하려면 return() 안에 써준다
            console.log("Deleted user value");
            console.log(user);
        };
    }, [user]);

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

export default React.memo(User)