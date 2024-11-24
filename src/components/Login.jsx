import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const SubmitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        // console.log(email)
        setEmail(" ")
        // console.log(password)
        setPassword("")
    }

  return (
    <div className='text-white flex justify-center mt-[200px]'>
        <div className="loginForm bg-red-500 w-[50%]  p-5 flex  justify-center items-center">
            <form onSubmit={SubmitHandler} 
             className='flex flex-col gap-7'>
               <div className="email"> <h1 className='text-2xl font-medium'>Enter Your Email Id</h1>
                <input onChange={(e)=>{
                    // console.log(e.target.value)
                    setEmail(e.target.value)
                }}
                value={email}
                 className='p-2 w-[300px] text-black' 
                 type="email" 
                 placeholder='Enter Your Email' required /></div>
                <div className="password"> <h1 className='text-2xl font-medium'>Enter Your Password</h1>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value={password}
                className='p-2 w-[300px] text-black' 
                type="password" 
                placeholder='Enter Your Password' required /></div>
                <button 
                 className='bg-black text-red-500 p-2 text-xl font-semibold hover:bg-red-300'>Login</button>

            </form>
        </div>
    </div>
  )
}

export default Login