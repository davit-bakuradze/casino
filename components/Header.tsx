import bell from '@/public/images/icons/header/bell.svg'
import user from '@/public/images/icons/header/user.svg'
import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'
import DepositInput from './DepositInput'

function Header() {
   return (
      <header className='bg-[#152535] h-[60px]'>
         <div className='max-w-[1220px] mx-auto p-2.5 lg:px-2.5 h-full flex justify-between items-center main-centered-lg'>
            <Logo />
            <div className='flex gap-x-2.5'>
               <DepositInput />
               <Link href='/notification' className='w-10 h-10 bg-primary rounded-[5px] flex items-center justify-center border border-[#273344]'>
                  <Image src={bell} width={20} height={20} alt='notification' />
               </Link>
               <Link href='/profile' className='w-10 h-10 bg-primary rounded-[5px] flex items-center justify-center border border-[#273344]'>
                  <Image src={user} width={20} height={20} alt='notification' />
               </Link>
            </div>
         </div>
      </header>
   )
}
export default Header
