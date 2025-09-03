import React from 'react'
import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  //anything inside bracket is the initializer
  //setCount is a function that is used to manipulate the variable count

  function increment(){
    setCount(count+1)
  }
  function decrement(){
    count > 0 ? setCount(count-1) : count
  }
  function reset(){
    setCount(0)
  }

  return (
    <>
        <h1>Counter</h1>
        <p>Current Count: <span id='count'>{count}</span></p>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
        <button style={{marginTop: '10px'}} onClick={reset}>Reset</button>
    </>
  )
}

export default Counter