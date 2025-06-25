'use client'

import { useState } from 'react'
import dollar from '@/public/images/icons/header/dollar.svg'
import deposit from '@/public/images/icons/header/deposit.svg'
import { formatCurrency } from '@/utils/format'
import Image from 'next/image'

export default function DepositInput() {
   const [display, setDisplay] = useState<string>('')

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9.]/g, '')
      setDisplay(formatCurrency(raw))
   }

   return (
      <form className='flex items-center h-10 text-sm font-medium leading-4 border border-outline-color rounded-[5px] overflow-hidden bg-background-dark-secondary'>
         <div className='flex items-center w-[105px] lg:w-[7.5rem]'>
            <span className='pl-2 pr-1 flex items-center'>
               <Image src={dollar} alt='$' width={24} height={24} className='w-6 h-6 shrink-0' />
            </span>
            <input
               type='text'
               value={display}
               onChange={handleChange}
               placeholder='10,000'
               className='bg-transparent outline-none border-none h-full w-full tracking-[0.1px] p-2 pl-1'
            />
         </div>
         <button type='submit' className='h-full bg-primary-blue hover:bg-blue-700 flex items-center justify-center'>
            <span className='block lg:hidden p-2'>
               <Image src={deposit} alt='deposit' width={24} height={24} className='w-6 h-6 shrink-0' />
            </span>
            <span className='hidden lg:block uppercase px-5'>deposit</span>
         </button>
      </form>
   )
}
