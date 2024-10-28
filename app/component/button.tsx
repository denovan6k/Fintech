import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
type Props = {
    name:string
}
const HeroText = ({name}:Props) => {
  return (

        
            <div className='flex justify-center '>
            <Button variant='default' size='sm' className='rounded-full border-2 border-[#40AF3E] text-black px-[24px] py-[32px] text-lg bg-white'>
                {name}
            </Button>
            <Button variant='default' size='sm' className='-ml-3 rounded-full bg-[#00B512] text-white h-[62px] w-[62px]'>
                <Image src='/assets/arrow-right.svg' alt='arrow' width={24} height={24}/>
            </Button>
          
            </div>
   
  )
}

export default HeroText