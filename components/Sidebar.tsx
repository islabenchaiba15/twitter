import React from 'react'
import {
    HomeIcon,
    UserIcon,
    BookmarkIcon,
    HashtagIcon,
    BellIcon,
    MagnifyingGlassIcon

} from '@heroicons/react/24/solid'
import SideRow from './SideRow'
function Sidebar() {
  return (
    <div className='flex flex-col mt-5 col-span-2 items-center px-3 md:items-start'>
        <img className='w-10 h-10' src="https://links.papareact.com/drq" alt="iss" />
        <SideRow Icon={HomeIcon} title='Home'/>
        <SideRow Icon={HashtagIcon} title='explore'/>
        <SideRow Icon={BellIcon} title='notification'/>
        <SideRow Icon={HomeIcon} title='messages'/>
        <SideRow Icon={BookmarkIcon} title='bookmarks'/>
        <SideRow Icon={UserIcon} title='sign out'/>
    </div>
  )
}

export default Sidebar