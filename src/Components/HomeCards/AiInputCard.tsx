import React from 'react'
import AiInput from '../ui/ai-input'
import { div } from 'framer-motion/client'
import { Badge } from 'lucide-react'
import BadgeButton from '../ui/badge-button'

const AiInputCard = () => {
  return (

    <div className='rounded-[34px] border-[#404040] border-1 w-[70%]  mx-auto flex items-center justify-center flex-col'>
        <div className="rounded-[34px] border-[#0A0A0A] border-8 w-full h-full mx-auto bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90">
      <h1 className='relative left-0 text-4xl font-bold px-[30px] py-[20px] w-[350px]'>AI Input ✨</h1>
      <p className='px-[30px] top-0'>Seamless AI Chat Input box</p>
            <AiInput/>
            </div> 
        </div>
  )
}

export default AiInputCard
