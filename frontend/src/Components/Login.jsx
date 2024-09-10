import React, { useState } from 'react'
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/Constants.js';

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [name, setName] = useState("")
  const [username, setusername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const SubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(name, username, email, password);
    if (isLoggedIn) {
      //Login
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
          headers:{
            "Content-Type":"application/json",
          },
          withCredentials:true
        })
        console.log(res);

      } catch (error) {
        console.log("error: ", error);
      }
    } else {
      //signup
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password })
        console.log(res);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }

  const loginSignupHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div className='flex items-center justify-evenly '>
          <img src="twitter-logo.avif" alt="twitter-logo" className='rounded-2xl' />
        </div>
        <div className='my-3'>
          <div className='my-2'>
            <h1 className='font-bold text-6xl'>Happening Now...</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold'>{isLoggedIn ? "Login" : "Signup"}</h1>
          <form onSubmit={SubmitHandler} action="" className='flex flex-col w-[55%]'>
            {
              !isLoggedIn && (
                <>
                  <input type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                  <input type="text" value={username} placeholder='username' onChange={(e) => setusername(e.target.value)} className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                </>
              )
            }
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            <button className='bg-black border-none py-2 my-4 rounded-full text-lg text-white'>{isLoggedIn ? "Login" : "Create Account"}</button>
            <h1>{isLoggedIn ? "Don't have an Account?" : "Already have an Account?"} <span onClick={loginSignupHandler} className='cursor-pointer font-bold text-blue-600'>{isLoggedIn ? "Signup" : "Login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login