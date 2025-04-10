import React from 'react'

const Gallaryinfo = ({heading, text}) => {
  return (
    <div className='border-r-2 border-[#4f585f33] pr-5 last:border-0'>
        <h4 className='text-[64px] text-fourth font-san font-extrabold '>{heading}</h4>
        <p className='text-[36px] text-secondary font-san font-bold'>{text}</p>
    </div>
  )
}

export default Gallaryinfo