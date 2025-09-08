/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Form.css'

const Form = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[username, setUsername] = useState('');

    function handleSignUp(){
        console.log({
            name,
            username,
            email,
            password
        })
    }

  return (
    <div>Form
        <h2>Sign Up Form</h2>
        <div className='form'>
            <label>Name</label>
            <input type='text' value={name} 
                onChange={(e)=>{
                    setName(e.target.value)
                }}/>

            <label>Username</label>
            <input type='text' value={username}
                onChange={e=>{
                    setUsername(e.target.value)
                }}
            />

            <label>Email</label>
            <input type='email' value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}

            />

            <label>Password</label>
            <input type='password' value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
            />

            <button onClick={handleSignUp}>Submit</button>
        </div>
    </div>
  )
}

export default Form