import React from 'react'
import Images from '../components/Images'
import ChooseImg from '../assets/choose.png'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'

const ChooseCard = ({text,className}) => {
  return (
     <div className='w-[568px] pb-1'>
        <Flex className={`gap-x-9 items-center py-7 pl-2  rounded-[12px] ${className}`}>
            <Images src={ChooseImg}/>
            <SubHeading className='w-[320px]' text={text}/>
        </Flex>
     </div>
  )
}

export default ChooseCard