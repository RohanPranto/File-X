// SideNav.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Upload, File, AlignJustify } from 'lucide-react';
import Image from 'next/image';

function SideNav({ closeSideBar }) {
  const [toggle, setToggle] = useState();
  const handleToggle2 = () => {
    setToggle(true);
  };

  const menuList = [
    {
      id: 1,
      name: 'Upload',
      icon: Upload,
      path: '/upload',
    },
    {
      id: 2,
      name: 'Files',
      icon: File,
      path: '/files',
    },
    {
      id: 3,
      name: 'Upgrade',
      icon: Shield,
      path: '/upgrade',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-4 border-b'>
      <Link href="/">
      <Image src="/logo.svg" alt="Logo" width={50} height={50} className='' />
        <AlignJustify className='md:hidden cursor-pointer' onClick={handleToggle2} />
      </Link>
      </div>
      
      <div className='flex flex-col float-left w-full'>
        
        {menuList.map((item, index) => (
          <Link key={item.id} href={item.path}>
            
            <div
              className={`flex pl-5 gap-2 p-4 px-0 hover:bg-gray-100 border-b w-full text-gray-500
                ${activeIndex === index ? 'bg-blue-50 text-primary' : null}`}
              onClick={() => { setActiveIndex(index); closeSideBar(); }}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
