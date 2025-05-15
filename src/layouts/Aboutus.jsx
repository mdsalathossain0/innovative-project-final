import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Images from '../components/Images'
import { FaStar } from "react-icons/fa6";
import Flex from '../components/Flex'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



import AboutImg from '../assets/aboutus.png'
import SampleNextArrow from '../components/SampleNextArrow';
import SamplePrevArrow from '../components/SamplePrevArrow';

const Aboutus = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
    
    <section className='py-[50px] md:py-100 bg-[#F8F8FF]'>
        <Container>
            <Heading className='text-center pb-[80px] md:pb-[150px]' text='What The People Thinks About Us '/>


           <Slider {...settings}>
      
         <div className='w-[350px] sm:w-[550px] md:w-[1080px] mx-auto bg-white shadow-xl text-center rounded-20 relative'>
                <div className='w-[147px] h-[147px] rounded-full mx-auto'>
                    <Images className='w-full h-full rounded-full' src={AboutImg}/>
                </div>
                <Flex className='justify-center gap-x-2 pt-[100px]'>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>

                </Flex>
                <p className='w-[320px]  sm:w-[500px] md:w-[800px] mx-auto text-center pt-8 pb-12 text-third text-lg sm:text-xl md:text-2xl font-paprika leading-10'>Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.</p>
                <h6 className='text-xl sm:text-2xl md:text-[25px] text-[#221A2C] font-san font-bold leading-10'>Lukan Depina</h6>
                <p className='text-base text-third font-paprika font-normal leading-6 pb-14'>Ceo And Head Of Idea</p>
            </div>
         <div className='w-[350px] sm:w-[550px] md:w-[1080px] mx-auto bg-white shadow-xl text-center rounded-20 relative'>
                <div className='w-[147px] h-[147px] rounded-full mx-auto'>
                    <Images className='w-full h-full rounded-full' src={AboutImg}/>
                </div>
                <Flex className='justify-center gap-x-2 pt-[100px]'>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>

                </Flex>
                <p className='w-[320px]  sm:w-[500px] md:w-[800px] mx-auto text-center pt-8 pb-12 text-third text-lg sm:text-xl md:text-2xl font-paprika leading-10'>Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.</p>
                <h6 className='text-xl sm:text-2xl md:text-[25px] text-[#221A2C] font-san font-bold leading-10'>Lukan Depina</h6>
                <p className='text-base text-third font-paprika font-normal leading-6 pb-14'>Ceo And Head Of Idea</p>
            </div>
         <div className='w-[350px] sm:w-[550px] md:w-[1080px] mx-auto bg-white shadow-xl text-center rounded-20 relative'>
                <div className='w-[147px] h-[147px] rounded-full mx-auto'>
                    <Images className='w-full h-full rounded-full' src={AboutImg}/>
                </div>
                <Flex className='justify-center gap-x-2 pt-[100px]'>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>

                </Flex>
                <p className='w-[320px]  sm:w-[500px] md:w-[800px] mx-auto text-center pt-8 pb-12 text-third text-lg sm:text-xl md:text-2xl font-paprika leading-10'>Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.</p>
                <h6 className='text-xl sm:text-2xl md:text-[25px] text-[#221A2C] font-san font-bold leading-10'>Lukan Depina</h6>
                <p className='text-base text-third font-paprika font-normal leading-6 pb-14'>Ceo And Head Of Idea</p>
            </div>
         <div className='w-[350px] sm:w-[550px] md:w-[1080px] mx-auto bg-white shadow-xl text-center rounded-20 relative'>
                <div className='w-[147px] h-[147px] rounded-full mx-auto'>
                    <Images className='w-full h-full rounded-full ' src={AboutImg}/>
                </div>
                <Flex className='justify-center gap-x-2 pt-[100px]'>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>

                </Flex>
                <p className='w-[320px]  sm:w-[500px] md:w-[800px] mx-auto text-center pt-8 pb-12 text-third text-lg sm:text-xl md:text-2xl font-paprika leading-10'>Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.</p>
                <h6 className='text-xl sm:text-2xl md:text-[25px] text-[#221A2C] font-san font-bold leading-10'>Lukan Depina</h6>
                <p className='text-base text-third font-paprika font-normal leading-6 pb-14'>Ceo And Head Of Idea</p>
            </div>
         <div className='w-[350px] sm:w-[550px] md:w-[1080px] mx-auto bg-white shadow-xl text-center rounded-20 relative'>
                <div className='w-[147px] h-[147px] rounded-full mx-auto'>
                    <Images className='w-full h-full rounded-full' src={AboutImg}/>
                </div>
                <Flex className='justify-center gap-x-2 pt-[100px]'>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>
                <FaStar className='text-[#FF7628]'/>

                </Flex>
                <p className='w-[320px]  sm:w-[500px] md:w-[800px] mx-auto text-center pt-8 pb-12 text-third text-lg sm:text-xl md:text-2xl font-paprika leading-10'>Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.</p>
                <h6 className='text-xl sm:text-2xl md:text-[25px] text-[#221A2C] font-san font-bold leading-10'>Lukan Depina</h6>
                <p className='text-base text-third font-paprika font-normal leading-6 pb-14'>Ceo And Head Of Idea</p>
            </div>
      

    </Slider>
        </Container>
    </section>
  )
}

export default Aboutus