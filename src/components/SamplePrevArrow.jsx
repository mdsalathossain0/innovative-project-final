import React from 'react'
import { GrFormPrevious } from 'react-icons/gr'

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
     <div
          className={`${className} z-10 absolute top-1/2 -translate-y-1/2 left-3 md:-left-20 w-[30px] md:w-[60px] h-[30px] md:h-[60px] rounded-full bg-fourth flex justify-center items-center`}
          onClick={onClick}
        > 
        <div><GrFormPrevious className='text-white text-xl md:text-[30px]' /></div>
        </div>
  )
}

export default SamplePrevArrow