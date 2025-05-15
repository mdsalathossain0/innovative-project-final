
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import List from '../components/List'
import Button from '../components/Button'


import LogoImg from '../assets/mainlogo.png'
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { useState } from 'react'
import { GiCrossedBones } from 'react-icons/gi'

const Nav = () => {

let [click, setClick] = useState(false)

let handleClick = ()=>{
  setClick(!click)
}

  return (
<>
{/*  Large device start */}
    <nav className='hidden lg:block bg-[#160c6d80] py-4 absolute top-0 left-0 w-full'>
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
     {/* Large device End */}

    {/*  Mobile device start */}
    <nav className='lg:hidden bg-[#160c6d80] px-5 relative'>
    <Container>
        <Flex className='items-center justify-between py-5'>
            <div >
                <Link to='/'><Images className='w-[60%]' src={LogoImg} alt='Logo'/></Link>
            </div>
          
           <div onClick={handleClick}>
           {
            click ? <GiCrossedBones className='text-lg text-white'/>:<IoReorderThreeOutline className='text-2xl text-white'/>
           }

           </div>
        </Flex>
    
       {
        click &&  <Flex className='gap-y-4 flex-col py-5 items-center justify-center bg-purple-500 rounded-20 absolute top-[76px] left-0 w-full'> 
           
        <Link to='/'>
        <Flex className='gap-x-2 items-center'>
        <List  text='Home' /><FaAngleDown className='text-white text-sm '/>
        </Flex>
        </Link>
        <Link to='/about'>
        <Flex className='gap-x-2 items-center'>
        <List text='About'/><FaAngleDown className='text-white text-sm '/>
        </Flex>
        </Link>
        <Link to='/service'>
        <Flex className='gap-x-2 items-center'>
        <List text='Service'/><FaAngleDown className='text-white text-sm '/>
        </Flex>
        </Link>
        <Link to='/portfolio'>
        <Flex className='gap-x-2 items-center'>
        <List text='Portfolio'/><FaAngleDown className='text-white text-sm '/>
        </Flex>
        </Link>
        <Link to='/price'>
        <Flex className='gap-x-2 items-center'>
        <List text='Price'/><FaAngleDown className='text-white text-sm '/>
        </Flex>
        </Link>
        <Link to='/blog'>
        <Flex className='gap-x-2 items-center'>
        <List text='Blog'/><FaAngleDown className='text-white text-sm '/>
        </Flex>
        </Link>
        
       
        </Flex>
       }

    </Container>
</nav>
{/*   Mobile device End */}
</>
  )
}

export default Nav