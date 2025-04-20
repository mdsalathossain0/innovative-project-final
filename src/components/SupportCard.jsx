import React from 'react'
import Images from '../components/Images'
import SubHeading from '../components/SubHeading'
import SupportCardEffect from './SupportCardEffect'


const SupportCard = ({title,text,image, className}) => {
  return (
    <div className={`w-[320px] sm:w-[480px] md:w-370 mx-auto py-8 md:py-12 bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center group/one md:hover:bg-[#6B62C5] duration-500 ${className}`}>
        <Images clasName='flex justify-center items-center' src={image}/>
        <h4 className='text-[26px] md:text-[30px] text-secondary font-san font-bold pt-8 md:group-hover/one:text-white duration-300'>{title} </h4>
        <SubHeading className='w-[278px] text-center pb-3 md:group-hover/one:text-white duration-300' text={text}/>
        <SupportCardEffect className='top-0 -right-3'/>
    </div>
  )
}

export default SupportCard