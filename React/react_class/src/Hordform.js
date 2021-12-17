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
            <div>{clan}</div>
        </form>
    )
}



export default Hordform
