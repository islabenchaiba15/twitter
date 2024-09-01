import React, { useState } from 'react'
import { MagnifyingGlassIcon,
FaceSmileIcon,
CalendarIcon,
MapIcon,
PhotoIcon

  }   from '@heroicons/react/24/solid'
function TweetBox() {
    const [input,setInput]=useState<string>('')
  return (
    <div className='flex space-x-2 p-4 border-x-2'>
        <img className='h-14 w-14 rounded-full mt-4 object-cover' 
        src="https://links.papareact.com/gll" alt="" />
        <div className='flex flex-1 items-center pl-2' >
            <form className='flex flex-col flex-1'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="h-24 w-full text-xl 
                outline-none"placeholder='what is happening' />
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-blue-400'>
                            <PhotoIcon className='h-4 w-4  transition-transform duration-150 ease-out hover:scale-150'/>
                            <MagnifyingGlassIcon className='h-4 w-4'/>
                            <FaceSmileIcon className='h-4 w-4'/>
                            <CalendarIcon className='h-4 w-4'/>
                            <MapIcon className='h-4 w-4' />
                    </div>
                    <button disabled={!input}className='bg-blue-400 px-4 py-2 text-lg 
                    font-bold text-white rounded-full
                    disabled:opacity-40'>tweet</button>
                </div>
                
            </form>
        </div>

    </div>
    
  )
}

export default TweetBox