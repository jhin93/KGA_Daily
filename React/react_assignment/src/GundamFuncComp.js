
import React from "react";
import { useState } from "react"

const GundamFuncComp = (props) => {
    const [before, after] = useState({ 
        camp: "Earth",
        model: "x10A",
        engine: "Atomic",
        year: "Cosmic 70",
        pilot: "Yamato"
    })
    let changeModel = () => {
        after({
            camp: "Earth",
            model : "X109 Justice",
            engine: "Atomic",
            year: "Cosmic 70",
            pilot: "Yamato"
        })
    }

    return (
        <div>
            <h1>The model is {before.model}</h1>
            <h2>The camp is {before.camp}</h2>
            <h2>The engine is {before.engine}</h2>
            <h2>The Pilot is {before.pilot}</h2>
            <h2>{before.year} Space Centry</h2>
            <h2>The Pilot is {props.cargo}</h2>
            <button type="button" onClick={changeModel}>Change Model</button>
        </div>
    )
}

export default GundamFuncComp;