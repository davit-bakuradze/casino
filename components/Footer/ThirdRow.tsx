import Security from './Security'

function ThirdRow() {
   return (
      <div className='relative mt-5 flex flex-col text-footer items-center text-sm leading-4 text-center'>
         <p>
            © 2025 <span className='font-bold text-white'>CASINO.COM</span>. All Rights Reserved.
         </p>
         <p className='mt-5 lg:mt-6 mb-4 lg:mb-5'>GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY! </p>
         <p className='text-xs leading-3.5'>
            CASINO casino is operated by CASINO B.V., ensuring a secure and fair gaming environment for all players. We strictly adhere to all
            regulatory requirements to maintain transparency and fairness. Our commitment to integrity and ethical practices is at the core of our
            business. We employ advanced security measures, including SSL encryption and robust firewall systems, to protect your personal and
            financial information. Promoting responsible gaming is a priority at CASINO Casino. We provide tools and resources to help you gamble
            responsibly. We offer a variety of secure payment methods and ensure seamless transactions. All payment processes are encrypted and
            compliant with industry standards. Our customer support team is available 24/7 to assist you with any questions or issues you may have.
            Contact us via Live Chat, Email, or Phone for prompt and professional assistance.
         </p>
         <div className='hidden lg:block absolute right-0 -top-2'>
            <Security />
         </div>
      </div>
   )
}
export default ThirdRow
