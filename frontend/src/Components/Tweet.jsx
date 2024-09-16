import axios from 'axios';
import React from 'react'
import Avatar from 'react-avatar'
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { TWEET_API_END_POINT } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { getRefresh } from '../Redux/tweetSlice';




function Tweet({ tweet }) {

    const { user } = useSelector(store => store.user)
    const dispatch = useDispatch()

    const likeOrDislikeHandler = async (id) => {
        try {
            const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}`, { id: user?._id }, {
                withCredentials: true
            })
            dispatch(getRefresh())
              toast.success(res.data.message)
            
        } catch (error) {
            toast.success(error.response.data.message)
            console.log(error);

        }
    }

    return (
        <div className='py-4 border-b border-gray-200'>
            <div>
                <div className='flex w-full'>
                    <Avatar src='tiger.jpg' size='50' round={true} />

                    <div className='ml-2 w-full'>
                        <div className='flex items-center '>
                            <h1 className='font-bold'>{tweet?.userDetails[0]?.name}</h1>
                            <p className='text-sm ml-2 text-gray-500'>{`@${tweet?.userDetails[0]?.username}`} . 1m</p>
                        </div>

                        <div>
                            <p>{tweet?.description}</p>
                        </div>

                        <div className='flex justify-between w-full mt-2'>
                            <div className='flex items-center hover:bg-gray-200 rounded-full p-1 cursor-pointer'>
                                <FaComment size={20} />
                                <p className='ml-1'>0</p>
                            </div>
                            <div onClick={() => likeOrDislikeHandler(tweet?._id)} className='flex items-center  hover:bg-gray-200 rounded-full p-1 cursor-pointer'>
                                <FaHeart size={20} />
                                <p className='ml-1'>{tweet?.like?.length}</p>
                            </div>
                            <div className='flex items-center  hover:bg-gray-200 rounded-full p-1 cursor-pointer'>
                                <FaBookmark size={20} />
                                <p className='ml-1'>0</p>
                            </div>
                            <div className='flex items-center  hover:bg-red-200 rounded-full p-1 cursor-pointer'>
                                <MdDelete size={26} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet