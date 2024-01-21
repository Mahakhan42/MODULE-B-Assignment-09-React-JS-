import React from 'react'
import { FaFacebookF , FaTwitter ,FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return <>
    <br />
    <div className='container text-center text-white'style={{backgroundColor:' rgb(232, 141, 248)',padding:'50px'}}>
      <h4><b>Assignment-09</b></h4><br />
      <p>Copyright©2024Assignment.com</p><br />
      <p><b>Home     &nbsp;&nbsp;|      SignUp     |&nbsp;&nbsp;      Login</b></p><br />
     <div className="text-center">____________________________________________________
     &nbsp;&nbsp; <FaFacebookF size={24}   style={{background:'#fff',color:'purple',padding:'5px',borderRadius:'20px'}}/>
     &nbsp;&nbsp;<FaTwitter size={24}   style={{background:'white',color:'purple',padding:'5px',borderRadius:'20px'}}/>
     &nbsp;&nbsp;<FaInstagram size={24}  style={{background:'white',color:'purple',padding:'5px',borderRadius:'20px'}}/>
     &nbsp;&nbsp;<FaLinkedinIn size={24}  style={{background:'white',color:'purple',padding:'5px',borderRadius:'20px'}}/> &nbsp;
     ____________________________________________________  </div>
    </div>
    </>
}

export {Footer} 
