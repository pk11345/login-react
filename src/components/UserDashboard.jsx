import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserDashboard = (props) => {
// console.log(props)

  return (
    <>
   <div className="home text-blue-400 text-4xl mt-4 text-center"><Link to="/">Home</Link></div>
    <div className="card  w-full  flex justify-center items-center mt-[200px]">
        <div className="cardBox bg-red-500 w-[50%] h-[200px] flex justify-center items-center ">
            <h1 className='text-white text-4xl font-semibold'>Hello👋</h1>
        </div>
    </div>
    </>
  )
}

export default UserDashboard