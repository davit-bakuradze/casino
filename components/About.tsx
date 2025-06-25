import Link from 'next/link'

function About() {
   return (
      <section className='relative bg-background-dark-secondary lg:[background:linear-gradient(180deg,_#1E2B38_0%,_#1E2A38_100%)] mt-4 mb-5 lg:mt-[30px] lg:mb-[40px] rounded-sm p-4 lg:p-6 pt-[14px] overflow-hidden'>
         <div
            className='
          absolute left-0 right-0 top-12 bottom-0 pointer-events-none rounded-t-sm z-10
          [background:linear-gradient(180deg,_transparent_0%,_#1E2A38_100%)]
          block lg:hidden
        '
         />
         <h2 className='text-lg leading-5 mb-2.5 relative'>
            CASINO
            <span className='text-bold'> Casino</span>
         </h2>
         <p className='text-sm leading-5 hidden lg:block relative'>
            CASINO is your premier online casino platform, offering a world-class gaming experience with hundreds of top-tier casino games, exclusive
            bonuses, and lightning-fast payouts. Whether you're a fan of classic slots, live dealer games, table games, or jackpot progressives,
            CASINO delivers everything you need for high-stakes excitement and non-stop fun — all from the comfort of your home or mobile device.{' '}
            <br />
            Join thousands of players worldwide who trust CASINO for its secure, fair, and licensed gameplay. We partner with the industry's most
            reputable software providers to bring you an unbeatable selection of games with stunning graphics, realistic sound effects, and smooth
            gameplay. From roulette and blackjack to immersive live casino tables and high-RTP video slots, CASINO is designed to satisfy both new
            players and seasoned pros. <br />
            At CASINO, new users are greeted with a generous welcome bonus and ongoing promotions, cashback offers, free spins, and VIP rewards for
            loyal players. Our platform supports multiple payment options, including credit cards, cryptocurrencies, e-wallets, and bank transfers,
            all processed with the highest level of security and privacy. Our 24/7 customer support team ensures your questions are answered quickly —
            whenever you need assistance.
         </p>
         <p className='text-sm leading-5 block lg:hidden relative'>
            Welcome to CASINO, your new destination for the ultimate online social casino experience. Whether you're here to explore exclusive CASINO
            Originals or enjoy your favorite games from the world’s top iGaming providers, CASINO offers a polished, fair, and exciting platform that
            keeps players coming back.
         </p>
         <button
            className='
          block w-full mx-auto mt-4
          lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-5 lg:w-[250px] lg:mt-0
          h-[40px] bg-primary-blue rounded-[2px] text-xs leading-[14px] font-semibold tracking-[0.1px] 
          hover:bg-blue-700 transition duration-200 uppercase relative z-20
        '
         >
            <Link href='/about'>read more</Link>
         </button>
      </section>
   )
}

export default About
