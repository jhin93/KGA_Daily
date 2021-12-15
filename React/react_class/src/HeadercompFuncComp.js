import { useState } from "react";

const HeadercompFuncComp = (props) => {
    let [oldest, updated] = useState("This is My Page of Header");
    setTimeout(() => {
        updated("componentDidMount title!!!")   
        document.getElementById("div1").innerHTML = "Before update title is " + oldest + ", Before update newTitle is " + props.newTitle;
        document.getElementById("div2").innerHTML = "The latest title is " + {updated}
    }, 3000);

    return (
        <div>
            <h1>{oldest}</h1>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
    )
}


export default HeadercompFuncComp;