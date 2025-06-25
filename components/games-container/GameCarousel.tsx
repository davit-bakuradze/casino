import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Game } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'

function GameCarousel({ games, providers, title, icon }: { games?: Game[]; providers?: string[]; title: string; icon: string }) {
   return (
      <section>
         <Carousel
            className='w-full flex flex-col gap-y-1.5 lg:gap-y-2.5'
            opts={{
               loop: false,
               align: 'start',
            }}
         >
            <div className='flex items-center gap-x-2 justify-between'>
               <div className='flex items-center gap-[5px] lg:gap-x-2.5'>
                  <Image src={icon} alt='icon' width={22} height={22} className='w-5 h-5 lg:w-[22px] lg:h-[22px]' />
                  <h3 className='capitalize text-xs lg:text-base font-semibold lg:font-medium leading-5 tracking-[0.2px]'>{title}</h3>
               </div>
               <div className='flex items-center gap-x-[3px] lg:gap-x-[5px]'>
                  <CarouselPrevious className='static translate-y-0 left-auto right-auto bg-[#141F2B] w-7 h-7 lg:w-[35px] lg:h-[35px] rounded-[5px] border lg:border-2 border-[#253241] hover:bg-[#1b2430]' />
                  <CarouselNext className='static translate-y-0 left-auto right-auto bg-[#141F2B] w-7 h-7 lg:w-[35px] lg:h-[35px] rounded-[5px] border lg:border-2 border-[#253241] hover:bg-[#1b2430]' />
               </div>
            </div>
            <CarouselContent className={cn('overflow-visible lg:-ml-[15px]', games && '-ml-[9.5px]', providers && '-ml-[5px]')}>
               {games &&
                  games.map((game) => {
                     return (
                        <CarouselItem key={game.id} className='pl-[9.5px] lg:pl-[15px] basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[13.57%]'>
                           <Link href={`/${game.id}`}>
                              <div className='relative group '>
                                 <Image
                                    src={game.image}
                                    alt={game.name}
                                    width={150}
                                    height={200}
                                    className='object-cover aspect-[3/4] rounded-[5px] w-full h-full'
                                 />
                                 <div className='absolute inset-0 rounded-[5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent via-blue-400/30 to-blue-800/100' />
                                 <div className='absolute bottom-0 left-0 w-full px-0.5 pb-2 lg:pb-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                                    <div className='font-bold uppercase text-xs lg:text-base text-center'>{game.name}</div>
                                    <div className='text-xs text-center'>{game.provider}</div>
                                 </div>
                              </div>
                           </Link>
                        </CarouselItem>
                     )
                  })}
               {providers &&
                  providers.map((provider, index) => {
                     return (
                        <CarouselItem key={index} className='pl-[5px] lg:pl-[15px] basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[13.57%]'>
                           <div className='border border-outline-color lg:border-0 relative bg-background-dark-secondary rounded-[5px] aspect-[23/10] lg:aspect-[5/2]'>
                              <Image src={provider} alt='provider' fill className='object-contain p-1.5' />
                           </div>
                        </CarouselItem>
                     )
                  })}
            </CarouselContent>
         </Carousel>
      </section>
   )
}
export default GameCarousel
