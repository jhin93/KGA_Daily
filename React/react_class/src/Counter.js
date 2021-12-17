import React from "react";

function Counter() {
    const onIncrease = () => {
        console.log("+1")
    }

    const onDecrease = () => {
        console.log("-1")
    }

    return(
        <>
            <h1>0</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}


export default Counter;