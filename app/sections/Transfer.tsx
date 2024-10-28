import React from 'react'
import Card from '../component/card'
import Image from 'next/image'
import img1 from '@/public/assets/twy.svg'
export  const styles = {
    title:'Transfer Across The Globe Are Free',
   
    
   
    titleClass:'text-3xl text-black max-w-[445px] ',
   
    
   
   
   
    icon:'/assets/browse.svg',
    
    iconClass:'flex  rounded-full p-[9px] items-center bg-[#03A300] max-w-[42px]',
    className:'flex flex-col gap-3 pt-[54px] px-[41px] p-[14px] rounded-2xl ',
    
}
const TranCard = () => {
  return (
    <div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 md:gap-6 items-center lg:px-[150px] px-[16px] '>


      <Image src={img1} alt='' />
    <Card title={styles.title} 
    titleClass={styles.titleClass} 
    icon={styles.icon}
    iconClass={styles.iconClass}
    className={styles.className}
    />
     
    </div>
  )
}

export default TranCard