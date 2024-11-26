import React, { useState } from 'react'
import UserDashboard from './components/UserDashboard'
import Login from './components/Login'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

const App = () => {
  // const [message, setMessage] = useState("")
  // const success =()=>{
  //   toast.success("Login Successful",{
  //     position:"top-center"
  //   })
  // }
  // const fail =()=>{
  //   toast.warn("Wrong Credentials",{
  //     position:'top-center'
  //   })
  // }

  // const [user, setUser] = useState(null)
  // const handleLogin = (email,password) =>{
  //   if(email == "pankaj20@rai.com" && password == "123456"){
  //     setUser("pankaj")
   
  //     {success()}
     
  //   }
  //   else{
     
  //     {fail()}
  //   }
  //   let setLocal = localStorage.setItem(email, JSON.stringify(email)) 
  //       let getLocal = localStorage.getItem(email)
  //       console.log(JSON.parse(getLocal))
  //       let bb = JSON.parse(getLocal)
  //       if(email===bb){
  //         setMessage(bb)
  //       }
  // }
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path ="/UserDashboard" element={<UserDashboard/>}/>
    </Routes>

    {/* {user === "pankaj" ? <UserDashboard  /> : <Login handleLogin={handleLogin} />} */}
    <ToastContainer/>
  </>
  )
}

export default App