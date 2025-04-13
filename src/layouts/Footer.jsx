import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'

import Logoimg from '../assets/mainlogo.png'
import FooterList from '../components/FooterList'

const Footer = () => {
  return (
    <footer className='bg-seventh pt-[130px] pb-14'>
        <Container>
            <Flex>
                <div className='w-5/12'>
                    <div>
                        <Images src={Logoimg}/>
                    </div>
                    <p className='w-[449px] pt-11 text-lg text-[#fafafee6] font-nunito font-normal leading-[180%] opacity-90'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>
                <div className='w-2/12'>
                   <h5 className='text-2xl text-[#fafafee6] font-san font-semibold leading-[140%] pb-12 opacity-90'>Features</h5>
                    <Flex className='flex-col gap-y-[30px]'>
                        <FooterList text='Home'/>
                        <FooterList text='About'/>
                        <FooterList text='Benifit'/>
                        <FooterList text='Pricing'/>
                        <FooterList text='Blog'/>
                    </Flex>
                </div>
                <div className='w-3/12'>
                <h5 className='text-2xl text-[#fafafee6] font-san font-semibold leading-[140%] pb-12 opacity-90'>Products</h5>
                    <Flex className='flex-col gap-y-[30px]'>
                        <FooterList text='Task Management'/>
                        <FooterList text='Company growth'/>
                        <FooterList text='Time tracking'/>
                    </Flex></div>
                <div className='w-2/12'>
                <h5 className='text-2xl text-[#fafafee6] font-san font-semibold leading-[140%] pb-12 opacity-90'>Support</h5>
                    <Flex className='flex-col gap-y-[30px]'>
                        <FooterList text='Customer service'/>
                        <FooterList text='Accessibility'/>
                        <FooterList text='Contact us'/>
                    </Flex>
                </div>
            </Flex>
            <Flex className='justify-between'>
                <div className='pt-11'>
                <p className='w-[449px] text-lg text-[#fafafee6] font-nunito font-normal leading-[180%] opacity-90'>@20201 Innovate.All rights reserved.</p>
                </div>
                <div  className='pt-11'>
                <p className='w-[449px]  text-lg text-[#fafafee6] font-nunito font-normal leading-[180%] opacity-90 inline'>Privacy policy</p>
                <p className='w-[449px]  text-lg text-[#fafafee6] font-nunito font-normal leading-[180%] opacity-90 inline pl-[30px]'>Terms & condition</p>
                </div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer