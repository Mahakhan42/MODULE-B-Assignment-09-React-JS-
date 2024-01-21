import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
<div className='container'>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand text-white" to='/'><b>Assignment-09</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link text-white" to='/'>Home</Link>
          <Link className="nav-link text-white" to='/signup'>Signup</Link>
          <Link className="nav-link text-white" to='/login'>Login</Link>
        </div>
      </div>
    </div>
  </nav>
</div>
  )
}

export {Navbar} 
