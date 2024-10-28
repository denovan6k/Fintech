import React from 'react'
import Image from 'next/image'
import img1 from '@/public/assets/iphone2.png'
import HeroText from '../component/heroText'
const ThirdSection = () => {
  return (
    <>
    
   <div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8 lg:py-[100px] py-[16px] px-[16px] lg:px-[150px] items-center bg-[#F6F9F8] border-2'>
      <HeroText/>
      <span className='pl-[37px] pr-[12px]'>
       <Image src={img1} alt='iphone' 
        layout="responsive"
        width={16}   // Aspect ratio width
        height={9}/>
      </span>
   </div>
   
    </>
  )
}

export default ThirdSection