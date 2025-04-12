import React from 'react'

const SupportCardEffect = ({className}) => {
  return (
    <span className='text-lg font-san font-bold relative group/two group-hover/one:text-white duration-300'>Read more <span className={`w-[24px] h-[35px] bg-[#1bbf0040] absolute  rounded-r-[100px] group-hover/two:w-[124px] group-hover/two:rounded-[100px] group-hover/one:bg-[#ffffff33] duration-300 ${className}`}></span></span>
  )
}

export default SupportCardEffect