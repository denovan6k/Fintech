import React from 'react'
import Image from 'next/image'
type Props = {
    name:string
    title:string
}
const Services = ({name,title}:Props) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center mt-6'>
 <span className='text-md uppercase py-[6px] px-[12px] flex gap-2 rounded-full bg-[#9796962e] '>
            <Image src='/assets/fire.svg' alt='fire' width={14} height={14} />
            <p>{title}</p></span>
      
      <h1 className='text-3xl text-center font-bold text-wrap max-w-[615]'>
        {name}
      </h1>
    </div>
  )
}

export default Services