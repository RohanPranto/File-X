import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader({ handleToggle }) {
  return (
    <div className='flex p-5 border-b item-center justify-between md:justify-end'>
      
      <AlignJustify className='md:hidden cursor-pointer' onClick={handleToggle}/>
      
            <Image src="/logo.svg" alt="Logo" width={50} height={50} className='md:hidden'/>
      <UserButton />
    </div>
  )
}

export default TopHeader
