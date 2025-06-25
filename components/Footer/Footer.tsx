import FirstRow from './FirstRow'
import SecondRow from './SecondRow'
import Security from './Security'
import ThirdRow from './ThirdRow'

function Footer() {
   return (
      <footer className='bg-background-dark-secondary'>
         <div className='mx-6 max-w-[1220px] lg:px-2.5 pt-[15px] lg:pt-[35px] pb-2.5 lg:pb-[25px] h-full flex flex-col justify-between items-center main-centered-lg'>
            <FirstRow />
            <SecondRow />
            <div className='py-6 border-y-[1.5px] border-[#282F48] w-full block lg:hidden'>
               <Security />
            </div>
            <ThirdRow />
         </div>
         <div className='block lg:hidden h-16 w-full bg-primary'></div>
      </footer>
   )
}
export default Footer
