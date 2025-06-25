import Image from 'next/image'
import { categories } from '@/utils/filterItems'
import { GameListFilters } from '@/utils/types'
import { toggleMultiSelect } from './helpers'

type Props = {
   filters: GameListFilters
   setFilters: React.Dispatch<React.SetStateAction<GameListFilters>>
}

function CategoryFilter({ filters, setFilters }: Props) {
   const isCategorySelected = (name: string) => filters.category?.includes(name)

   return (
      <div className='h-10 w-full overflow-auto hide-scrollbar flex gap-[5px] lg:gap-[10px]'>
         {categories.map(({ icon, label, findName }) => {
            const selected = isCategorySelected(findName)
            return (
               <button
                  key={findName}
                  type='button'
                  onClick={() => toggleMultiSelect('category', findName, setFilters)}
                  className={`h-full w-auto rounded-[5px] p-2.5 text-nowrap border border-[#273847] flex items-center cursor-pointer transition ${
                     selected ? 'bg-background-dark-secondary' : 'bg-background-secondary'
                  }`}
               >
                  <div className='h-5 w-5 flex items-center justify-center'>
                     <Image src={icon} alt={label} className={`shrink-0 object-contain ${selected ? 'invert brightness-0' : ''}`} />
                  </div>
                  <span
                     className={`ml-[5px] capitalize font-medium text-sm leading-4 tracking-[0.1px] ${selected ? 'text-white' : 'text-secondary'}`}
                  >
                     {label}
                  </span>
               </button>
            )
         })}
      </div>
   )
}

export default CategoryFilter
