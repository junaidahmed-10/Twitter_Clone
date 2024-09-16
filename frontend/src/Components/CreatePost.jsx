import React, { useState } from 'react'
import Avatar from 'react-avatar'
import { FaImage } from "react-icons/fa6";
import axios from "axios"
import { TWEET_API_END_POINT } from '../utils/Constants';
import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { getRefresh } from '../Redux/tweetSlice';


function CreatePost() {

  const [description, setDescription] = useState("")
  const { user } = useSelector(store => store.user)
  const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      const res = await axios.post(`${TWEET_API_END_POINT}/create`, { description, id: user?._id }, {
        withCredentials: true
      })
      dispatch(getRefresh())
      if (res.data.success) {
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.success(error.response.data.message)
      console.log(error);
    }
    setDescription("")
  }

  return (
    <div className='w-full border-b border-gray-300'>
      <div className='flex justify-center mt-1 border-b border-gray-200'>
        <div className='w-[50%] text-center mt-0  hover:bg-gray-300 border-r border-gray-200'>
          <h1 className='text-lg font-semibold cursor-pointer hover:bg-gray-300 m-3 py-2'>For You</h1>
        </div>
        <div className='w-[50%] text-center mt-0  hover:bg-gray-300 border-l  border-gray-200'>
          <h1 className='text-lg font-semibold cursor-pointer  hover:bg-gray-300 m-3 py-2'>Following</h1>
        </div>
      </div>

      <div className='flex'>
        <div className='mt-1 ml-1'>
          <Avatar src="lion.jpg" googleId="118096717852922241760" size="50" round={true} />
        </div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='w-full outline-none mr-2 p-2 pl-2 border-b border-gray-400' placeholder='What is Happening...!' />
      </div>

      <div className='flex items-center justify-between mt-2 mb-1'>
        <div className=''>
          <FaImage className='' />
        </div>
        <button onClick={submitHandler} className='bg-black rounded-full mr-2 text-white px-4 py-1'>Post</button>
      </div>


    </div>
  )
}

export default CreatePost