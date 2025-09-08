/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FarenheitDisplay from './components/FarenheitDisplay'
import CelsiusDisplay from './components/CelsiusDisplay'

function App() {
  const [count, setCount] = useState(0)
  const[temp, setTemp] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <input value={temp} type='number'
        onChange={e=>{
          setTemp(e.target.value)
        }}
      />
      <CelsiusDisplay temp={temp}/>
      <FarenheitDisplay temp={temp}/>
    </>
  )
}

export default App
