import React from 'react'
import Images from './Images'


import SubHeading from './SubHeading'

const PlanCard = ({title,text,image, price}) => {
  return (
    <div className='group w-370 h-[560px] bg-white rounded-20 shadow-xl text-center hover:bg-[#6B62C5]'>
        <h5 className='text-[30px] text-secondary font-bold font-san leading-9 pt-[60px] pb-7 group-hover:text-white duration-300'>{title}</h5>
        <div className='w-370 h-[170px] bg-[#ECEDF0] group-hover:bg-[#70798B] duration-300'>
            <Images src={image} />
        </div>
        <h5 className='text-5xl text-fourth font-nunito font-extrabold pt-5 pb-3 leading-12 relative'><sup className='text-2xl'>$</sup>{price}</h5>
        <SubHeading className='w-[252px] mx-auto group-hover:text-white duration-300' text={text}/>
    </div>
  )
}

export default PlanCard