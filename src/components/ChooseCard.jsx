import React from 'react'
import Images from '../components/Images'
import ChooseImg from '../assets/choose.png'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'

const ChooseCard = ({text,className}) => {
  return (
     <div className='w-[320px] sm:w-[500px] mx-auto md:w-[568px] pb-1'>
        <Flex className={`gap-x-3 md:gap-x-9 items-center py-5 md:py-7 pl-2  rounded-[12px] ${className}`}>
            <Images src={ChooseImg}/>
            <SubHeading className='w-[280px] sm:w-[460px] md:w-[320px]' text={text}/>
        </Flex>
     </div>
  )
}

export default ChooseCard