import { ApiResponse, GameListFilters, ServerFilters } from '@/utils/types'

export const EMPTY_API_RESPONSE: ApiResponse = {
   data: [],
   pagination: {
      current_page: 1,
      per_page: 20,
      total_items: 0,
      total_pages: 1,
      has_next_page: false,
      has_prev_page: false,
      next_page: null,
      prev_page: null,
   },
   filters_applied: {},
}

export function buildQueryString(filters: GameListFilters): string {
   return Object.entries(filters)
      .filter(([, value]) => {
         if (Array.isArray(value)) return value.length > 0
         if (typeof value === 'string') return value.length > 0
         return value !== undefined && value !== null
      })
      .map(([key, value]) => {
         if (Array.isArray(value)) {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value.join(','))}`
         }
         return `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
      })
      .join('&')
}

export function toggleMultiSelect(key: 'category' | 'provider', value: string, setFilters: React.Dispatch<React.SetStateAction<GameListFilters>>) {
   setFilters((prev) => {
      const currentArray: string[] = prev[key] || []
      const newArray = currentArray.includes(value) ? currentArray.filter((v) => v !== value) : [...currentArray, value]

      return { ...prev, [key]: newArray }
   })
}

export function filtersAreEqual(a: GameListFilters, b: ServerFilters) {
   return (
      (a.search ?? '') === (b.search ?? '') &&
      JSON.stringify([...(a.category ?? [])].sort()) === JSON.stringify([...(b.categories ?? [])].sort()) &&
      JSON.stringify([...(a.provider ?? [])].sort()) === JSON.stringify([...(b.providers ?? [])].sort())
   )
}
