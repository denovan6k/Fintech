import React from 'react'
import Image from 'next/image'
import img1 from '@/public/assets/upgrade-inc-logo-vector-removebg-preview 1.png'
const Upgrade = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
         <Image src={img1} alt='logo' width={100} height={100}/>
         <div className='flex gap-4'>
         <Image src='/assets/ios.svg' alt='logo' width={100} height={100}/>
         <Image src='/assets/andriod.svg' alt='logo' width={100} height={100}/>  
         </div>
         <ul className='grid grid-cols-3 grid-rows-3  lg:flex gap-4 max-w-[782px] text-[#646161] p-[16px] '>
           <li>
           Personal Loan
           </li>
           <li>
           One Card
           </li>
           <li>
           Savings
            </li>
            <li>
            Checking
           </li>
           <li>
           Contact
           </li>
           <li>
           Help
           </li>
           <li>
           Support
           </li>
         </ul>
         <Image src='/assets/socials.svg' alt='logo' width={100} height={100} className='p-[16px]'/>
         <ul className='flex gap-1'>
            <li className='font-bold'>
            Send Your Feedback :
            </li>
            <li>
            moc.edargpu@tcatnoc
            </li>
         </ul>
         <p className='p-[16px] text-center'> Privacy Policy   |   Terms & Condition   |   Cookie Notice   |   Copyright Policy   |   Data Policy     </p>
         <p className='p-[16px]'> © 2024 Design Monks. All rights reserved. </p>
    </div>
  )
}

export default Upgrade