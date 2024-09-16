import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'
import { useSelector } from 'react-redux'
import store from '../Redux/store'

function Feed() {

  const {tweets} = useSelector((store) => store.tweet)

  return (
    <div className='w-[60%]'>
      <div className="">
        <CreatePost />
        {
          tweets?.map((tweet) => <Tweet key={tweet?._id} tweet={tweet}/>)
        }
        
      </div>
    </div>
  )
}

export default Feed