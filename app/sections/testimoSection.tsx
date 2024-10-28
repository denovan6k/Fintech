import React from 'react'
import { Test } from '../data/testimonail'
import Image from 'next/image'
const TestimoSection = () => {
  return (
    <div className='grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 lg:gap-[26px] gap-4 '>
         

         {Test.map((item,index)=>(
          <ul key={index} className={`flex flex-col gap-[28px] ${item.color} rounded-2xl lg:px-[47px] px-[16px] py-[36px] border`}>
             <li>
               <Image src='/assets/quote.svg' alt='img' width={52} height={52} />

             </li>
             <li className={item.quoteClass? item.quoteClass: 'text-[#161919] text-wrap'}>
              {item.quote}
             </li>
             <li className='flex items-center space-x-2'>
              <Image src={item.img} alt='img' width={52} height={52} />
              <div className='flex flex-col gap-[2px] '>
              <Image src='/assets/star.svg' alt='img' width={52} height={52} />
              <h1 className='text-[#161919] font-semibold'>{item.name}</h1>
              <p className={item.quoteClass?'text-[#A1A1A1]':'text-[#161919]'}>{item.description}</p>
              </div>
             </li>
          </ul>
         ))}


        
    </div>
  )
}

export default TestimoSection