import React from "react"

const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
        <div>
            <input 
                name="username"
                placeholder="Account"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="eMail"
                onChange={onChange}
                value={email} 
            />
        </div>
    );
}






















