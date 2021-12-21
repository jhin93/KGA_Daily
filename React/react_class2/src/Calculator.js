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

    // 연산버튼 감지해서 담기.
    const arithmetic = (e) => {
        e.preventDefault();
        setButtonClicked(e.target.value)
        //입력값 배열에 담기
        writedNum.push(number)
        console.log("배열에 값이 담겼는가 : ", writedNum)
        // number 초기화
        setNumber(number => 0);
    }

    // 합쳐진 number를 배열에 담고, number 초기화

    // 계산함수
    const Calculation = (e) => {
        
    }








    return (
        <div>
            <h1>{number}</h1>
            <form onSubmit={Calculation}>
                <button type="button" value="1" onClick={clickedNum}>1</button>
                <button type="button" value="2" onClick={clickedNum}>2</button>
                <button type="button" value="3" onClick={clickedNum}>3</button>
                <button type="button" value="4" onClick={clickedNum}>4</button>
                <button type="button" value="5" onClick={clickedNum}>5</button>
                <button type="button" value="6" onClick={clickedNum}>6</button>
                <button type="button" value="7" onClick={clickedNum}>7</button>
                <button type="button" value="8" onClick={clickedNum}>8</button>
                <button type="button" value="9" onClick={clickedNum}>9</button>
                <input type="submit" onClick={arithmetic} value="+" />
                <input type="submit" onClick={arithmetic} value="-" />
                <input type="submit" onClick={arithmetic} value="*" />
                <input type="submit" onClick={arithmetic} value="/" />
            </form>
            
        </div>
    )
}





