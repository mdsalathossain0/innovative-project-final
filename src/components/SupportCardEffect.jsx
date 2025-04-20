import React from 'react'

const SupportCardEffect = ({className}) => {
  return (
    <span className='bg-[#1bbf0040] py-1 px-2 rounded-[100px] text-lg font-san font-bold relative group/two md:group-hover/one:text-white duration-300'>Read more <span className={`md:w-[24px] md:h-[35px] md:bg-[#1bbf0040] absolute  rounded-r-[100px] md:group-hover/two:w-[124px] md:group-hover/two:rounded-[100px] md:group-hover/one:bg-[#ffffff33] duration-300 ${className}`}></span></span>
  )
}

export default SupportCardEffect