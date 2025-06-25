import { Skeleton } from '../ui/skeleton'

function LoadingContainer() {
   return (
      <div>
         <Skeleton className='w-60 h-6 bg-slate-500' />
         <ul className='mt-4 lg:mt-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-[9.5px] lg:gap-[15px]'>
            {Array.from({ length: 21 }).map((_, idx) => (
               <li key={idx}>
                  <Skeleton className='aspect-[3/4] rounded-[5px] w-full bg-slate-500' />
               </li>
            ))}
         </ul>
      </div>
   )
}
export default LoadingContainer
