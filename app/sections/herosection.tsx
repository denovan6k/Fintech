import React from 'react'
import Image from 'next/image'
import Herosection from '../component/hero'
import img from '@/public/assets/Iphone ground.png'

const HeroSection = () => {
  return (
    <>
    
    <section className=' lg:grid-cols-2 lg:grid-rows-1  grid grid-rows-2 justify-between lg:gap-[150px] gap-4 lg:px-[150px] px-[16px]'>
        <Herosection />
        <div className='flex justify-center items-center'> 
        <Image src={img} alt='hero' className='mb-[40px] flex justify-center items-center' />
        </div>
        
     </section>
    
    </>
  )
}

export default HeroSection