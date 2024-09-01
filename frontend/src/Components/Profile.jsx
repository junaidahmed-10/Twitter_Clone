import React from 'react'
import Avatar from 'react-avatar';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';


function Profile() {
    return (
        <div className='w-[60%]'>
            <div className='flex'>
                <Link to={"/"}>
                    <IoIosArrowRoundBack size={40} className='hover:bg-gray-300 cursor-pointer rounded-full my-2'/>
                </Link>
                <div>
                    <h1 className='font-bold ml-4 mt-2'>John Doe</h1>
                    <p className='ml-4 text-lg'>10 Posts</p>
                </div>
            </div>
                <div>
                    <img src="banner1.jfif" alt="banner" className='w-full rounded-md cursor-pointer'/>
                    <div className='absolute top-60 rounded-full border-2 border-white p-0 ml-4'>
                        <Avatar className='' src='lion2.avif' size='120' round={true}/>
                    </div>
                    <div className='text-right m-4'>
                        <button className='px-4 py-1 text-white bg-black rounded-full'>Edit Profile</button>
                    </div>
                    <div className='ml-0 mt-2'>
                        <h1 className='font-bold text-xl'>Name</h1>
                        <p>@user_name</p>
                    </div>
                    <div className='ml-0 mt-3'  >
                        <p className='text-lg'>this is a bio of this application</p>
                    </div>
                </div>
        </div>
    )
}

export default Profile