import React from 'react'
import Card from '../component/card'
import img1 from '@/public/assets/expmain.png'
import Image from 'next/image'
function ThreeCard() {
   
  return (
    <div className='grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 pt-[20px] pb-[40px] lg:px-[150px] px-[16px] gap-8 mx-auto'>
      <Card   
      description='we offer a comprehensive range of innovative financial services tailored to meet your needs.'
       title='100% Description'
       titleClass='text-black text-3xl text-wrap font-bold'
       descriptionClass='text-[16px] text-[#403F3F] text-wrap'
       className='flex flex-col gap-2 py-[64px] px-[32px] bg-[#E2FF54] max-w-[363px] rounded-2xl  '
       />
       <span className='max-w-[364px]'>
       <Image src={img1} alt='' />
       </span>
       
      <Card 
      description='Services Page' 
      title='Visit Our'
      titleClass='text-3xl'
      descriptionClass='text-3xl'
      
      className='flex flex-col items-center py-[64px] px-[32px] bg-[#2D907A] gap-2 justify-center text-white  max-w-[363px] rounded-2xl'/>
    </div>
  )
}

export default ThreeCard