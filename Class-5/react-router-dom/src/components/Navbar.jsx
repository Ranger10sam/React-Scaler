import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div>My App</div>
        <div>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar