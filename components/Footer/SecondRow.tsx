import Image from 'next/image'
import amex_image from '@/public/images/footer/amex__image.png'
import bitcoin_cash_image from '@/public/images/footer/bitcoin_cash_image.png'
import bitcoin_image from '@/public/images/footer/bitcoin_image.png'
import diners_club_image from '@/public/images/footer/diners_club_image.png'
import discover_image from '@/public/images/footer/discover_image.png'
import etherium_image from '@/public/images/footer/etherium_image.png'
import litecoin_image from '@/public/images/footer/litecoin_image.png'
import mc_image from '@/public/images/footer/mc_image.png'
import ripple_image from '@/public/images/footer/ripple_image.png'
import tether_image from '@/public/images/footer/tether_image.png'
import usdc_image from '@/public/images/footer/usdc_image.png'
import visa_image from '@/public/images/footer/visa_image.png'

const images = [
   amex_image,
   bitcoin_cash_image,
   bitcoin_image,
   diners_club_image,
   discover_image,
   etherium_image,
   litecoin_image,
   mc_image,
   ripple_image,
   tether_image,
   usdc_image,
   visa_image,
]

function SecondRow() {
   return (
      <div className='py-5 border-y-[1.5px] border-[#282F48] w-full'>
         <div className='flex justify-center items-center gap-3 flex-wrap'>
            {images.map((img, idx) => (
               <Image
                  key={idx}
                  src={img}
                  alt=''
                  height={45}
                  style={{
                     height: 45,
                     width: 'auto',
                     maxWidth: 'none',
                     display: 'block',
                  }}
               />
            ))}
         </div>
      </div>
   )
}
export default SecondRow
