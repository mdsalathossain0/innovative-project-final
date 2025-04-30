import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'
import ImpactCard from '../components/ImpactCard'

import ImpactIconOne from '../assets/impacticon1.png'
import ImpactIconTwo from '../assets/impacticon2.png'

import ImpactimgOne from '../assets/impactimage1.jpg'
import ImpactimgTwo from '../assets/impactimage2.jpg'
import ImpactimgThree from '../assets/impactimage3.jpg'
import ImpactimgFour from '../assets/impactimage4.png'
import Images from '../components/Images'

const Impact = () => {
  return (
    <section className='py-[50px] md:py-100'>
        <Container>
            <div className='text-center'>
                <Heading text='We create real impact'/>
                <SubHeading className='w-auto px-3 md:px-0 md:w-[558px] mx-auto pt-6 pb-[75px]' text='We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
                 '/>
            </div>
            <Flex className='flex-col md:flex-row'>
            <div className='w-auto mx-auto pb-[100px] md:w-6/12'>
                <Flex className='flex-col gap-y-10'>
                <ImpactCard image={ImpactIconOne} title='Competitive analysis' text='With an all-new look and powerful features, Ekko is the best way to ensure success for your business.'/>
                <ImpactCard image={ImpactIconTwo} title='Strategy And research' text='Save money and start building your website using the best tools available on the market today.'/>
                </Flex>
            </div>
            <div className='w-auto sm:mx-auto pl-[30px] sm:pl-0 md:pl-0  md:w-6/12 pb-[100px]'>
                <div className='w-[180px] md:w-[227px] h-[273px] rounded-20 relative'>
                    <Images className='w-full h-full rounded-20'   src={ImpactimgOne}/>
                    <div className=' w-[200px] md:w-[310px] h-[264px]  rounded-20 absolute top-[135px] left-[100px] md:left-[150px]'>
                    <Images className='w-full h-full rounded-20' src={ImpactimgTwo}/>
                    </div>
                    <div className='w-[120px] md:w-[161px] h-[140px]  rounded-20 absolute -top-5 left-[200px] md:left-[245px]'>
                    <Images className='w-full h-full rounded-20' src={ImpactimgThree}/>
                    </div>
                    <div className='w-[100px] md:w-[130px] h-[105px]  absolute top-10 -right-[145px] md:-right-[270px]'>
                    <Images className='w-full h-full rounded-20' src={ImpactimgFour}/>
                    </div>
                   
                </div>
            </div>
            </Flex>
            <div class="w-full h-[400px] bg-black ">
                    <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] from-0% to-[#D946EF] to-100%'>Abu Salat Lemon</h1>
            </div>
        </Container>

    </section>
  )
}

export default Impact