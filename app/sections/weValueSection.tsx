import React from 'react'
import Image from 'next/image'

import WeValueCard from '../component/weValue'
const Value = () => {
  return (
    <>
    
   <div className=' bg-value bg-cover grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-8 lg:py-[100px] lg:px-[150px] p-[16px] items-center bg-[#F6F9F8] border-2'>
   <span className='pl-[37px] pr-[12px]'>
       <Image src='/assets/iphoneCard.svg' alt='iphone' 
        layout="responsive"
        width={16}   // Aspect ratio width
        height={9}/>
      </span>
       

       <WeValueCard/>
     
     
 
   </div>
   
    </>
  )
}

export default Value