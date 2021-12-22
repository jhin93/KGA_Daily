import React, {useState} from "react";
import CheckBox from "./CheckBox";

function Reactcss () {
    const [check, setCheck] = useState(false)
    const onChange = (e) => {
        // CheckBox.js에서 전달받은 checked 속성의 boolean 타입을 check에 세터함수로 넣어줌. 그 결과가 렌더링되는 것.
        setCheck(e.target.checked) // 체크 이벤트를 받는 것.
    };

    return (
        <div>
            <CheckBox onChange={onChange} checked={check}>
                Agreement contract.
            </CheckBox>
            <p>
                <b>check : </b>
                {check ? "true" : "false"}
            </p>
        </div>
    )
}

export default Reactcss