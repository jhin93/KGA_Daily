import React from "react";

function Jsxtest() {
    const name = "my name is react"
    return(
        // 빈태그를 입력하는 것은 short syntax라고 부름
        <>
            <div>
                <h1>Hello world!!!</h1>
            </div>
            <div>
                <h1>Hello world!!!</h1>
                <h2>{name}</h2>
            </div>
            <input />
            <br />
            <label>hello label</label>
        </>
    );
}

export default Jsxtest



