'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { ApiResponse, Game } from '@/utils/types'
import GameCarousel from './GameCarousel'

import featured from '@/public/images/icons/slider/featured.svg'
import new_releases from '@/public/images/icons/slider/new_releases.svg'
import hotgames from '@/public/images/icons/slider/hot_games.svg'
import bonusbuy from '@/public/images/icons/slider/bonus_buy.svg'
import livegames from '@/public/images/icons/slider/live.svg'
import LoadingSkeletonts from './LoadingSkeletonts'

function GamesSliders() {
   const [featuredGames, setFeaturedGames] = useState<Game[]>([])
   const [newReleases, setNewReleases] = useState<Game[]>([])
   const [hotGames, setHotGames] = useState<Game[]>([])
   const [bonusBuyGames, setBonusBuyGames] = useState<Game[]>([])
   const [liveGames, setLiveGames] = useState<Game[]>([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      setLoading(true)
      setError(null)

      const fetchCategory = (category: string, limit = 15) =>
         axios.get<ApiResponse>(`https://api.remailer.eu/games/list.php?category=${category}&limit=${limit}`)

      Promise.all([
         fetchCategory('featured-games'),
         fetchCategory('new-releases'),
         fetchCategory('hot-games'),
         fetchCategory('bonus-buy'),
         fetchCategory('live'),
      ])
         .then(([featuredRes, newReleasesRes, hotRes, bonusBuyRes, liveRes]) => {
            setFeaturedGames(featuredRes.data.data)
            setNewReleases(newReleasesRes.data.data)
            setHotGames(hotRes.data.data)
            setBonusBuyGames(bonusBuyRes.data.data)
            setLiveGames(liveRes.data.data)
         })
         .catch((err) => {
            setError(err.message || 'Something went wrong')
         })
         .finally(() => setLoading(false))
   }, [])

   if (loading) return <LoadingSkeletonts />
   if (error) return <div>Error: {error}</div>

   return (
      <article className='mt-[10px] mb-[15px] lg:mt-[25px] lg:mb-[25px] flex flex-col gap-y-[15px] lg:gap-y-[25px]'>
         <GameCarousel title='featured games' icon={featured} games={featuredGames} />
         <GameCarousel title='new releases' icon={new_releases} games={newReleases} />
         <GameCarousel title='hot games' icon={hotgames} games={hotGames} />
         <GameCarousel title='bonus buy' icon={bonusbuy} games={bonusBuyGames} />
         <GameCarousel title='live games' icon={livegames} games={liveGames} />
      </article>
   )
}
export default GamesSliders
