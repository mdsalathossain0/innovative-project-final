import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import PlanCard from '../components/PlanCard'

import PlanImg1 from '../assets/plancard1.png'
import PlanImg2 from '../assets/plancard2.png'
import PlanImg3 from '../assets/plancard3.png'

const Plan = () => {
  return (
    <section className='py-[50px] md:py-100'>
        <Container>
            <Heading className='!text-[30px] text-center pb-8 md:pb-16' text='Choose The Right Plan'/>
            <Flex className='flex-col md:flex-row gap-y-[30px] md:gap-x-[30px]'>
                <PlanCard title='Basic' text='Responsive Design Dynamic Elements Service Pages Custom Design & Features' price='160' image={PlanImg1}/>
                <PlanCard title='Professional' text='Responsive Design Dynamic Elements Service Pages Custom Design & Features' price='240' image={PlanImg2}/>
                <PlanCard title='Exclusive' text='Responsive Design Dynamic Elements Service Pages Custom Design & Features' price='325' image={PlanImg3}/>

            </Flex>
        </Container>
    </section>
  )
}

export default Plan