import { useState, useContext } from 'react';
import Counter from './components/Counter';
import { CounterContext } from './context/Counter'

import './App.css';


function App() {

  const countercontext = useContext(CounterContext)
  return (
    <>
      <div>
        <h1> Counter Value Is {countercontext.counter}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App
