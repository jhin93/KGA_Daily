import React from "react";

class MissGoal extends React.Component {
    constructor () {
        super()
    }
    render() {
        return <h1>MISSED GOAL RONALDO</h1>;
    }
}

class MadeGoal extends React.Component {
    constructor () {
        super()
    }
    render() {
        return <h1>The tremendous Goal Son!!!</h1>;
    }
}

class GoalClassComp extends React.Component {
    constructor(props) {
        super(props)
        this.isGoal = props.isGoal
    }

    

    render() {
        let score
        if(this.isGoal){
            score = <MadeGoal />
        } else {
            score = <MissGoal />
        }
        return (score)
    }

}

export default GoalClassComp;