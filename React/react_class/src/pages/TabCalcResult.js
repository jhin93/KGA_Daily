import React, { useState } from "react";

function TabCalData() {
    const [buttonClicked, setButtonClicked] = useState(); // 클릭한 버튼의 종류를 감지
    const [inputs, setInput] = useState({}); // 인풋값을 받는 state
    const [calcResult, setCalcResult] = useState("Calc Result") // 인풋값을 계산한 state

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value })) //키는 []. input의 변화를 감지해 데이터를 받음. inputs가 객체이고 객체.키 = 밸류 니까 결국 input의 밸류를 불러온다.
        console.log("들어온 input : ", inputs)
    }
    const handleClick = (e) => {
        // e.preventDefault();
        setButtonClicked(e.target.value)
        // console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs, e.target)
        switch (buttonClicked) { // 여기서 클릭한 버튼의 종류를 감지해 switch문으로 case마다 다른 계산방식 적용해서 submit한다.
            case "Add":
                setCalcResult(parseInt(inputs.num1) + parseInt(inputs.num2));
                break;
            case "Sub":
                setCalcResult(parseInt(inputs.num1) - parseInt(inputs.num2));
                break;
            case "Mult":
                setCalcResult(parseInt(inputs.num1) * parseInt(inputs.num2));
                break;
            case "Divi":
                setCalcResult(parseInt(inputs.num1) / parseInt(inputs.num2));
                break;
            default: setCalcResult("Calc Result");
        }
    }

    return (
        <>
            <h1>{calcResult}</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Calc Number : &nbsp;
                    <input
                        type="text"
                        name="num1"
                        value={inputs.num1 || "0"} //값이 없으면 string 값
                        onChange={handleChange}>
                    </input>
                </label>
                <label>
                    <input
                        type="text"
                        name="num2"
                        value={inputs.num2 || "0"}
                        onChange={handleChange}>
                    </input>&nbsp;
                </label>
                <input type="submit" onClick={handleClick} value="Add" />&nbsp;
                <input type="submit" onClick={handleClick} value="Sub" />&nbsp;
                <input type="submit" onClick={handleClick} value="Mult" />&nbsp;
                <input type="submit" onClick={handleClick} value="Divi" />
            </form>
        </>
    );
}
function TabTextaddition() {
    const [buttonClicked, setButtonClicked] = useState();
    const [inputs, setInput] = useState({});
    const [calcResult, setCalcResult] = useState("Text Add Result")

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(values => ({ ...values, [name]: value })) //키는 []
    }
    const handleClick = (e) => {
        setButtonClicked(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setCalcResult(inputs.str1 + inputs.str2);
        // console.log(inputs, e.target)
    }

    return (
        <>
            <h1>{calcResult}</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Your String : &nbsp;
                    <input
                        type="text"
                        name="str1"
                        value={inputs.str1 || "0"} //값이 없으면 string 값
                        onChange={handleChange}>
                    </input>
                </label>
                <label>
                    <input
                        type="text"
                        name="str2"
                        value={inputs.str2 || "0"}
                        onChange={handleChange}>
                    </input>&nbsp;
                </label>
                <input type="submit" onClick={handleClick} value="AddString" />&nbsp;
            </form>
        </>
    );
}


export {TabCalData, TabTextaddition};