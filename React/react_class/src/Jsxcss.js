import React from "react";
import Hello from "./Hello"; // 한 컴포넌트에서 다른 컴포넌트를 가져올 수 있다

function Jsxcss(){
    let name = "react";
    const myStyle = {
        backgroundColor : "green",
        color: "white",
        fontSize: 24, // default pixel
        padding: "1rem"
    }

    return (
        <>
            <Hello />
            <div style={myStyle}>{name}</div>
        </>
    );
}

export default Jsxcss;