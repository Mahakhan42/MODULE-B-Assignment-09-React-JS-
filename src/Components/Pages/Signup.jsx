import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
   <br /><br /><br /><br /><br />
        <div className="container text-center text-white" style={{backgroundColor:'purple',boxShadow:' rgba(0, 0, 0, 0.4) 0px 22px 70px 4px',border:'10px solid white',maxWidth:'500px'}}>
           <br /><br /><h2 className='text-white'><b>SIGNUP</b></h2><br />
           <input type="text" placeholder='Username'/><br /><br />
           <input type="text" placeholder='Email'/><br /><br />
           <input type="text" placeholder='Password'/><br /><br />
           <input type="text" placeholder='Confirm Password'/><br /><br />
           <button type='submit' className='text-white'><b>Sign Up</b></button>
           <br /><br /> OR <br /><br /> 
           <button type='submit' className='text-white btn'><b>Sign In With Google</b></button>
           <br /><br />
           <p className='text-white'>Already have an account? <Link to="/login" className='text-white'>Login</Link></p>
           <br /><br /><br /> 
        </div>
        <br /><br /><br /><br /><br />
    </div>
  )
}

export {Signup} 
