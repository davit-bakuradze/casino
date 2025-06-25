import Image from 'next/image'
import image3 from '@/public/images/hero/hero3.png'
import image4 from '@/public/images/hero/hero4.png'
import image5 from '@/public/images/hero/hero5.png'
import image6 from '@/public/images/hero/hero6.png'
import image7 from '@/public/images/hero/hero7.png'
import image8 from '@/public/images/hero/hero8.png'
import HeroCarousel from './HeroCarousel'

function Hero() {
   return (
      <section className='my-2.5 lg:my-[15px]'>
         <HeroCarousel />
         <div className='w-full lg:aspect-[24/5] lg:relative mt-2.5'>
            <div className='grid grid-cols-4 gap-[5px] lg:grid-cols-3 lg:gap-2.5 lg:absolute lg:inset-0 lg:h-full'>
               {/* Image 3 */}
               <div className='col-span-2 lg:col-auto relative aspect-[7/4] lg:aspect-auto w-full lg:h-full'>
                  <Image src={image3} alt='Hero image 3' fill priority className='object-cover rounded-lg' sizes='(max-width: 1200px) 50vw, 33vw' />
               </div>
               {/* Image 4 */}
               <div className='col-span-2 lg:col-auto relative aspect-[7/4] lg:aspect-auto w-full lg:h-full'>
                  <Image src={image4} alt='Hero image 4' fill priority className='object-cover rounded-lg' sizes='(max-width: 1200px) 50vw, 33vw' />
               </div>
               {/* Images 5-8 */}
               <div className='col-span-4 grid grid-cols-4 gap-[5px] lg:col-span-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-2.5 lg:h-full'>
                  {[image5, image6, image7, image8].map((src, idx) => (
                     <div key={idx} className='relative aspect-square lg:aspect-auto w-full lg:h-full'>
                        <Image
                           src={src}
                           alt={`Hero image ${idx + 5}`}
                           fill
                           className='object-cover rounded-lg'
                           sizes='(max-width:1200px) 25vw,17vw'
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero
