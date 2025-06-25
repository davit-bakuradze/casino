import Image from 'next/image'
import searchIcon from '@/public/images/icons/search.svg'
import { GameListFilters } from '@/utils/types'

type Props = {
   filters: GameListFilters
   setFilters: React.Dispatch<React.SetStateAction<GameListFilters>>
}

function SearchInput({ filters, setFilters }: Props) {
   return (
      <div className='flex items-center h-10 lg:col-span-2 bg-background-dark-secondary rounded-[5px] border-[1.5px] border-outline-color px-[11px] py-[9px]'>
         <Image src={searchIcon} alt='search' width={22} height={22} className='w-[22px] h-[22px] shrink-0' />
         <input
            type='search'
            value={filters.search ?? ''}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
            placeholder='Search your game'
            className='bg-transparent outline-none h-full w-full text-xs lg:text-sm placeholder-text-secondary ml-2'
         />
      </div>
   )
}

export default SearchInput
