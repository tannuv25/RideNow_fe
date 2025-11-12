import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturesSection from '../components/Features'
import HowItWorksSection from '../components/HowItWork'
import AboutSection from '../components/About'
import TestimonialsSection from '../components/Testimonial'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import ServicesSection from '../components/Services'

export default function Homepage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ServicesSection/>
    <FeaturesSection/>
    <HowItWorksSection/>
    <AboutSection/>
    <TestimonialsSection/> 
    <CTASection/>
     <Footer/>
    </>
  )
}
