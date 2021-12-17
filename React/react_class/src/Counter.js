import { useState } from "react";
import React from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1)
        // setNumber(prevNumber => prevNumber + 1) // 이전 상태
        console.log(number) // number를 찍으니까 이전 state가 나온다
    }

    const onDecrease = () => {
        setNumber(number - 1)
        // setNumber(prevNumber => prevNumber - 1) // 이전 상태
        console.log(number) // number를 찍으니까 이전 state가 나온다
    }

    return(
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    )
}


export default Counter;