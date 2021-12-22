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
        </div>
    );
}

export default CreateUser






