import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Images from '../components/Images'
import { FaStar } from "react-icons/fa6";
import Flex from '../components/Flex'


import AboutImg from '../assets/aboutus.png'

const Aboutus = () => {
  return (
    
    <section className='py-100 bg-[#F8F8FF]'>
        <Container>
            <Heading className='text-center pb-[150px]' text='What The People Thinks About Us '/>
            <div className='w-[1080px] mx-auto bg-white shadow-xl text-center rounded-20 relative'>
                <div className='w-[147px] h-[147px] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Images className='w-full h-full rounded-full' src={AboutImg}/>
                </div>
                <Flex className='justify-center gap-x-2 pt-[100px]'>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>

                </Flex>
                <p className='w-[800px] mx-auto text-center pt-8 pb-12 text-third text-2xl font-paprika leading-10'>Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.</p>
                <h6 className='text-[25px] text-[#221A2C] font-san font-bold leading-10'>Lukan Depina</h6>
                <p className='text-[16px] text-third font-paprika font-normal leading-6 pb-14'>Ceo And Head Of Idea</p>
            </div>
        </Container>
    </section>
  )
}

export default Aboutus