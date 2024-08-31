import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'

function Feed() {
  return (
    <div className='w-[60%]'>
      <div className="">
        <CreatePost />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  )
}

export default Feed