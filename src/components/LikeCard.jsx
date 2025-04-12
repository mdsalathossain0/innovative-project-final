import React from 'react'
import Flex from './Flex'
import Images from './Images'

import Likeimg from '../assets/likeimg.png'
import LikeList from './LikeList'
import SupportCardEffect from './SupportCardEffect'


const LikeCard = ({text}) => {
  return (
  
    <>
      <Flex>
        <div className='w-6/12'>
        <div className='w-[380px] h-[220px] mx-auto rounded-20'>
            <Images className='w-full h-full' src={Likeimg}/>
        </div>
        </div>
        <div className='w-6/12'>
        <Flex className='gap-x-6'>
        <LikeList text='News'/>
        <LikeList text='By'/>
        <LikeList text='Tomas Nikelson '/>
        <LikeList text='Posted'/>
        <LikeList text='5 Hours Ago '/>
        </Flex>
        <h4 className='text-[30px] text-secondary font-san font-bold leading-14 -tracking-[1.5px] py-4'>{text}</h4>
        <SupportCardEffect className='-top-[3px] -right-2 '/>
        </div>
    </Flex>
    </>
  )
}

export default LikeCard