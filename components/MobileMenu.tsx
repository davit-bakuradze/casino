'use client'

import home from '@/public/images/icons/mobile-menu/home_icon.svg'
import search from '@/public/images/icons/mobile-menu/search_icon.svg'
import deposit from '@/public/images/icons/mobile-menu/deposit_icon_inactive.svg'
import chat from '@/public/images/icons/mobile-menu/chat_icon.svg'
import menu from '@/public/images/icons/mobile-menu/menu_icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FullSidebar } from './Sidebar'

function MobileMenu() {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   return (
      <div className='flex lg:hidden fixed bottom-0 left-0 w-full z-40 bg-[#10212E] h-15 rounded-t-[5px] border-t border-outline-color p-[5px] justify-center'>
         <nav className='flex items-center mx-auto h-full'>
            <Link href='/' className='flex flex-col items-center gap-y-0.5 mr-7'>
               <Image src={home} alt='home page' width={24} height={24} />
               <span className='text-[10px] leading-3'>Home</span>
            </Link>
            <Link href='/search' className='flex flex-col items-center gap-y-0.5 mr-[28.5px]'>
               <Image src={search} alt='search page' width={24} height={24} />
               <span className='text-[10px] leading-3'>Search</span>
            </Link>
            <button className='h-[3.125rem] w-[3.125rem] rounded-full bg-primary-blue hover:bg-blue-700 flex items-center justify-center'>
               <Image src={deposit} alt='deposit button' width={24} height={24} className='w-6 h-6 shrink-0' />
            </button>
            <Link href='/chat' className='flex flex-col items-center gap-y-0.5 ml-[30.5px]'>
               <Image src={chat} alt='search page' width={24} height={24} />
               <span className='text-[10px] leading-3'>Chat</span>
            </Link>
            <button className='flex flex-col items-center gap-y-0.5 ml-[39px]' onClick={() => setSidebarOpen((prev) => !prev)}>
               <Image src={menu} alt='search page' width={24} height={24} />
               <span className='text-[10px] leading-3'>Menu</span>
            </button>
         </nav>
         <FullSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
   )
}
export default MobileMenu
