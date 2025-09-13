import React from 'react'
import { useLoaderData  } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-800 text-white p-4 text-4xl'>Github Followers: {data.follower} 
    <img src={data.avatar_url} alt='Git Picture' width={300}/></div>
  )
}

export default Github