import React from 'react'
import Image from 'next/image'
import img1 from '@/public/assets/progressbar.png'
import img2 from '@/public/assets/fire.svg'
const About = () => {
  return (
    <>
    <main className='flex flex-col gap-4'>
    <div>
        <span className='flex gap-2 rounded-full px-[12px] py-[6px]'>
        <Image src={img2} alt=''/>
        <h1 className='text-sm'>   About Us </h1></span>
        <p className='text-3xl lg:text-5xl mt-[22px] text-wrap max-w-[524px] uppercase'>
        All your money needs in one app
        </p>
        
    </div>
    <div className='flex gap-2'>
    
        <Image src={img1} alt=''/>
        <div className='text-black flex flex-col gap-3 '>
        <ul className='bg-[#F1FFD2] max-w-[410px]  p-[24px] rounded-2xl'>
            <li className='text-xl font-bold'> Expenses Tracker </li>
            <li className='text-wrap'> Our comprehensive selection of medications, supplements, and healthcare products . </li>
        </ul>
        <ul className='text-sm max-w-[410px] p-[24px] rounded-2xl border-2 border-slate-200'>
        <li className='text-xl font-bold'> Crypto Connection </li>
        <li className='text-wrap'>From advanced imaging technology such as MRI and CT scanners to precision surgical tools.</li>
        </ul>
        <ul className=' p-[24px] rounded-2xl max-w-[410px] border-2 border-slate-200'>
        <li className='text-xl font-bold'>Automated Invoicing </li>
        <li className='text-wrap'>We&apos;re committed to leveraging the latest innovations in medical technology. </li>
        </ul>
        </div>
    </div>
    </main>
    
    </>
  )
}

export default About