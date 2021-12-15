
import React from "react";
import { useState } from "react"
import { render } from "react-dom";

const Container_func_comp = (props) => {
    const [showHeader, hideHeader] = useState(true)
    const deleteHeader = () => {
        alert("The component named Header is about to be unmounted.");
        hideHeader(false);
    };

    let myheader;
    if(showHeader) {
        myheader = <Child />
    }

    return(
        <div>
            {myheader}
            <button type="button" onClick={deleteHeader}>Delete Header</button>
        </div>
    )
}

const Child = () => {
    return(<h1>Hello World!!!</h1>);
}

export default Container_func_comp;