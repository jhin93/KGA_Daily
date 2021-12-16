function MissGoal() {
    return <h1>MISSED GOAL RONALDO</h1>;
}

function MadeGoal(){
    return <h1>The tremendous Goal Son!!!</h1>
}

function Goal(props){
    const isGoal = props.isGoal;

    if(isGoal) {
        return <MadeGoal />;
    }

    return <MissGoal />;
}

// index.js에서 어떤 props를 받느냐에 따라 다른 결과가 도출.

export default Goal;