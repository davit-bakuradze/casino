'use client'
import { useState } from 'react'
import { menuItems } from '@/utils/menuItems'
import Image from 'next/image'
import Link from 'next/link'
import menu from '@/public/images/icons/menu/menu.svg'

function MiniSidebar({ onBurgerClick }: { onBurgerClick: () => void }) {
   return (
      <aside className='hidden lg:flex flex-col items-center fixed top-0 left-0 h-screen w-[60px] z-50 bg-background-dark border-r border-[#273344]'>
         <div className='flex items-center justify-center w-[60px] h-[60px] mb-5'>
            <button onClick={onBurgerClick} aria-label='Open sidebar' className='w-10 h-10 m-2.5 flex items-center justify-center cursor-pointer'>
               <Image src={menu} width={18} height={14} alt='Open sidebar' className='w-[18px] h-[14px] object-cover' />
            </button>
         </div>
         <div className='flex-1 flex flex-col gap-2.5 overflow-auto hide-scrollbar'>
            {menuItems.map((group, groupIdx) => (
               <ul key={groupIdx} className='mb-2.5'>
                  {group.items.map(({ icon, label, href }) => (
                     <li key={href}>
                        <Link href={href} className='flex items-center justify-center h-[40px] w-[60px] transition-all'>
                           <Image src={icon} width={22} height={22} alt={label} />
                        </Link>
                     </li>
                  ))}
               </ul>
            ))}
         </div>
      </aside>
   )
}

export function FullSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
   if (!open) return null

   return (
      <aside
         className='
         flex flex-col items-center fixed top-0 left-0 h-screen w-[240px] z-50
         bg-background-dark  transition-transform duration-300 border-r border-[#273344]'
         style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
      >
         <div className='flex items-center h-[60px] mb-5 w-full px-5'>
            <button onClick={onClose} aria-label='Close sidebar' className='w-[40px] h-[40px] m-2.5 flex items-center justify-center cursor-pointer'>
               <Image src={menu} width={22} height={22} alt='Close sidebar' />
            </button>
         </div>
         <div className='flex-1 flex flex-col gap-2.5 w-full px-5 overflow-auto hide-scrollbar'>
            {menuItems.map((group, groupIdx) => (
               <ul key={groupIdx} className='mb-2.5 bg-primary rounded-[5px]'>
                  {group.items.map(({ icon, label, href }) => (
                     <li key={href}>
                        <Link href={href} className='flex items-center gap-2.5 h-[40px] w-[200px] px-2.5'>
                           <Image src={icon} width={22} height={22} alt={label} />
                           <span className='text-sm font-medium'>{label}</span>
                        </Link>
                     </li>
                  ))}
               </ul>
            ))}
         </div>
      </aside>
   )
}
export default function Sidebar() {
   const [open, setOpen] = useState(false)
   return (
      <>
         <MiniSidebar onBurgerClick={() => setOpen(true)} />
         <FullSidebar open={open} onClose={() => setOpen(false)} />
      </>
   )
}
