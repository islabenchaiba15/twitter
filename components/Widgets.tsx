import React from 'react'
import {MagnifyingGlassIcon} from'@heroicons/react/24/solid'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='mt-2 px-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-4 bg-gray-100 rounded-full
             mt-2 p-3'>
            <MagnifyingGlassIcon className='h-5 text-gray-500 w-5'/>
            <input type="text" placeholder="search " className="bg-transparent
            outline-none " />
        </div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 1000}}
        />
    </div>
  )
}

export default Widgets