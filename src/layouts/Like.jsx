
import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import LikeCard from '../components/LikeCard'
import Flex from '../components/Flex'

const Like = () => {
  return (
    <section className='py-100 bg-[#F9F9FB]'>
        <Container>
            <Heading className='pb-16 pl-5 md:pl-[100px]' text='You May Also Like '/>
            <Flex className='flex-col gap-y-10'>
            <LikeCard text='Punto Pago Allows Quick And Secure Payments For Services In Panama'/>
            <LikeCard text='The User Can Also Replenish A Balance Make Remittances '/>
            <LikeCard text='The User Can Also Replenish A Balance Make Remittances '/>
            </Flex>
        </Container>
    </section>
  )
}

export default Like