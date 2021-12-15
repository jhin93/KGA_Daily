import React from "react"

class Gundam extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>This Gundam is {this.props.model}!!!</h1>
    }
}


export default Gundam;