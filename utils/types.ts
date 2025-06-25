export type Game = {
   id: number
   name: string
   provider: string
   identifier: string
   type: number
   demo: number
   image: string
   categories: string[]
}

export type Pagination = {
   current_page: number
   per_page: number
   total_items: number
   total_pages: number
   has_next_page: boolean
   has_prev_page: boolean
   next_page: number | null
   prev_page: number | null
}

export type GameListFilters = {
   provider?: string[]
   category?: string[]
   search?: string
   page?: number
   limit?: number
}

export type ServerFilters = {
   providers?: string[]
   categories?: string[]
   search?: string
   page?: number
   limit?: number
}

export type ApiResponse = {
   data: Game[]
   pagination: Pagination
   filters_applied: ServerFilters
}
