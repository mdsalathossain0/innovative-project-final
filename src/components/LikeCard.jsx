import React from 'react'
import Flex from './Flex'
import Images from './Images'

import Likeimg from '../assets/likeimg.png'
import LikeList from './LikeList'
import SupportCardEffect from './SupportCardEffect'


const LikeCard = ({text}) => {
  return (
  
   
      <Flex className='flex-col md:flex-row gap-y-5 md:gap-y-0'>
        <div className='w-auto pb-8 md:w-6/12'>
        <div className='w-[320px] sm:w-[500px] md:w-[380px] h-[220px] mx-auto rounded-20'>
            <Images className='w-full h-full' src={Likeimg}/>
        </div>
        </div>
        <div className='w-auto md:w-6/12'>
        <Flex className='gap-x-3 px-3 justify-center md:justify-start md:px-0 md:gap-x-6'>
        <LikeList text='News'/>
        <LikeList text='By'/>
        <LikeList text='Tomas Nikelson '/>
        <LikeList text='Posted'/>
        <LikeList text='5 Hours Ago '/>
        </Flex>
        <h4 className='text-2xl sm:text-[26px] md:text-[30px] px-3 md:px-0 text-secondary font-san font-bold leading-14 -tracking-[1.5px] py-4'>{text}</h4>
        <div className='ml-3 md:ml-0'>
        <SupportCardEffect className=' -top-[2px] -right-2 '/>
        </div>
        </div>
    </Flex>
  )
}

export default LikeCard