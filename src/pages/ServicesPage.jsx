import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesSection from '../components/Services'
import FareEstimator from '../components/FareEstimator'

export default function ServicesPage() {
  return (
    <>
    <Navbar/>
    <ServicesSection/>
    <FareEstimator/>
    <Footer/>
    </>
  )
}
