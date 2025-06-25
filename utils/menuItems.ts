import Promotions from '@/public/images/icons/menu/promotions.svg'
import VipClub from '@/public/images/icons/menu/vip_club.svg'
import Tournaments from '@/public/images/icons/menu/tournaments.svg'
import Slots from '@/public/images/icons/menu/slots.svg'
import Blackjack from '@/public/images/icons/menu/blackjack.svg'
import Roulette from '@/public/images/icons/menu/roulette.svg'
import Baccarat from '@/public/images/icons/menu/sidebar_baccarat.svg'
import LiveDealer from '@/public/images/icons/menu/live_dealers.svg'
import Crash from '@/public/images/icons/menu/crash.svg'
import Dice from '@/public/images/icons/menu/dice.svg'
import VideoPoker from '@/public/images/icons/menu/poker.svg'
import Favorites from '@/public/images/icons/menu/favorites.svg'
import Recent from '@/public/images/icons/menu/recent.svg'
import Collections from '@/public/images/icons/menu/collections.svg'
import Providers from '@/public/images/icons/menu/providers.svg'
import Support from '@/public/images/icons/menu/support.svg'
import Language from '@/public/images/icons/menu/language.svg'

type MenuItem = {
   icon: string
   label: string
   href: string
}

type MenuGroup = {
   items: MenuItem[]
}

export const menuItems: MenuGroup[] = [
   {
      items: [
         { icon: Promotions, label: 'Promotions', href: '/promotions' },
         { icon: VipClub, label: 'VIP Club', href: '/vip-club' },
         { icon: Tournaments, label: 'Tournaments', href: '/tournament' },
      ],
   },
   {
      items: [
         { icon: Slots, label: 'Slots', href: '/slots' },
         { icon: Blackjack, label: 'Blackjack', href: '/blackjack' },
         { icon: Roulette, label: 'Roulette', href: '/roulette' },
         { icon: Baccarat, label: 'Baccarat', href: '/baccarat' },
         { icon: LiveDealer, label: 'Live Dealer', href: '/live-dealer' },
         { icon: Crash, label: 'Crash', href: '/crash' },
         { icon: Dice, label: 'Dice', href: '/dice' },
         { icon: VideoPoker, label: 'Video Poker', href: '/video-poker' },
      ],
   },
   {
      items: [
         { icon: Favorites, label: 'Favorites', href: '/favorites' },
         { icon: Recent, label: 'Recent', href: '/recent' },
      ],
   },
   {
      items: [
         { icon: Collections, label: 'Collections', href: '/collections' },
         { icon: Providers, label: 'Providers', href: '/providers' },
      ],
   },
   {
      items: [
         { icon: Support, label: 'Support', href: '/support' },
         { icon: Language, label: 'English', href: '/english' },
      ],
   },
]
