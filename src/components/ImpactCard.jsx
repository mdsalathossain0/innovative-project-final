import React from 'react'
import Flex from './Flex'
import Images from './Images'
import SubHeading from './SubHeading'



const ImpactCard = ({title,text,image}) => {
  return (
    <div>
        <Flex className='items-start gap-x-9'>
            <div><Images src={image}/></div>
            <div>
                <h4 className='text-[30px] text-secondary font-san font-bold'>{title}</h4>
                <SubHeading className='w-[343px] pt-5' text={text}/>
            </div>
        </Flex>
    </div>
  )
}

export default ImpactCard