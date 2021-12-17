import { useState } from "react";
import React from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number + 1) // 상태를 직접 조작
        // setNumber(asd => asd + 1) // 상태를 업데이트하는 함수를 넣어줌
        console.log(number) // number를 찍으니까 이전 state가 나온다
    }

    const onDecrease = () => {
        setNumber(number - 1)
        // setNumber(asd => asd - 1) // 상태를 업데이트하는 함수를 넣어줌
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