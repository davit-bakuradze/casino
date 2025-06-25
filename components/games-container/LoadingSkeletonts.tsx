import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Skeleton } from '../ui/skeleton'

function LoadingSkeletonts() {
   return (
      <article className='mt-[10px] mb-[15px] lg:mt-[25px] lg:mb-[25px] flex flex-col gap-y-[15px] lg:gap-y-[25px]'>
         <GameSlider />
         <GameSlider />
         <GameSlider />
      </article>
   )
}

function GameSlider() {
   return (
      <Carousel
         opts={{
            loop: false,
            align: 'start',
         }}
         className='w-full flex flex-col gap-y-1.5 lg:gap-y-2.5'
      >
         <div className='flex items-center gap-x-2 justify-between'>
            <Skeleton className='w-32 h-5 lg:h-[22px]  bg-slate-500' />
            <div className='flex items-center gap-x-[3px] lg:gap-x-[5px]'>
               <Skeleton className='w-7 h-7 lg:w-[35px] lg:h-[35px] rounded-[5px] bg-slate-500' />
               <Skeleton className='w-7 h-7 lg:w-[35px] lg:h-[35px] rounded-[5px]  bg-slate-500' />
            </div>
         </div>
         <CarouselContent className='-ml-[9.5px] lg:-ml-[15px] overflow-visible'>
            {Array.from({ length: 8 }).map((_, idx) => (
               <CarouselItem key={idx} className='pl-[9.5px] lg:pl-[15px] basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[13.57%]'>
                  <Skeleton className='object-cover aspect-[3/4] rounded-[5px] w-full h-full bg-slate-500' />
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   )
}

export default LoadingSkeletonts
