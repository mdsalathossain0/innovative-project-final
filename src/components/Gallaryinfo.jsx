import React from 'react'

const Gallaryinfo = ({heading, text}) => {
  return (
    <div className='w-auto mx-auto text-center border-b-2 md:border-b-0 md:border-r-2 border-[#4f585f33] pb-10 md:pb-0 md:pr-5 last:border-0 '>
        <h4 className='text-[36px] sm:text-[44px] md:text-[64px] text-fourth font-san font-extrabold '>{heading}</h4>
        <p className='text-[26px] sm:text-[30px] md:text-[36px] text-secondary font-san font-bold'>{text}</p>
    </div>
  )
}

export default Gallaryinfo