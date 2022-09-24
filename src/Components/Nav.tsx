import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="nav">
      <h1>
        <Link to='/' >Home</Link>
        <Link to='/Login' >Login</Link>
      </h1>
      <h1>

      </h1>
    </div>
  )
}

export default Nav