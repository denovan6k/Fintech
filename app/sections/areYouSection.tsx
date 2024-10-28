import React from 'react'
import Image from 'next/image'
import AreYouCard from '../component/areYou'

const AreYouSection = () => {
  return (
    <>
    
   <div className='grid bg-are bg-cover md:grid-cols-2 grid-rows-2 md:grid-rows-1 rounded-3xl  lg:px-[75px] px-[16px] items-center bg-[#F6F9F8] border-2'>
   
   <AreYouCard/>


   <span className='pl-[37px] pr-[12px]'>
       <Image src='/assets/barcode.svg' alt='iphone' 
        layout="responsive"
        width={16}   // Aspect ratio width
        height={9}/>
      </span>
       

       
     
     
 
   </div>
   
    </>
  )
}

export default AreYouSection