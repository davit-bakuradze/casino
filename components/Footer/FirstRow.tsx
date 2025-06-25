import { links } from '@/utils/links'
import Logo from '../Logo'
import Link from 'next/link'
import image_1 from '@/public/images/footer/image_1.png'
import image_2 from '@/public/images/footer/image_2.png'

function FirstRow() {
   return (
      <div className='grid lg:grid-cols-[300px_1fr] gap-11 w-full mb-9'>
         <div className='flex flex-col gap-y-3'>
            <Logo />
            <p className='text-sm leading-[22px] text-[#8898B0]'>
               Strike it rich at CASINO! Experience heart-pounding action with massive jackpots, fast payouts, and VIP treatment that keeps champions
               coming back. Join thousands of winners today - your fortune awaits!
            </p>
         </div>
         <nav className='grid grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-10'>
            {links.map((group) => (
               <div key={group.group}>
                  <h4 className='font-bold mb-3.75 text-base capitalize leading-[1.125rem]'>{group.group}</h4>
                  <ul className='flex flex-col gap-y-2.5'>
                     {group.sublinks.map((sublink) => (
                        <li key={sublink.href}>
                           <Link href={sublink.href} className='text-sm text-[#B6BFD8] hover:underline capitalize leading-[1.125rem]'>
                              {sublink.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
            <div className='flex flex-col gap-y-3 w-full h-full lg:hidden'>
               <img src={image_1.src} alt='Image 1' className='w-full h-1/2 object-cover rounded-[5px] flex-1' />
               <img src={image_2.src} alt='Image 2' className='w-full h-1/2 object-cover rounded-[5px] flex-1' />
            </div>
         </nav>
      </div>
   )
}
export default FirstRow
