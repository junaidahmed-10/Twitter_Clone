import React, { useState } from 'react'

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

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
          <form action="" className='flex flex-col w-[55%]'>
            {
              !isLoggedIn && (
                <>
                <input type="text" placeholder='Name' className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                <input type="text" placeholder='UserName' className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
                </>
              )
            }
            <input type="text" placeholder='Email' className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            <input type="text" placeholder='Password' className='className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold' />
            <button className='bg-black border-none py-2 my-4 rounded-full text-lg text-white'>{isLoggedIn ? "Login" : "Create Account"}</button>
            <h1>{ isLoggedIn ? "Don't have an Account?" : "Already have an Account?"} <span onClick={loginSignupHandler} className='cursor-pointer font-bold text-blue-600'>{isLoggedIn? "Signup" : "Login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login