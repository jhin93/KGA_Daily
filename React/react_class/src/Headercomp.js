import React from "react";

class Headercomp extends React.Component {
    constructor(props) { // constructor는 쓰든 안쓰든 만들기
        super(props);

        this.state = {headertitle: "This is My Page of Header"};
    }

    render() {
        return (<h1>{this.state.headertitle}</h1>)
    }
}


export default Headercomp;