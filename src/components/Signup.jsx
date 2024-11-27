import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const success=()=>{
        toast.success("Signup Successfull",{
            position:"top-center"
    })
        
    }
    const fail =()=>{
        toast.warn("user exist",{
            position:'top-center'
        })
    }
 
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const SubmitHandler =(e)=>{
        e.preventDefault()
        // handleLogin(email,password)
        // console.log(email)
        setEmail(" ")
        // console.log(password)
        setPassword("")
        setName(" ")
        if(localStorage.getItem(name)){
            // alert("username exist")
            {fail()}
        }
        else if(localStorage.getItem(email)){
            // alert("email used")
            {fail()}
        }
        else(setTimeout(()=>{
            navigate("/login")
        },3000))
       
        localStorage.setItem(name, JSON.stringify(name))
        localStorage.setItem(email,JSON.stringify(email))
        localStorage.setItem(password,JSON.stringify(password))
        console.log(localStorage.getItem(email))

      
        {success()}
        
    }

  return (
    <>
    <div className="home text-blue-400 text-4xl mt-4 text-center"><Link to="/">Home</Link></div>
     <div className='text-white flex justify-center '>
        <div className="loginForm bg-blue-500 w-[50%] mt-[150px]  p-5 flex  justify-center items-center">
            <form onSubmit={SubmitHandler} 
             className='flex flex-col gap-7 w-[100%] items-center'>

                <div className="name w-[70%]">
                    <h1 className='text-xl font-medium'>Name</h1>
                    <input onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    value={name}
                      className='p-2 w-[100%] text-black'
                     type="name"placeholder='Enter Your Name' />
                </div>


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
                 className='bg-black text-red-500 w-[50%] p-2 text-xl font-semibold hover:bg-red-300'>Signup</button>
                 
            </form>
        </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Signup