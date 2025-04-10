import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'
import ChooseCard from '../components/ChooseCard'

const Choose = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <Flex >
                <div className='w-7/12'>
                   <ChooseCard className='shadow-xl' text='We solve real-world problems through people and the web.'/>
                   <ChooseCard className='hover:shadow-xl duration-300' text='We make processes and technology work efficiently together.'/>
                   <ChooseCard className='hover:shadow-xl duration-300' text='We advance improve existing technology through research and development.'/>
                   <ChooseCard className='hover:shadow-xl duration-300' text='We develop long-lasting and scalable solutions, relationships partnerships.'/>
                </div>
                <div className='w-5/12'>
                    <Heading text='Why Choose Us'/>
                    <SubHeading className='pt-3 pb-10' text='We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.'/>
                    <Button className='bg-fourth border border-transparent hover:bg-transparent hover:border-fourth hover:text-fourth' text='Contact Us'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Choose