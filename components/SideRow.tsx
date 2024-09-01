import React from 'react'

interface Props { title:string
    Icon:React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, keyof React.RefAttributes<SVGSVGElement>>
  >,
   
}

function SideRow({Icon,title}: Props) {
  return (
    <div className='flex max-w-fit space-x-2 py-3 px-4 rounded-full
     transition-all duration-200 cursor-pointer
     hover:bg-gray-100 group'>
        <Icon className='w-6 h-6'/>
         <p className="hidden md:flex md:flex-col lg:text-xl group-hover:text-blue-400">{title}</p>
    </div>
  )
}

export default SideRow