'use client'

import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils'
import Image from 'next/image'

import image1 from '@/public/images/hero/hero1.png'
import image2 from '@/public/images/hero/hero2.png'
import image3 from '@/public/images/hero/hero3.png'
import image4 from '@/public/images/hero/hero4.png'

const images = [image1, image2, image3, image4]

export default function HeroCarousel() {
   const [api, setApi] = React.useState<CarouselApi>()
   const [current, setCurrent] = React.useState(0)

   React.useEffect(() => {
      if (!api) {
         return
      }

      setCurrent(api.selectedScrollSnap() + 1)

      api.on('select', () => {
         setCurrent(api.selectedScrollSnap() + 1)
      })
   }, [api])
   return (
      <Carousel
         opts={{
            align: 'start',
            loop: true,
         }}
         plugins={[
            Autoplay({
               delay: 3000,
            }),
         ]}
         setApi={setApi}
         className='w-full max-w-[1200px] flex flex-col items-center gap-y-[5px] xs:gap-y-2.5'
      >
         <CarouselContent className='-ml-2.5'>
            {images.map((item, index) => (
               <CarouselItem key={index} className='pl-2.5 basis-full xs:basis-1/2'>
                  <Image
                     src={item.src}
                     alt={`hero Image ${index + 1}`}
                     width={600}
                     height={300}
                     quality={100}
                     priority
                     sizes='(min-width: 1024px) 50vw,  100vw'
                     className='object-cover aspect-[7/4] xs:aspect-[2/1] rounded-[3px] xs:rounded-[5px]'
                  />
               </CarouselItem>
            ))}
         </CarouselContent>
         <div className='flex gap-x-[5px]'>
            {Array.from({ length: images.length }).map((_, index) => (
               <button
                  key={index}
                  className={cn(
                     'w-[15px] h-[5px] rounded-[5px] border border-primary-blue',
                     index + 1 === current ? 'bg-primary-blue' : 'bg-transparent'
                  )}
                  onClick={() => api?.scrollTo(index)}
               ></button>
            ))}
         </div>
      </Carousel>
   )
}
