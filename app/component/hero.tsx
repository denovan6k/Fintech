'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

 const Herosection = () => {
  return (
    <>
     <div className=' flex flex-col justify-center items-start gap-3'>
        <span className='text-md uppercase py-[6px] px-[12px] flex gap-2 rounded-full bg-[#9796962e] '>
            <Image src='/assets/fire.svg' alt='fire' width={14} height={14} />
            <p>100% TRUSTED PLATFORM</p></span>
        <ul className='text-3xl lg:text-6xl max-w-[558px] flex flex-col gap-4'>
            <li className='text-[#DCDCDC]'>
            Finance with Security And 
            </li>
            <li className='text-[#E2FF54]'>
            Flexibility
            </li>
            <li className=''>

            </li>
            
        </ul>
        <span className='max-w-[500px]'>
        <p className='text-[18px] text-wrap text-[#DCDCDC] '>
            no-fee checking account with cash back rewards. Enjoy fee-free banking and earn cash back on your everyday purchases.
            </p>
        </span>
        
            <div className='flex '>
            <Button variant='default' size='sm' className='rounded-full bg-[#00B512] text-[#F9FAFB] px-[24px] py-[32px] text-lg'>
                Open Account
            </Button>
            <Button variant='default' size='sm' className='-ml-3 rounded-full bg-[#FBF9F1] text-[#F9FAFB] h-[62px] w-[62px]'>
                <Image src='/assets/arrow-right.svg' alt='arrow' width={24} height={24}/>
            </Button>
          
            </div>
     </div>
    </>
  )
}
export default Herosection