import React, {useState} from "react";

function Wow () {
    const [input, setInput] = useState({}); // input을 object로 쓸거라 빈 객체를 넣어줌

    const handleChange = (event) => {
        const name = event.target.name;
        // console.log("name은? ", name)
        // console.log("[name]은? ", [name])
        const value = event.target.value;
        // console.log("value는?", value)
 
        // 왜 name이 []에 들어가있는가. 리액트에서 jsx문법으로 key는 []로 넣는다
        // ...는 여러 인풋을 받을 때 사용한다.
        setInput(values => ({...values, [name]: value}))
        // console.log("input이 어떻게 변해는가 ", input)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // 리로드를 막기 위한 문장.
        console.log("결과", input);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter Your Name: 
                <input 
                    type="text"
                    name="username"
                    value={input.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input 
                    type="number"
                    name="age"
                    value={input.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    );
}


export default Wow;









