import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const HeroText = () => {
  return (
    <div>

<div className='flex flex-col justify-center items-start gap-3 '>
        <span className='text-md uppercase py-[6px] px-[12px] flex gap-2 rounded-full bg-[#9796962e] '>
            <Image src='/assets/fire.svg' alt='fire' width={14} height={14} />
            <p>Featured</p></span>
        <ul className='text-3xl lg:text-6xl max-w-[558px] flex flex-col gap-4'>
            <li className='uppercase'>
            All the features in one app
            </li>
           
            
        </ul>
        <div className='flex flex-col text-[#676666] gap-4 '>
        <li>
        Get 3% cash back on everyday purchases, 2% on everything else4
        </li>
        <li>
        Extra Spending Power when you have Rewards Checking through Upgrade6
        </li>
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

export default HeroText