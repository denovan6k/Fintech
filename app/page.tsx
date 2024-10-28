import React from 'react'
import HeroSection from './sections/herosection'
import ThirdSection from './sections/twoIphonesection'
import Value from './sections/weValueSection'
import TestimoSection from './sections/testimoSection'
import TranCard from './sections/Transfer'
import AreYouSection from './sections/areYouSection'
import Header from './component/header'
import StatsComponent from './sections/statsComponent'
import Banner from './component/banner'
import Services from './component/services'
import ThreeCard from './sections/threeCards'
import TwoCard from './sections/twoCard'
import Upgrade from './component/Upgrade'
import HeroText from './component/button'
   
   
   
  
   
const page = () => {
  return (
    <div className='flex flex-col '>
      <header className='bg-image bg-cover flex flex-col gap-4'>
        <Header/>
        <HeroSection />
      </header>
      <Banner/>
      <StatsComponent/>
      <ThirdSection/>
     
      <Value/>
      <Services name='Can Help You Achieve Financial Success' title='Services'/>
      <TranCard/>
      <TwoCard/> 
      <ThreeCard/>
      <HeroText name='View More'/>
      <div className='lg:px-[150px]  p-[16px] py-[120px] flex flex-col gap-3 mx-auto'>
      <Services name='Get to Know Our Clients' title='Testimonial'/>
      <TestimoSection/>
      </div>
      <HeroText name='View More'/>
      <div className='lg:px-[150px] p-[16px] lg:py-[150px]'>
      <AreYouSection/>
      </div>
    
   
     
     <Upgrade/>
      
    </div>
  )
}

export default page