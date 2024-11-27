import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar text-blue-400 text-4xl flex justify-center gap-5 mt-5">
    <Link to ="/">Home</Link>
       <Link to ="/signup">Signup</Link>
       <Link to ="/Login">Login</Link>
    </div>
    <h1 className='text-white text-center mt-20 text-4xl font-extrabold'>Hello Everyone!
         <br /> New user? Click SignUP  <br />Already an user? Click LogIN</h1>
    </>
  )
}

export default Navbar