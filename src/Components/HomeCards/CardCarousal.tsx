import React from 'react'
import { CardCarousel } from '../ui/card-carousel'

const CardCarousal = () => {

    const images = [
        {src:"/card1.jpg", alt: "Image 1" },
        {src:"/card5.png", alt: "Image 1" },
        {src:"/card6.png", alt: "Image 1" },
  ]

  return (
    <div>
       <CardCarousel images={images}
        autoplayDelay={2000}
        showPagination={false}
        showNavigation={true}
       />
    </div>
  )
}

export default CardCarousal
