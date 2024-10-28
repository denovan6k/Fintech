import React from 'react'
import Card from '../component/card'
import img1 from '@/public/assets/chs.png' 
import img2 from '@/public/assets/dashboard1.png'
export  const styles = {
    title:'Create A Card That is Unique And Customized',
    title1:'Personalized Insights And Financial Goals',
    description:'we offer a comprehensive range of innovative financial services tailored to meet your needs. Our services include High-Yield Savings Accounts.',
    description1:'savings accounts that offer competitive interest rates and flexible deposit options. Investment Invest wisely with our personalized.Our services include High-Yield Savings ',
    titleClass:'text-3xl text-black max-w-[445px] ',
    titleClass1:'text-3xl  text-slate-100 max-w-[445px] ',
    desClass:'text-[#676666] text-wrap max-w-[478px]',
    desClass1:'text-[#A7A7A7] text-wrap max-w-[478px]',
    desimag:'flex flex-col gap-[69px] ',
    imgclass:'justify-center flex item-center',
    imgclass1:'',
    icon:'/assets/chart.svg',
    icon1:'/assets/gear.svg',
    iconClass:'flex  rounded-full p-[9px] items-center bg-[#03A300] max-w-[42px]',
    className:'flex flex-col gap-3 pt-[54px] px-[41px] p-[14px] rounded-2xl bg-[#F6F9F8] border-2',
    className1:'flex flex-col gap-3 p-[54px] px-[41px]  rounded-2xl bg-[#001027]',
}
const TwoCard = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:gap-8 pt-[24px] lg:px-[150px] px-[16px] gap-4'>
    <Card title={styles.title} 
    titleClass={styles.titleClass} 
    description={styles.description} 
    descriptionClass={styles.desClass}
    imageClass={styles.imgclass}
    desImageClass={styles.desimag} 
    img={img1}
    icon={styles.icon}
    iconClass={styles.iconClass}
    className={styles.className}
    />
      <Card title={styles.title1} 
    titleClass={styles.titleClass1} 
    description={styles.description1} 
    descriptionClass={styles.desClass1}
    imageClass={styles.imgclass1}
    desImageClass={styles.desimag} 
    img={img2}
    icon={styles.icon1}
    iconClass={styles.iconClass}
    className={styles.className1}
    />
    </div>
  )
}

export default TwoCard