import React from "react"

const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
        <div>
            <input 
                name="username"
                placeholder="User Name"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="eMail"
                onChange={onChange}
                value={email} 
            />
            <button onClick={onCreate}>Add</button>
            {/* CreateUser에서 onClick를 사용하여 onCreate 인자(onCreate로 뭘할지는 받는 AddUser에 정의돼있음)를 AddUser로 props로 전달한다. */}
            {/* https://studyingych.tistory.com/54 */}
        </div>
    );
}

export default React.memo(CreateUser)






