/* eslint-disable no-unused-vars */
import React from 'react'
import {User} from './user.js'
import {useState} from 'react'

const user = User

const UserCard = () => {
  const [emailVisiblity, setEmailVisibility] = useState(true)

  return (
    <div style={{border: '1px solid black', margin: '10px', padding: '10px', borderRadius: '10px'}}>
      <img />
      <h2>{user.name.first}</h2>
      {emailVisiblity && <h3>Email: {user.email}</h3>}
      <span>
        <button onClick={()=>setEmailVisibility(!emailVisiblity)}>Show/hide Email</button>
      </span>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
      <p>Gender: {user.gender}</p>
      <p>Tags: {user.age <18 ? 'Minor' : 'Adult'}</p>
    </div>
  )
}

export default UserCard