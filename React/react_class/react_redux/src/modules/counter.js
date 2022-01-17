/* Action type definition */
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* Make create action function */
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE })

/* Initialize state */
const initialState = {
    number: 0,
    diff: 1
};

// define reducer : export default
export default function counter(state=initialState, action) {
    switch(action.type)
    {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number: state.number = state.number + state.diff // initialState에서 state.diff에 1이 들어있음
            }
        case DECREASE:
            return {
                ...state,
                number: state.number = state.number - state.diff
            }
        default:
            return state;
    }
}