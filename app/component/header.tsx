import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import img1 from '@/public/assets/upgrade-inc-logo-vector-removebg-preview 1.png'
// import MenuBar from './menu'

const Header = () => {
  return (
    <>
          <nav className='flex justify-between items-center text-[#DCDCDC] lg:px-[150px] lg:pt-[30px] p-[16px]'>
      <div>
        <Image
          className=""
          src={img1}
          alt="Next.js logo"
          
          
        />
      </div>
     
        <ul className='md:gap-4 hidden md:flex '>
            <li>
                Personal Loan
            </li>
            <li>
                One Card
            </li>
            <li>
                Savings
                </li>
                <li>
                   Checking
                </li>
                <li>
                   Help
                </li>
        </ul>
        
        <Button className='text-white border-2 border-[#DCDCDC] hidden md:flex'>
            Sign up
        </Button>
       
       
        </nav>  </>
  )
}

export default Header