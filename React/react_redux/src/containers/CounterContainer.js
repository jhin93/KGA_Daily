import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
    // useSelector는 redux store에 state 조회하는 Hook
    // state의 값은 store.getState() 함수를 호출했을 때, 나타나는 결과물과 동일
    const { number, diff } = useSelector((state) => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    //useDispatch redux store의 dispatch를 함수에서 사용할 수 있게 해주는 Hook
    const dispatch = useDispatch();

    // each action dispatch
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter
            // 상태와
            number={number}
            diff={diff}
            // action을 dispatch하는 function들을 props 넣어준다
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />    
    )
    
}

export default CounterContainer;


