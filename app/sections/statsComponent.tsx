import Image from 'next/image'
import React from 'react'
import About from '../component/about'
import img1 from '@/public/assets/statistics.png'
const StatsComponent = () => {
  return (
    <>
    <section className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-8 lg:py-[120px] lg:px-[150px] px-[16px] items-center ' >
        <span className='p-[52px] flex items-center justify-center bg-[#F5F5F5]'>
      <Image src={img1} alt=''/>
      </span>
      <About />
    </section>
    
    </>
  )
}

export default StatsComponent