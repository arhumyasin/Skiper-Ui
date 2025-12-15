import React from 'react'

const NavPart1 = () => {
  return (
    <div className='flex items-center gap-6'>
        <a href="https://legacy.skiper-ui.com/" className="flex items-center gap-2.5">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8"><ellipse cx="30.882" cy="30.803" rx="30.3097" ry="30.2769" fill="url(#paint0_radial_36_64)"></ellipse><defs><radialGradient id="paint0_radial_36_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)"><stop offset="0.352001" stop-color="#090909"></stop><stop offset="0.591494" stop-color="#2770EA"></stop><stop offset="0.793825" stop-color="#FF7E97"></stop><stop offset="0.972489" stop-color="#FF9203"></stop></radialGradient></defs></svg>
          <h4 className='text-2xl font-bold'>legacy.skiper/ui</h4>
          <span className='border-2 rounded-[50px] border-[#FF401A] font-light px-2 py-0.8 text-xs text-[#FF401A]'>Beta</span>
        </a>
         <a href="https://legacy.skiper-ui.com/docs/components/theme-toggle-animations" className='text-gray-400 font-medium '>Components</a>
         <a href="https://legacy.skiper-ui.com/pricing" className='text-gray-400 font-medium '>Pricing</a>
         <a href="https://legacy.skiper-ui.com/newsletter" className='text-gray-400 font-medium '>Newsletter</a>
    </div>
  )
}

export default NavPart1
