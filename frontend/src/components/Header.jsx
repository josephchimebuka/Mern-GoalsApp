import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserAlt,FaSignInAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
    <div className='logo'>
    <Link to='/'>
        Goalsetter
    </Link>
    </div>
    <ul>
      <li>
      <Link to='/login'>
      <FaSignInAlt/>    Login
        </Link>
      </li>
        <li>
        <Link to='/'>
          <FaUserAlt/>  Register
        </Link>
        </li>
    </ul>
    </header>
  )
}

export default Header