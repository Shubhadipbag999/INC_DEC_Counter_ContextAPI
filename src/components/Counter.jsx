import React, { useContext } from 'react';
import { CounterContext } from '../context/Counter'


const Counter = () => {
    const countercontext = useContext(CounterContext)

    return (
        <div>
            <button onClick={() => countercontext.setCounter(countercontext.counter + 1)}>Increment</button>
            <button onClick={() => countercontext.setCounter(countercontext.counter - 1)}>Decrement</button>
        </div>
    )
}

export default Counter