import React, { useState, useRef } from "react";



export default function InputExam () {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: ""
    });

    const nameInput = useRef();
    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출. 비구조화를 통해 객체.key = value를 일일히 써가면서 value를 불러오지 않고, key와 value 각각 사용가능.

    const changeHandler = e => {
        const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출. name과 value 순서를 바꿔도 작동함.

        setInputs({
            ...inputs, // 기존의 input 객체를 복사 한 뒤 - 이 문장은 없어도 작동은 함. 아마 복사해서 쓴다는 것에 원본(이전 state)를 변경하지 않는 것에 의미가 있을 듯.
            [name]: value // name key를 가진 값에 value를 할당. name에 각 인풋의 name이 할당되고, value에는 각 인풋의 value가 할당된다. 
            // 그러니까 'inputs의 name'에는 '각 인풋의 name', 'inputs의 nickname'에는 '각 인풋의 value'가 할당된다.
        });
    }

    const resetHandler = () => {
        setInputs({
            name: "",
            nickname: ""
        })
        nameInput.current.focus(); // 리셋 후 다시 name 인풋에 커서 깜빡이도록 focus 준 것.
    }

    return(
        <div>
            <input 
                name="name"
                onChange={changeHandler}
                value={name} // 여기서 inputs의 name을 바로 변수처럼 사용할 수 있는 것이 위에서 비구조화를 했기 떄문
                ref={nameInput} // focus를 다시 주기 위해 이 input에 ref 줌
            />
            <input 
                name="nickname"
                onChange={changeHandler}
                value={nickname} // 이 인풋에서 받은 밸류값을 nickname에 넣어주고, 그게 setInput으로 인해 inputs 객체의 nickname이 됨. 그리고 그 값이 비구조화를 통해 화면에 출력됨(Value: 의 다음줄).
            />
            <button onClick={resetHandler}>Reset</button>
            <div>
                <b>Value: </b>
                {name} ({nickname})
            </div>
        </div>
    );
};





