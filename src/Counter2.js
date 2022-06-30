import React, { useReducer, useContext } from 'react';
import { MyContext } from './component/MyContext'
function reducer(state, action) {
    switch(action.type) {
        case "INCREASE":
            return state +1;
            case "DECREASE":
            return state-1;
            default:
            return state;
    }
}

const Counter2 = (props) => {
    const contextText = useContext(MyContext);
    console.log(contextText);
    // let number = 0;
    const [ number, dispatch ] = useReducer(reducer, 0);   // 기본값은 0이다 
    function Increase() {
        dispatch({type: "INCREASE"});
    }
    function Decrease() {
        dispatch({type: "DECREASE"});
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={Decrease}>-1</button>
            <button onClick={Increase}>+1</button>
        </div>
    );
};

export default Counter2;