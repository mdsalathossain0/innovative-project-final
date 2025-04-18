import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import List from '../components/List'
import Button from '../components/Button'


import LogoImg from '../assets/mainlogo.png'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-[#160c6d80] py-4 absolute top-0 left-0 w-full'>
        <Container>
            <Flex className='items-center'>
                <div className='w-[20%]'>
                    <Link to='/'><Images src={LogoImg} alt='Logo'/></Link>
                </div>
                <div className='w-[60%]'>
                <Flex className='gap-x-10'> 
               

                
                <Link to='/'>
                <Flex className='gap-x-2 items-center'>
                <List  text='Home' /><FaAngleDown className='text-white text-lg '/>
                </Flex>
                </Link>
                <Link to='/about'>
                <Flex className='gap-x-2 items-center'>
                <List text='About'/><FaAngleDown className='text-white text-lg '/>
                </Flex>
                </Link>
                <Link to='/service'>
                <Flex className='gap-x-2 items-center'>
                <List text='Service'/><FaAngleDown className='text-white text-lg '/>
                </Flex>
                </Link>
                <Link to='/portfolio'>
                <Flex className='gap-x-2 items-center'>
                <List text='Portfolio'/><FaAngleDown className='text-white text-lg '/>
                </Flex>
                </Link>
                <Link to='/price'>
                <Flex className='gap-x-2 items-center'>
                <List text='Price'/><FaAngleDown className='text-white text-lg '/>
                </Flex>
                </Link>
                <Link to='/blog'>
                <Flex className='gap-x-2 items-center'>
                <List text='Blog'/><FaAngleDown className='text-white text-lg '/>
                </Flex>
                </Link>
                
               
                </Flex>
                </div>
                <div className='w-[20%] text-right'>
                <Button className='bg-fourth border border-transparent hover:bg-transparent hover:border-fourth' text='Contact Us'/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Nav