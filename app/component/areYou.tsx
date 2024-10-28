import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
const AreYouCard = () => {
  return (
    <div>

<div className='flex flex-col justify-center items-start gap-3'>
        
        <ul className='text-6xl max-w-[597px] flex flex-col gap-4'>
            <li className=' uppercase'>
            Are you ready to start?
            </li>
           
            
        </ul>
        <div className='flex flex-col text-[#676666] gap-4 text-wrap max-w-[597px]'>
        <p>
        Personalize your settings, follow your progress, archive your highlights and notes automatically Glose is the ultimate reading 
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

export default AreYouCard