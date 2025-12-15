'use client'

import CardFooter from '@/Components/Footer/CardFooter'
import AiInputCard from '@/Components/HomeCards/AiInputCard'
import CardCarousal from '@/Components/HomeCards/CardCarousal'
import CardSVG from '@/Components/HomeCards/CardSVG'
import SpecialCard from '@/Components/HomeCards/SpecialCard'
import TemplateCard from '@/Components/HomeCards/TemplateCard'
import ThemeChange from '@/Components/HomeCards/ThemeChange'
import MainContent from '@/Components/landingPage/MainContent'
import Navbar from '@/Components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <CardCarousal/>
      <TemplateCard/>
      <CardSVG/>   
      <SpecialCard/>
      <AiInputCard/>
      <ThemeChange/>
      <CardFooter/>
    </div>
  )
}

export default page
