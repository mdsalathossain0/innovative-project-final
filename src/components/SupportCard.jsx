import React from 'react'
import Images from '../components/Images'
import SubHeading from '../components/SubHeading'


const SupportCard = ({title,text,image}) => {
  return (
    <div className='w-370 py-12 bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center group/one hover:bg-[#6B62C5] duration-500'>
        <Images classname='flex justify-center items-center' src={image}/>
        <h4 className='text-[30px] text-secondary font-san font-bold pt-8 group-hover/one:text-white duration-300'>{title} </h4>
        <SubHeading className='w-[278px] text-center pb-3 group-hover/one:text-white duration-300' text={text}/>
        <h6 className='text-lg font-san font-bold relative group/two group-hover/one:text-white duration-300'>Read more <span className='w-[24px] h-[35px] bg-[#1bbf0040] absolute -top-[2px] -right-3 rounded-r-[100px] group-hover/two:w-[124px] group-hover/two:rounded-[100px] group-hover/one:bg-[#ffffff33] duration-300 '></span></h6>
    </div>
  )
}

export default SupportCard