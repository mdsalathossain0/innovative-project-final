import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Button from '../components/Button'
import SupportCard from '../components/SupportCard'

import ImageOne from '../assets/scardimg1.png'
import ImageTwo from '../assets/sucardimg2.png'
import ImageThree from '../assets/sucardimg3.png'
import ImageFour from '../assets/sucardimg4.png'
import ImageFive from '../assets/sucardimg5.png'
const Support = () => {
  return (
    <section className='bg-[#F6F5FF] py-[50px] md:py-100'>
        <Container>
           <Flex className='gap-[30px] flex-wrap'>
            <div className='w-[320px] sm:w-[480px] md:w-370 mx-auto'>
                <Heading text='What We Do'/>
                <p className='text-lg text-[#6C7D93] font-san leading-8 tracking-[0.5px] pt-5 pb-14'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                <Button className='bg-fourth border border-transparent md:hover:bg-transparent md:hover:text-fourth md:hover:border-fourth' text='Contact Us'/>
            </div>
            <SupportCard className='mt-10 md:mt-0' image={ImageOne} title='Web Design & Dev ' text='Social media has changed the way we interact & do business while creating'/>
            <SupportCard image={ImageTwo} title='Software Dev  ' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
            <SupportCard image={ImageThree} title='Content Writing ' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
            <SupportCard image={ImageFour} title='Digital Marketing ' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
            <SupportCard image={ImageFive} title='Support & Training' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
           </Flex>
        </Container>
    </section>
  )
}

export default Support