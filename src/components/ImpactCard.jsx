import React from 'react'
import Flex from './Flex'
import Images from './Images'
import SubHeading from './SubHeading'



const ImpactCard = ({title,text,image}) => {
  return (
    
        <Flex className='items-start gap-x-4 md:gap-x-9'>
            <div className='pl-3 md:pl-0'><Images src={image}/></div>
            <div>
                <h4 className='text-2xl sm:text-[36px] md:text-[30px] text-secondary font-san font-bold'>{title}</h4>
                <SubHeading className='w-auto md:w-[343px] pt-5' text={text}/>
            </div>
        </Flex>

        
  
  )
}

export default ImpactCard