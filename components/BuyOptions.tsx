import visa from '@/public/images/buy/visa_image.svg'
import apple from '@/public/images/buy/apple_pay_image.svg'
import mastercard from '@/public/images/buy/mc_image.svg'
import google from '@/public/images/buy/google_pay_image.svg'
import net from '@/public/images/buy/neteller_image.svg'
import skrill from '@/public/images/buy/skrill_image.svg'
import revolut from '@/public/images/buy/revolut_image.svg'
import Image from 'next/image'

const images = [visa, apple, mastercard, google, net, skrill, revolut]

function BuyOptions() {
   return (
      <section className='mt-[15px] lg:mt-[30px] bg-background-dark-secondary rounded-[5px] p-[15px] lg:p-[25px] flex flex-col lg:flex-row justify-between items-center gap-x-10'>
         <h3 className='text-xl font-bold tracking-[0.2px] leading-6 mb-2.5 lg:mb-0 text-center lg:text-left text-nowrap'>
            You don’t have Crypto?
            <br />
            No problem.
         </h3>
         <div className='flex justify-center items-center gap-0 lg:gap-3 flex-wrap mb-4 lg:mb-0'>
            {images.map((img, idx) => (
               <Image key={idx} src={img} alt='buy option' height={55} className='w-auto block' />
            ))}
         </div>
         <button className='w-full lg:w-44 h-10 bg-primary-blue rounded-[3px] text-xs leading-[14px] font-semibold tracking-[0.1px]  hover:bg-blue-700 transition duration-200 uppercase'>
            buy now
         </button>
      </section>
   )
}
export default BuyOptions
