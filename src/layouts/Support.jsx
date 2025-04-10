import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Button from '../components/Button'
import SupportCard from '../components/SupportCard'

import ImageOne from '../assets/scardimg1.png'
import ImageTwo from '../assets/scardimg2.png'
import ImageThree from '../assets/scardimg3.png'
import ImageFour from '../assets/scardimg4.png'
import ImageFive from '../assets/scardimg5.png'
const Support = () => {
  return (
    <section className='bg-[#F6F5FF] py-100'>
        <Container>
           <Flex className='gap-[30px] flex-wrap'>
            <div className='w-370'>
                <Heading text='What We Do'/>
                <p className='text-lg text-[#6C7D93] font-san leading-8 tracking-[0.5px] pt-5 pb-14'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                <Button className='bg-fourth border border-transparent hover:bg-transparent hover:text-fourth hover:border-fourth' text='Contact Us'/>
            </div>
            <SupportCard image={ImageOne} title='Web Design & Dev ' text='Social media has changed the way we interact & do business while creating'/>
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