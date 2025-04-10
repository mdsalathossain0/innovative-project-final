import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Flex from '../components/Flex'

const Banner = () => {
  return (
    <section className='bg-banner w-full  bg-cover bg-no-repeat bg-center '>
            <div className='bg-[#6b62c5e6] w-full py-[240px] text-center bg-cover bg-no-repeat bg-center '>
                <Container>
                <h1 className='text-[84px] text-fifth font-bold font-san leading-[100px]'>You're Unique.Your Website Should Be Too</h1>
                <p className=' w-[715px] mx-auto pt-5 pb-4 text-[24px] text-sixth font-normal font-paprika'>A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </p>

                <Flex className='gap-x-7 justify-center'>
                <Button className='bg-fourth border border-transparent hover:bg-transparent hover:border-fourth'  text='Get Free Quoto'/>
                <Button className='bg-transparent border border-fourth hover:bg-fourth' text='Learn More'/>
                </Flex>
                </Container>
            </div>
    </section>
  )
}

export default Banner