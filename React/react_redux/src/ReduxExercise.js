

// 하나의 앱엔 하나의 스토어
import {createStore} from "redux";

/* Redux에서 관리할 state를 정의 */
const initialState = {
    counter: 0,
    text: "",
    list: []
};

/* 
    Action Type define 
    Action type definition Uppercase.
*/


const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHAGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

/* Create Action function. 순수한 함수 */
function increase() {
    return {
        type: INCREASE // Action must need type.
    };
}

const decrease = () => ({
    type: DECREASE
})

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
})

const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
})

/* 
    Make Reducer Function
*/

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state;
    }
}

/* Make Store */
const store = createStore(reducer);

console.log(store.getState()); // Currently store state

// Store 안에 들어있는 state가 바뀔떄마다 호출되는 listener function
const listner = () => {
    const state = store.getState()
    console.log(state)
}


const unsubscribe = store.unsubscribe(listner); // 구독 해지

// Action dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText());
store.dispatch(addToList({id:1, text: "WOW"}));