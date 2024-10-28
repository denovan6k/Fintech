import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const WeValueCard = () => {
  return (
    <div>

<div className='flex flex-col justify-center items-start gap-3'>
        <span className='text-md uppercase py-[6px] px-[12px] flex gap-2 rounded-full bg-[#9796962e] '>
            <Image src='/assets/fire.svg' alt='fire' width={14} height={14} />
            <p>trustworthiness</p></span>
        <ul className='text-3xl lg:text-6xl max-w-[597px] flex flex-col gap-4'>
            <li className='text-[#DCDCDC] font-poppins'>
            We value your trust and security
            </li>
           
            
        </ul>
        <div className='flex flex-col text-[#676666] gap-4 text-wrap max-w-[597px]'>
        <p>
        Our mission is to make finance more accessible, transparent, and secure for everyone. With cutting.
        </p>
      
        </div>
        <span className='max-w-[500px]'>
       
        </span>
        
            <div className='flex '>
            <Button variant='default' size='sm' className='rounded-full border-2 border-[#40AF3E] text-black px-[24px] py-[32px] text-lg bg-white'>
                Get Started
            </Button>
            <Button variant='default' size='sm' className='-ml-3 rounded-full bg-[#00B512] text-white h-[62px] w-[62px]'>
                <Image src='/assets/arrow-right.svg' alt='arrow' width={24} height={24}/>
            </Button>
          
            </div>
     </div>
    </div>
  )
}

export default WeValueCard