import React from 'react'
import Nav from '../layouts/Nav'
import Banner from '../layouts/Banner'
import Gallary from '../layouts/Gallary'
import Choose from '../layouts/Choose'
import Support from '../layouts/Support'
import Impact from '../layouts/Impact'
import Plan from '../layouts/Plan'
import Aboutus from '../layouts/Aboutus'
import Like from '../layouts/Like'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Gallary/>
        <Choose/>
        <Support/>
        <Impact/>
        <Plan/>
        <Aboutus/>
        <Like/>
        <Footer/>
    </div>
  )
}

export default Home