import { ApiResponse, GameListFilters } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import LoadingContainer from './LoadingContainer'

type Props = {
   loading: boolean
   error: string | null
   data: ApiResponse
   filters: GameListFilters
   hasFetched: boolean
   page: number
   setPage: React.Dispatch<React.SetStateAction<number>>
}

function GameList({ loading, error, data, filters, hasFetched, page, setPage }: Props) {
   const topRef = useRef<HTMLDivElement>(null)
   const prevPageRef = useRef<number>(page)

   useEffect(() => {
      if (!loading && page !== prevPageRef.current) {
         setTimeout(() => {
            if (topRef.current) {
               topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
         }, 0)
         prevPageRef.current = page
      }
   }, [loading, page])

   const shouldShow =
      loading ||
      !!error ||
      data.data.length > 0 ||
      (!loading &&
         !error &&
         data.data.length === 0 &&
         hasFetched &&
         ((filters.search && filters.search.length >= 3) ||
            (filters.category && filters.category.length > 0) ||
            (filters.provider && filters.provider.length > 0)))

   if (!shouldShow) return null

   return (
      <div ref={topRef} className='bg-background-dark-secondary p-4 lg:p-6 mt-4 lg:mt-6 rounded-md lg:rounded-xl'>
         {loading && <LoadingContainer />}

         {!loading && error && <div className='text-base text-red-400'>{error}</div>}

         {!loading &&
            !error &&
            data.data.length === 0 &&
            hasFetched &&
            ((filters.search && filters.search.length >= 3) ||
               (filters.category && filters.category.length > 0) ||
               (filters.provider && filters.provider.length > 0)) && <div className='text-base text-gray-400'>No games found.</div>}

         {!loading &&
            !error &&
            data.data.length > 0 &&
            (() => {
               const { pagination } = data
               return (
                  <>
                     <p className='text-sm font-bold'>Search Result: {pagination.total_items} Games Found</p>
                     <ul className='mt-4 lg:mt-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-[9.5px] lg:gap-[15px]'>
                        {data.data.map((game) => (
                           <li key={game.id}>
                              <Link href={`/${game.id}`}>
                                 <div className='relative group '>
                                    <Image
                                       src={game.image}
                                       alt={game.name}
                                       width={150}
                                       height={200}
                                       className='object-cover aspect-[3/4] rounded-[5px] w-full'
                                    />
                                    <div className='absolute inset-0 rounded-[5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent via-blue-400/30 to-blue-800/100' />
                                    <div className='absolute bottom-0 left-0 w-full px-0.5 pb-2 lg:pb-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'>
                                       <div className='font-bold uppercase text-xs lg:text-base text-center'>{game.name}</div>
                                       <div className='text-xs text-center'>{game.provider}</div>
                                    </div>
                                 </div>
                              </Link>
                           </li>
                        ))}
                     </ul>
                     {pagination.total_pages > 1 && (
                        <div className='flex gap-2 lg:gap-3 mt-4 lg:mt-6 w-full justify-center items-center text-xs leading-4 tracking-wider'>
                           <button
                              disabled={!pagination.has_prev_page || loading}
                              onClick={() => setPage((p) => Math.max(1, p - 1))}
                              className='w-[50px] px-3 py-1.5 rounded bg-primary-blue disabled:bg-blue-950 disabled:text-gray-500 cursor-pointer'
                           >
                              Prev
                           </button>
                           <span className='text-xs self-center'>
                              Page {pagination.current_page} of {pagination.total_pages}
                           </span>
                           <button
                              disabled={!pagination.has_next_page || loading}
                              onClick={() => setPage((p) => p + 1)}
                              className='w-[50px] px-3 py-1.5 rounded bg-primary-blue disabled:bg-blue-950 disabled:text-gray-500 cursor-pointer'
                           >
                              Next
                           </button>
                        </div>
                     )}
                  </>
               )
            })()}
      </div>
   )
}

export default GameList
