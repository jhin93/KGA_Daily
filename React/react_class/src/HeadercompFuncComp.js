import React, { useState, useEffect, useRef } from 'react';



function HeadercompFuncComp(props) {
    const mounted = useRef();
    let [headerTitle, setHeaderTitle] = useState('This is my header from useState') 
    

    const ChangeHeaderTitle = () => {
        useEffect(() => {
            setTimeout(() => {
                setHeaderTitle(headerTitle = "3초가 지낫습니다 \nchanged HeaderTitle title!!!!!")
            }, 3000)
            // return <h2>state : {headerTitle}</h2>
        }, [])
        return ''
    }

    useEffect(()=> {
        if(!mounted.current) {
            mounted.current = true;
        } else {
            document.getElementById('div1').innerHTML = "The headerTitle has been updated to " + headerTitle
        }
    })
    return (
        <div>
            <h1>HeaderComp</h1>
            <h2>props : {props.headerTitle}</h2>
            <h2>state : {headerTitle}</h2>
            <div id="div1"></div>
            <div id="div2"></div>
            {<ChangeHeaderTitle/>}
        </div>
    )
}

export default HeadercompFuncComp