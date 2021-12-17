import { useState } from "react";


function Hordform() {
    const [clan, setClan] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The Clan name you entered was ${clan}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Your Clans:
                <input 
                    type="text" 
                    value={clan}
                    onChange={(e) => setClan(e.target.value)}
                />
            </label>
            <input type="submit"/>
            {/* 왜 setClan이 아닐까. 민수 말로는 useState가 두번째 인자로(setClan) 기존값을 바꾸는 거라고 한다. */}
            <div>{clan}</div>
        </form>
    )
}



export default Hordform
