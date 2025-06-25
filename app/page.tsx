import About from '@/components/About'
import BuyOptions from '@/components/BuyOptions'
import GamesSliders from '@/components/games-container/GamesSliders'
import Hero from '@/components/Hero'
import Providers from '@/components/Providers'
import Search from '@/components/Search/Search'

export default function Home() {
   return (
      <>
         <Hero />
         <Search />
         <GamesSliders />
         <Providers />
         <BuyOptions />
         <About />
      </>
   )
}
