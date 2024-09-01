import React, { useEffect, useState } from 'react'
import { Tweet } from "@/typing"
import TimeAgo from 'react-timeago'
import { ChatBubbleOvalLeftIcon,
  HeartIcon,
  ArrowLongUpIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid'
import { fetchComments } from '@/utils/fetchComments'

interface Props{
  tweet:Tweet
}

function TweetComponent({ tweet}:Props) {
  const[comments,setComments] = useState<Comment[]>([])
  const refresh =async()=>{
    const comments:Comment[]=await fetchComments(tweet._id);
    setComments(comments);
  }
  useEffect(()=>{
    refresh();
      },[])
  console.log(comments)
  return (
    <div className='border-2  '>
      <div className='flex gap-3 p-6 '>
        <div>
          {/* image */}
          <img src={tweet.profileImg} alt="" className='h-10 w-10 rounded-full object-cover ' />
        </div>
        <div className='flex flex-1 flex-col gap-2 '>
          <div className='flex items-center gap-3'>
            {/* sonny time */}
            <p className="font-bold ">
              {tweet.username}
            </p>
            <p className='text-gray-800 hidden md:inline'>
              @{tweet.username.replace(/\s+/g,'').toLocaleLowerCase()}
            </p>
            <div className="">
              <TimeAgo
              className="text-sm  text-gray-500"
                date={tweet._created_at} />
              </div>
          </div>
          <div>
            {/* demo*/}
            <p className="mb-1 -mt-1">
              {tweet.text}
            </p>
          </div>
          <div>
            {/* pohoto */}
            <img src={tweet.image} alt="" className='max-h-80 object-cover rounded-xl'/>
          </div>
        </div>
      </div>
      <div className="flex justify-around py-3 md:-ml-8">
        <div className="flex gap-2 items-center ">
          <ChatBubbleOvalLeftIcon className=' h-5 w-5 cursor-pointer ' />
          <p className="bold">5</p>
        </div>
        <div className="flex">
          <HeartIcon className='h-5 w-5 cursor-pointer'/>
        </div>
        <div className="flex">
          <ArrowLongUpIcon className='h-5 w-5 cursor-pointer'/>
        </div>
        <div className="flex">
          <ArrowLeftOnRectangleIcon className='h-5 w-5 cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default TweetComponent