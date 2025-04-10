import React from 'react'
import Container from '../components/Container'
import Images from '../components/Images'
import Flex  from '../components/Flex'

import GallaryImg1 from '../assets/gallaryimg1.png'
import GallaryImg2 from '../assets/gallaryimg2.png'
import GallaryImg3 from '../assets/gallaryimg3.png'
import GallaryImg4 from '../assets/gallaryimg4.png'
import Gallaryinfo from '../components/Gallaryinfo'

const Gallary = () => {
  return (
    <div>
        <section className='bg-[#EDE6F7] relative -z-20'>
        <Container>
            <Flex className='justify-around '>
                <div className='relative -top-[120px] -z-10'>
                <Images src={GallaryImg1}/>
                </div>
                <div className='relative -top-[120px] -z-10'>
                <Images src={GallaryImg2}/>
                </div>
                <div className='relative -top-[120px] -z-10'>
                <Images src={GallaryImg3}/>
                </div>
                <div className='relative -top-[120px] -z-10'>
                <Images src={GallaryImg4}/>
                </div>
            </Flex>
            <Flex className='justify-between pb-[80px]'>
                <Gallaryinfo heading='53k' text='Happy client'/>
                <Gallaryinfo heading='10k' text='Projects Done'/>
                <Gallaryinfo heading='120' text='Gets Award'/>
                <Gallaryinfo heading='16' text='Operated Years'/>
            </Flex>
        </Container>
        </section>
    </div>
  )
}

export default Gallary