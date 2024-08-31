import React from 'react';
import { IoMdHome } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidLogOut } from "react-icons/bi";




function LeftSideBar() {
  return (
    <div className='w-[20%]'>

      <div className='flex items-center cursor-pointer ml-3 mt-2'>
        <div className="">
          <img className='rounded-full' src="/twitter-logo.avif" alt="twitter-logo" width={30} height={30} />
        </div>
        <h1 className='font-bold text-lg ml-2'>twitter</h1>
      </div>

      <div className='mt-4 mr-10'>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-full px-4 py-2 my-2 '>
          <div className=''>
            <IoMdHome size={25} />
          </div>
          <h1 className='font-bold text-lg ml-2'>Home</h1>
        </div>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-full px-4 py-2 my-2 '>
          <div className=''>
            <MdExplore size={25} />
          </div>
          <h1 className='font-bold text-lg ml-2'>Explore</h1>
        </div>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-full px-4 py-2 my-2 '>
          <div className=''>
            <IoNotifications size={25} />
          </div>
          <h1 className='font-bold text-lg ml-2'>Notification</h1>
        </div>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-full px-4 py-2 my-2 '>
          <div className=''>
            <FaBookmark size={25} />
          </div>
          <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
        </div>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-full px-4 py-2 my-2 '>
          <div className=''>
            <FaUserAlt size={25} />
          </div>
          <h1 className='font-bold text-lg ml-2'>Profile</h1>
        </div>
        <div className='flex items-center hover:bg-gray-300 cursor-pointer rounded-full px-4 py-2 my-2 '>
          <div className=''>
            <BiSolidLogOut size={25} />
          </div>
          <h1 className='font-bold text-lg ml-2'>Logout</h1>
        </div>
      </div>
          
          <div className='mt-5 mr-10'>
              <button className='bg-black rounded-full m-auto w-full text-white px-4 py-2'>POST</button>
          </div>
    </div>
  )
}

export default LeftSideBar