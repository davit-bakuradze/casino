import GameCarousel from './games-container/GameCarousel'
import icon from '@/public/images/providers/icon.svg'
import logo1 from '@/public/images/providers/logo1.svg'
import logo2 from '@/public/images/providers/logo2.svg'
import logo3 from '@/public/images/providers/logo3.svg'
import logo4 from '@/public/images/providers/logo4.svg'
import logo5 from '@/public/images/providers/logo5.svg'
import logo6 from '@/public/images/providers/logo6.svg'
import logo7 from '@/public/images/providers/logo7.svg'
import logo8 from '@/public/images/providers/logo8.svg'

const images = [logo1, logo2, logo3, logo4, logo1, logo5, logo6, logo3, logo7, logo8]

function Providers() {
   return <GameCarousel title='providers' icon={icon} providers={images} />
}
export default Providers
