import React from 'react'
import Avatar from 'react-avatar';
import { FiSearch } from "react-icons/fi";


function RightSideBar() {
  return (
    <div className='w-[20%] ml-5'>
      <div className='flex items-center p-2 bg-gray-300 rounded-full outline-none mt-2'>
        <FiSearch size={20} />
        <input type="text" className="bg-transparent ml-2 outline-none text-black" placeholder='Search' />
      </div>

      <div className='bg-gray-100 mt-10 rounded-2xl'>
        <h1 className='font-bold pt-2 pl-3 '>Who to follow</h1>
        <div className='flex mt-2 ml-2 cursor-pointer justify-center'>
          <div>
            <Avatar src="pic1.jfif" size='50' round={true}/>
          </div>
          <div className='ml-2'>
            <h1 className='font-bold'>lion</h1>
            <p className='text-sm'>lion_tweets</p>
          </div>
          <button className='text-white py-1 px-4 m-3 cursor-pointer bg-black rounded-full'>Profile</button>
        </div>
        <div className='flex mt-2 ml-2 cursor-pointer justify-center'>
          <div>
            <Avatar src="pic2.jpg" size='50' round={true}/>
          </div>
          <div className='ml-2'>
            <h1 className='font-bold'>lion</h1>
            <p className='text-sm'>lion_tweets</p>
          </div>
          <button className='text-white py-1 px-4 m-3 cursor-pointer bg-black rounded-full'>Profile</button>
        </div>
        <div className='flex mt-2 ml-2 cursor-pointer justify-center'>
          <div>
            <Avatar src="pic3.jfif" size='50' round={true}/>
          </div>
          <div className='ml-2'>
            <h1 className='font-bold'>lion</h1>
            <p className='text-sm'>lion_tweets</p>
          </div>
          <button className='text-white py-1 px-4 m-3 cursor-pointer bg-black rounded-full'>Profile</button>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar