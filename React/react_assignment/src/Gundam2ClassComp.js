import React from "react";

// function Gundam2(props){
//     return <h1>This is {props.model} Gundam</h1>
// }

// 클래스 컴포넌트
class Gundam2ClassComp extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <h1>This is {this.props.model} Gundam</h1>
    }
}

export default Gundam2ClassComp;