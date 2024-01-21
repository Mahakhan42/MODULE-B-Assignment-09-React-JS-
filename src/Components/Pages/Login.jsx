import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
     <br /><br /><br /><br /><br />
        <div className="container text-center" style={{backgroundColor:'purple',boxShadow:' rgba(0, 0, 0, 0.4) 0px 22px 70px 4px',border:'10px solid white',maxWidth:'500px'}}>
           <br /><br /><h2 className='text-white'><b>LOGIN</b></h2><br />
           <input type="text" placeholder='Username'/><br /><br />
           <input type="text" placeholder='Password'/><br /><br /><br />
           <p className='text-white'><b>Forget Password?</b></p><br />
           <button type='submit' className='text-white'><b>Login</b></button>
           <br /><br />
           <p className='text-white'>Don't have an account? <Link to="/signup" className='text-white'>SignUp</Link></p>
           <br /><br /><br /> 
        </div>
        <br /><br /><br /><br /><br />
    </div>
  )
}

export {Login} 
