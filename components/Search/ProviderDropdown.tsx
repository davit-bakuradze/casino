'use client'

import Image from 'next/image'
import Providers from '@/public/images/icons/menu/providers.svg'
import arrowNext from '@/public/images/icons/arrow-next.svg'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { providers } from '@/utils/filterItems'
import { useRef, useState, useEffect } from 'react'
import { GameListFilters } from '@/utils/types'
import { toggleMultiSelect } from './helpers'

type Props = {
   filters: GameListFilters
   setFilters: React.Dispatch<React.SetStateAction<GameListFilters>>
}

function ProviderDropdown({ filters, setFilters }: Props) {
   const [isOpen, setOpen] = useState(false)
   const triggerRef = useRef<HTMLButtonElement>(null)
   const [menuWidth, setMenuWidth] = useState<number | undefined>(undefined)

   useEffect(() => {
      if (triggerRef.current) setMenuWidth(triggerRef.current.offsetWidth)
   }, [isOpen])

   return (
      <DropdownMenu open={isOpen} onOpenChange={setOpen}>
         <DropdownMenuTrigger asChild>
            <button
               className='bg-background-dark-secondary rounded-[5px] border border-outline-color flex items-center pl-[15px] pr-2 focus:outline-0 w-full h-10'
               ref={triggerRef}
            >
               <Image src={Providers} alt='providers' width={16} height={16} />
               <span className='ml-[5px] text-sm font-medium leading-4 tracking-[0.1px] text-text-secondary'>Providers</span>
               <div className='w-6 h-6 bg-primary border border-outline-color rounded-[5px] ml-auto flex items-center justify-center'>
                  <Image
                     src={arrowNext}
                     alt='arrow down'
                     height={15}
                     width={15}
                     className={`transition-transform duration-200 ${isOpen ? '-rotate-90' : 'rotate-90'}`}
                  />
               </div>
            </button>
         </DropdownMenuTrigger>
         <DropdownMenuContent
            className='bg-background-dark-secondary text-text-secondary text-sm leading-4 font-medium tracking-[0.1px] border border-outline-color py-1 px-0 rounded-[5px]'
            style={{ width: menuWidth }}
         >
            {providers.map(({ icon, label, findName }) => (
               <DropdownMenuCheckboxItem
                  key={findName}
                  className='h-10 hover:underline focus:bg-background-dark-secondary focus:text-text-secondary rounded-none cursor-pointer'
                  checked={filters.provider?.includes(findName)}
                  onCheckedChange={() => toggleMultiSelect('provider', findName, setFilters)}
               >
                  <Image src={icon} alt={label} width={16} height={16} className='mr-2' />
                  <span className='capitalize'>{label}</span>
               </DropdownMenuCheckboxItem>
            ))}
         </DropdownMenuContent>
      </DropdownMenu>
   )
}

export default ProviderDropdown
