import React from 'react'
import Section7 from '../Components/HomepageComponents/Section7'
import Section6 from '../Components/HomepageComponents/Section6'
import Section5 from '../Components/HomepageComponents/Section5'
import Section4 from '../Components/HomepageComponents/Section4'
import Hero from '../Components/HomepageComponents/Hero'
import TextSlider from '../Components/HomepageComponents/TextSlider'
import TestimonialCarousel from '../Components/HomepageComponents/Testimonials'
import HowWeCanHelp from '../Components/HomepageComponents/Help'

function Homepage() {
  return (
    <div className='w-full h-auto flex flex-col overflow-x-hidden'>
      <Hero />
      <TextSlider />
      <TestimonialCarousel />
      <HowWeCanHelp />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  )
}

export default Homepage