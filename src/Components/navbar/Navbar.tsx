import React from 'react'
import NavPart1 from './NavPart1'
import NavPart2 from './NavPart2'

const navbar = () => {
  return (
    <div className='flex justify-between items-center py-7 px-40'>
      <NavPart1></NavPart1>
      <NavPart2></NavPart2>
    </div>
  )
}

export default navbar
