import React, { useState } from "react";

export default function Calculator () {
    const [number, setNumber] = useState(0) // 입력숫자 여러개 눌러서 하나의 수로.
    const [buttonClicked, setButtonClicked] = useState(''); // 클릭한 버튼의 종류를 감지
    const [calcResult, setCalcResult] = useState("Calc Result") // 계산 혹은 입력을 화면에 출력

    //입력한 수들을 담을 배열
    let writedNum = [];

    // 클릭된 수를 상태에 담기
    const clickedNum = (e) => {
        if(number){
            setNumber(number + e.target.value)
        } else {
            setNumber(e.target.value)
        }
    }

    //입력값 배열에 담기
    writedNum.push(number)
    console.log("배열에 값이 담겼는가 : ", writedNum)

    // 연산버튼 - switch문을 위한 기반
    const arithmetic = (e) => {
        e.preventDefault();
        setButtonClicked(e.target.value)

        // 끊어줘야 한다.
        
        
    }


    // 계산함수
    const Calculation = (e) => {
        e.preventDefault();
        switch (buttonClicked) {
            case "+":
                setCalcResult("배열의 첫번째" + "배열의 두번째");
                break;
            case "-":
                setCalcResult(parseInt("배열의 첫번째") - parseInt("배열의 두번째"));
                break;
            case "*":
                setCalcResult(parseInt("배열의 첫번째") * parseInt("배열의 두번째"));
                break;
            case "/":
                setCalcResult(parseInt("배열의 첫번째") / parseInt("배열의 두번째"));
                break;
            default: setCalcResult("Calc Result");
        }
    }


    return (
        <div>
            <h1>{number}</h1>
            <button type="button" value="1" onClick={clickedNum}>1</button>
            <button type="button" value="2" onClick={clickedNum}>2</button>
            <button type="button" value="3" onClick={clickedNum}>3</button>
            <button type="button" value="4" onClick={clickedNum}>4</button>
            <button type="button" value="5" onClick={clickedNum}>5</button>
            <button type="button" value="6" onClick={clickedNum}>6</button>
            <button type="button" value="7" onClick={clickedNum}>7</button>
            <button type="button" value="8" onClick={clickedNum}>8</button>
            <button type="button" value="9" onClick={clickedNum}>9</button>
            <button type="button" onClick={arithmetic} value="+">+</button>
            <button type="button" onClick={arithmetic} value="-">-</button>
            <button type="button" onClick={arithmetic} value="*">*</button>
            <button type="button" onClick={arithmetic} value="/">/</button>
            <button type="button" onClick={arithmetic} value="=">=</button>
        </div>
    )
}





