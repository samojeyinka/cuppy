import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Tag from '../components/Tag'
import About from '../components/About'
import Outings from '../components/Outings'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <Tag/>
    <About/>
    <Outings/>
    <Footer/>
    </>
  )
}

export default Home