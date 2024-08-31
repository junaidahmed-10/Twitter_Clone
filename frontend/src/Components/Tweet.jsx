import React from 'react'
import Avatar from 'react-avatar'
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";




function Tweet() {
  return (
    <div className='py-4 border-b border-gray-200'>
        <div>
            <div className='flex w-full'>
                <Avatar src='tiger.jpg' size='50' round={true}/>

                <div className='ml-2 w-full'>
                <div className='flex items-center '>
                    <h1 className='font-bold'>warrior</h1>
                    <p className='text-sm ml-2 text-gray-500'>@warrior_Codes . 1m</p>
                </div>
                
                <div>
                    <p>Hello Developers lets connect and grow together...!</p>
                </div>

                <div className='flex justify-between w-full mt-2'>
                    <div className='flex items-center hover:bg-gray-200 rounded-full p-1 cursor-pointer'>
                        <FaComment size={20}/>
                        <p className='ml-1'>0</p>
                    </div>
                    <div className='flex items-center  hover:bg-gray-200 rounded-full p-1 cursor-pointer'>
                        <FaHeart size={20}/>
                        <p className='ml-1'>0</p>
                    </div>
                    <div className='flex items-center  hover:bg-gray-200 rounded-full p-1 cursor-pointer'>
                        <FaBookmark size={20}/>
                        <p className='ml-1'>0</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet