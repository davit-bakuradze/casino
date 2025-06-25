import Image from 'next/image'
import eightteen from '@/public/images/footer/security/18_icon.png'
import anj from '@/public/images/footer/security/anj_icon.png'
import ga from '@/public/images/footer/security/ga_icon.png'
import gc from '@/public/images/footer/security/gc_icon.png'

const images = [eightteen, anj, ga, gc]

function Security() {
   return (
      <div className='flex justify-center items-center gap-2.5'>
         {images.map((img, i) => (
            <div key={i} className='w-[35px] h-[35px] flex items-center justify-center'>
               <Image
                  src={img}
                  alt='img'
                  width={35}
                  height={35}
                  style={{
                     width: '35px',
                     height: '35px',
                     objectFit: 'contain',
                     display: 'block',
                  }}
               />
            </div>
         ))}
      </div>
   )
}

export default Security
