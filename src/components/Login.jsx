import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const success=()=>{
        toast.success("login successfull",{
            position:'top-center'
        })
    }
    const fail =()=>{
        toast.warn("user does not exist", {
            position:'top-center'
        })
    }
   
    const SubmitHandler =(e)=>{
        e.preventDefault()
        // handleLogin(email,password)
        // console.log(email)
        setEmail(" ")
        // console.log(password)
        setPassword("")
        
        if(!localStorage.getItem(email)){
            // alert("user not exist")
            {fail()}
           
        }
         if(email===JSON.parse(localStorage.getItem(email))  
            && password ===JSON.parse(localStorage.getItem(password))){
                {success()}
        setTimeout(()=>{
            navigate("/UserDashboard")
        },3000)
    
        }
     
        
    }

  return (
    <>
    <div className="home text-blue-400 text-4xl mt-4 text-center"><Link to="/">Home</Link></div>
    <div className='text-white flex justify-center '>
        <div className="loginForm bg-red-500 w-[80%] mt-[200px]  p-5 flex  justify-center items-center">
            <form onSubmit={SubmitHandler} 
             className='flex flex-col gap-7 w-[100%] items-center'>
               <div className="email w-[70%] "> <h1 className='text-xl font-medium'>Enter Your Email Id</h1>
                <input onChange={(e)=>{
                    // console.log(e.target.value)
                    setEmail(e.target.value)
                }}
                value={email}
                 className='p-2 w-[100%] text-black' 
                 type="email" 
                 placeholder='Enter Your Email' required /></div>
                <div className="password w-[70%]"> <h1 className='text-xl  font-medium'>Enter Your Password</h1>
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value={password}
                className='p-2 w-[100%] text-black' 
                type="password" 
                placeholder='Enter Your Password' required /></div>
                <button 
                 className='bg-black text-red-500 w-[50%] p-2 text-xl font-semibold hover:bg-red-300'>Login</button>
                 
            </form>
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login