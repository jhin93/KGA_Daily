import React from "react"

class Car extends React.Component {
    constructor() {
        super(); // React.Component의 객체 생성자를 상속받음.
        this.state = {color : "red"} // function은 인자를 받지만, class는 super로 상속을 받아 state 같은 속성을 정의한다.
    }

    render () {
        // return <h1>This is {this.state.color} car!!!</h1>
        return <h1>This is {this.props.color} car!!!</h1> // index.js에서 color="blue" 라고 props를 주는 방법도 있다.
    }
}

export default Car;