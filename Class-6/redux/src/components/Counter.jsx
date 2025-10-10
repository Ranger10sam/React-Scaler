import React from 'react'
import { useState } from 'react'
import './Counter.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Counter = () => {
  //const [count, setCount] = useState(0)
  //anything inside bracket is the initializer
  //setCount is a function that is used to manipulate the variable count

  const {count} = useSelector(state=>state.counter)
  const dispatch = useDispatch()


  const increment = ()=>{
    //setCount(count+1)
    dispatch()
  }
  const decrement = ()=>{
    //count > 0 ? setCount(count-1) : count
    dispatch()
  }
  const reset=()=>{
    //setCount(0)
    dispatch()
  }

  useEffect(()=>{
    document.title = `Clicked ${count} times`
  })

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