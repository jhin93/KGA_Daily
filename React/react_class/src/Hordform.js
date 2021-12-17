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
                    // dom의 이벤트를 리액트가 후킹하는 것
                    onChange={(e) => setClan(e.target.value)}
                />
            </label>
            <input type="submit"/>
            <div>{clan}</div>
        </form>
    )
}



export default Hordform
