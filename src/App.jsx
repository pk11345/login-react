import React, { useState } from 'react'
import UserDashboard from './components/UserDashboard'
import Login from './components/Login'

const App = () => {
  const [user, setUser] = useState(null)
  const handleLogin = (email,password) =>{
    if(email == "pankaj20@rai.com" && password == "123456"){
      setUser("pankaj")
      alert("Successfully Login")
    }
    else{
      alert("Invalid Credentials")
    }
  }
  return (
    <>
    {user === "pankaj" ? <UserDashboard /> : <Login handleLogin={handleLogin} />}
 
  </>
  )
}

export default App