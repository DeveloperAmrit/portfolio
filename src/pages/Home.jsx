import React from 'react'
import Hero from '../components/home/Hero'
import Skills from '../components/home/Skills'
import TShape from '../components/home/TShape'
import Acads from '../components/home/Acads'
import Projects from '../components/Shared/Projects'
import Socials from '../components/home/Socials'
import Certificates from '../components/home/Certificates'

const Home = () => {
  
  return (
    <div className='bg-gradient-to-b from-[#0a192f] to-[#0a192f] text-white divide-y divide-gray-800'>
      <Hero/>
      <Skills/>
      <TShape/>
      <Acads/>
      <Projects isSticky/>
      <Certificates/>
      <Socials/>
    </div>
  )
}

export default Home