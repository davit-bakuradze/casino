'use client'

import { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import ProviderDropdown from './ProviderDropdown'
import CategoryFilter from './CategoryFilter'
import GameList from './GameList'
import { GameListFilters, ApiResponse } from '@/utils/types'
import { EMPTY_API_RESPONSE, buildQueryString, filtersAreEqual } from './helpers'

function Search() {
   const [filters, setFilters] = useState<GameListFilters>({ category: [], provider: [] })
   const [page, setPage] = useState(1)
   const [data, setData] = useState<ApiResponse>(EMPTY_API_RESPONSE)
   const [hasFetched, setHasFetched] = useState(false)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      const handler = setTimeout(() => {
         const { search = '', category = [], provider = [] } = filters
         if (search.length >= 3 || category.length > 0 || provider.length > 0) {
            setLoading(true)
            setHasFetched(false)
            setError(null)

            fetch(`https://api.remailer.eu/games/list.php?${buildQueryString({ ...filters, page })}&limit=21`)
               .then((res) => {
                  if (!res.ok) throw new Error('Fetch error')
                  return res.json()
               })
               .then((data: ApiResponse) => {
                  setData(data)
                  setHasFetched(true)

                  if (
                     data.filters_applied &&
                     !filtersAreEqual(filters, {
                        search: data.filters_applied.search || '',
                        categories: data.filters_applied.categories || [],
                        providers: data.filters_applied.providers || [],
                     })
                  ) {
                     setFilters({
                        search: data.filters_applied.search || '',
                        category: data.filters_applied.categories || [],
                        provider: data.filters_applied.providers || [],
                     })
                  }
               })
               .catch(() => {
                  setError('Something went wrong')
                  setHasFetched(true)
               })
               .finally(() => setLoading(false))
         } else if (!search && !category.length && !provider.length) {
            setData(EMPTY_API_RESPONSE)
            setHasFetched(false)
         }
      }, 400)

      return () => clearTimeout(handler)
   }, [filters, page])

   useEffect(() => {
      setPage(1)
   }, [filters])

   return (
      <section className='flex flex-col'>
         <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2.5'>
            <div className='col-span-1 lg:col-span-2 order-1'>
               <SearchInput filters={filters} setFilters={setFilters} />
            </div>
            <div className='col-span-1 order-2 lg:order-4 lg:col-span-3 mt-[15px] mb-2.5 lg:mb-0'>
               <CategoryFilter filters={filters} setFilters={setFilters} />
            </div>
            <div className='col-span-1 order-3 lg:order-2'>
               <ProviderDropdown filters={filters} setFilters={setFilters} />
            </div>
         </div>
         <GameList loading={loading} error={error} data={data} filters={filters} hasFetched={hasFetched} page={page} setPage={setPage} />
      </section>
   )
}

export default Search
