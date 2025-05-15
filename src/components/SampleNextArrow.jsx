import React from 'react'
import { MdNavigateNext } from 'react-icons/md'

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 right-3 md:-right-20 w-[30px] md:w-[60px] h-[30px] md:h-[60px] rounded-full bg-fourth flex justify-center items-center`}
      onClick={onClick}
    > 
    <div><MdNavigateNext className='text-white text-xl md:text-[30px]'/></div>
    </div>
  )
}

export default SampleNextArrow