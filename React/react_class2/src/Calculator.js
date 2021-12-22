import React, { useState } from 'react';
/* eslint no-eval: 0 */

export default function Calc() {
    const [inputs, setInputs] = useState(0);

    const addToInput = (e) => {
        const lastIn = inputs[inputs.length-1]
        console.log('target value: ' + e.target.value);
        console.log();
        if (inputs === 0) {
            setInputs(e.target.value);
        } else {
            if ((lastIn === '+' || lastIn === '-' || lastIn === '/' || lastIn === '*') && ((e.target.value === '+' || e.target.value === '-' || e.target.value === '/' || e.target.value === '*'))) {
                setInputs(inputs.slice(0, (inputs.length - 1)) + e.target.value)
            } else {
                setInputs(inputs + e.target.value);
            }
        }
    };

    const evalInputs = () => {
        setInputs(() => {
            return (
                eval(inputs) 
                // 문자열로 연산식을 구성하면 나중에 eval()로 계산할 수 있습니다.
                // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
            )
        })
    }

    const resetHandler = () => {
        setInputs(0)
    }

    return (
        <div className='wrapper'>
            
            <div className='calculator'>
                <h1>12-21 Assignment</h1> <p>Calculator</p>
                <input
                    className='result'
                    name="result"
                    value={inputs || '0'}
                />
                <br />
                <button onClick={addToInput} value={9}>9</button>
                <button onClick={addToInput} value={8}>8</button>
                <button onClick={addToInput} value={7}>7</button>
                <button onClick={addToInput} value={'*'}>*</button>
                <br />
                <button onClick={addToInput} value={6}>6</button>
                <button onClick={addToInput} value={5}>5</button>
                <button onClick={addToInput} value={4}>4</button>
                <button onClick={addToInput} value={'+'}>+</button>
                <br />
                <button onClick={addToInput} value={3}>3</button>
                <button onClick={addToInput} value={2}>2</button>
                <button onClick={addToInput} value={1}>1</button>
                <button onClick={addToInput} value={'-'}>-</button>
                <br />
                <button onClick={addToInput} value={0}>0</button>
                <button onClick={addToInput} value={'.'}>.</button>
                <button onClick={evalInputs} >=</button>
                <button onClick={addToInput} value={'/'}>/</button>
                <br />
                <button className="clear" onClick={resetHandler}>Reset</button>
            </div>
        </div>
    )
};
