import React from 'react'
import {ArrowPathIcon} from'@heroicons/react/24/solid'
import TweetBox from './TweetBox'
import { Tweet } from '@/typing'
import TweetComponent from './TweetComponent'
interface Props{
  tweets:Tweet[]
}
function NewsFeed({tweets}:Props) {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
        <div className='flex justify-between p-5 pb-0'>
            <h1 className='text-xl font-bold'>Home</h1>
            <ArrowPathIcon className=' w-8 h-8 cursor-pointer 
            text-blue-400 transition-all duration-500 ease-out
            hover:rotate-180 active:scale-125'/>
        </div>
        <div>
            <TweetBox/>
        </div>
        <div>
          {tweets.map(tweet => (
            <TweetComponent key={tweet._id} tweet={tweet}/>
          ))}
        </div>
    </div>
  )
  
}

export default NewsFeed