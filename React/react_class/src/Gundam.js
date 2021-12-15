import React from "react"

// class Component {
//     constructor(props) {
//         // bla
//     }
// }

class Gundam extends React.Component { // React.Component는 위처럼 따로 class Component를 생성하여 상속받지 않고 리액트의 Component를 상속하게 해준다
    constructor(props) {
        super(props);

        this.state = { // 위처럼 props를 받지 않고도 사용가능
            camp: "Earth",
            model: "x10A",
            engine: "Atomic",
            year: "Cosmic 70",
            pilot: "Yamato"
        };
    }
    // getDerivedStateFromProps()
    changeModel = () => {
        this.setState({model: "X109 Justice"}) // setState 메소드는 state를 변경시켜준다.
    }

    render() {
        return (
        <div>
            <h1>The model is {this.state.model}</h1>
            <h2>The camp is {this.state.camp}</h2>
            <h2>The engine is {this.state.engine}</h2>
            <h2>The Pilot is {this.state.pilot}</h2>
            <h2>{this.state.year} Space Centry</h2>
            <h2>The Cargo is {this.props.cargo}</h2> {/* props를 받을 수도 있다 */}
            <button type="button" onClick={this.changeModel}>Change Model</button>
        </div>
        )
    }
}


export default Gundam;