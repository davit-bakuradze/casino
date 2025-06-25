import slots from '@/public/images/icons/categories/slots.svg'
import blackjack from '@/public/images/icons/categories/blackjack.svg'
import roulette from '@/public/images/icons/categories/roulette.svg'
import live from '@/public/images/icons/categories/live.svg'
import baccarat from '@/public/images/icons/categories/baccarat.svg'
import crash from '@/public/images/icons/categories/crash.svg'
import dice from '@/public/images/icons/categories/dice.svg'
import videopoker from '@/public/images/icons/categories/video.svg'
import fruits from '@/public/images/icons/categories/fruits.svg'
import books from '@/public/images/icons/categories/books.svg'
import bonusbuy from '@/public/images/icons/categories/bonusbuy.svg'

type Category = {
   icon: string
   label: string
   findName: string
}

export const categories: Category[] = [
   {
      icon: slots,
      label: 'slots',
      findName: 'slots',
   },
   {
      icon: blackjack,
      label: 'blackjack',
      findName: 'blackjack',
   },
   {
      icon: roulette,
      label: 'roulette',
      findName: 'roulette',
   },
   {
      icon: live,
      label: 'live',
      findName: 'live',
   },
   {
      icon: baccarat,
      label: 'baccarat',
      findName: 'baccarat',
   },
   {
      icon: crash,
      label: 'crash',
      findName: 'crash',
   },
   {
      icon: dice,
      label: 'dice',
      findName: 'dice',
   },
   {
      icon: videopoker,
      label: 'video poker',
      findName: 'video-poker',
   },
   {
      icon: fruits,
      label: 'fruits',
      findName: 'fruits',
   },
   {
      icon: books,
      label: 'books',
      findName: 'books',
   },
   {
      icon: bonusbuy,
      label: 'bonus buy',
      findName: 'bonus-buy',
   },
   {
      icon: baccarat,
      label: 'hot',
      findName: 'hot',
   },
   {
      icon: live,
      label: 'featured games',
      findName: 'featured-games',
   },
   {
      icon: slots,
      label: 'new releases',
      findName: 'new-releases',
   },
   {
      icon: baccarat,
      label: 'hot games',
      findName: 'hot-games',
   },
]

export const providers: Category[] = [
   {
      icon: dice,
      label: 'bgaming',
      findName: 'bgaming',
   },
   {
      icon: dice,
      label: 'gamebeat',
      findName: 'gamebeat',
   },
   {
      icon: dice,
      label: 'pragmatic play',
      findName: 'pragmaticplay',
   },
   {
      icon: dice,
      label: 'netent',
      findName: 'netent',
   },
   {
      icon: dice,
      label: 'playtech',
      findName: 'playtech',
   },
]
