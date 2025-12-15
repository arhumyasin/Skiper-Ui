'use client'

import React from 'react'
import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from '../ui/minimal-card'
import NumberFlow from '@number-flow/react'


const TemplateCard = () => {

     const cards = [
    {
      title: "Landing Page",
      description:
        "Modern landing page template featuring Framer Motion animations, custom navigation components, and responsive design optimized for conversions",
      src: "https://legacy.skiper-ui.com/_next/image?url=https%3A%2F%2Fi.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExYTFjaG1wM3o0ZzBlbXA2Z2Ywc243d2ttdGZpZXVpbXdmYjJreHp5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FsZ7wUinnbIQYlucMXv%2Fgiphy.gif&w=640&q=75",
    },
    {
      title: "Manifest",
      description:
        "Vector embedding solution for building Perplexity-style AI applications with RAG retrieval, real-time source citations, and pgvector search functionality",
      src: "https://legacy.skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExaWVwNXVkdXM3aWM4NXM2a2s2czFhd283NHdrbWFsdm43bGdsMXp4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FSM08k77xWhQtQDDluI%2Fgiphy.gif&w=640&q=75",
    },
    {
      title: "Dev Portfolio",
      description:
        "Comprehensive SEO analysis tool with web crawling, performance testing, and AI-powered optimization recommendations for website improvements",
      src: "https://legacy.skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia4.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExanI3bjNzdTliOTF0aW9xMzY3Y21sdnE3Nnowb3l6YW4xeXZtdTE0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FL9F8Kt6IYdRvHbcHvl%2Fgiphy.gif&w=640&q=75",
    },
  ]



  return (
    <div>
        <div className="w-full max-w-9x mt-30 mb-20">
      <div className="flex flex-col justify-center rounded-lg p-4">
        <div className="flex flex-wrap items-center justify-center ">
          {cards.map((card, index) => (
            <MinimalCard className="m-2 w-[460px] " key={index}>
              <MinimalCardImage
                className="h-[320px]"
                src={card.src}
                alt={card.title}
              />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
          ))}
        </div>
      </div>
    </div>









    <div className="mx-auto flex h-[90px] max-w-[480px] items-center justify-center gap-4 rounded-3xl border-2 border-dashed px-6"><div><svg     width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.67236 6.66675V14.6667Z" fill="#6AF9D7"></    path><path d="M4.67236 6.66675V14.6667" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.0055 3.91992L9.33887 6.66659H13.2255C13.4325 6.66659 13.6367 6.71478 13.8218 6.80735C14.007 6.89992 14.168 7.03432 14.2922 7.19992C14.4164 7.36551 14.5003 7.55775 14.5374 7.7614C14.5744 7.96506 14.5635 8.17454 14.5055 8.37325L12.9522 13.7066C12.8714 13.9835 12.703 14.2268 12.4722 14.3999C12.2414 14.573 11.9607 14.6666 11.6722 14.6666H2.6722C2.31858 14.6666 1.97944 14.5261 1.72939 14.2761C1.47934 14.026 1.33887 13.6869 1.33887 13.3333V7.99992C1.33887 7.6463 1.47934 7.30716 1.72939 7.05711C1.97944 6.80706 2.31858 6.66659 2.6722 6.66659H4.5122C4.76026 6.66645 5.00336 6.59713 5.21417 6.4664C5.42498 6.33567 5.59515 6.14873 5.70553 5.92659L8.00553 1.33325C8.31992 1.33715 8.62936 1.41203 8.91074 1.55232C9.19211 1.6926 9.43815 1.89466 9.63047 2.14339C9.82279 2.39212 9.95641 2.68109 10.0214 2.98872C10.0863 3.29635 10.0809 3.61468 10.0055 3.91992Z" fill="#6AF9D7" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path></svg><h3 className="flex text-xl font-bold ">
    <NumberFlow value={12}/>
    %</h3><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3389 9.33325V1.33325Z" fill="#FDBA72"></path><path d="M11.3389 9.33325V1.33325" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.00573 12.0799L6.67239 9.33325H2.78573C2.57873 9.33325 2.37458 9.28506 2.18944 9.19249C2.0043 9.09992 1.84326 8.96551 1.71906 8.79992C1.59486 8.63432 1.51093 8.44209 1.4739 8.23843C1.43687 8.03478 1.44777 7.8253 1.50573 7.62659L3.05906 2.29325C3.13984 2.0163 3.30826 1.77301 3.53906 1.59992C3.76985 1.42682 4.05057 1.33325 4.33906 1.33325H13.3391C13.6927 1.33325 14.0318 1.47373 14.2819 1.72378C14.5319 1.97382 14.6724 2.31296 14.6724 2.66659V7.99992C14.6724 8.35354 14.5319 8.69268 14.2819 8.94273C14.0318 9.19278 13.6927 9.33325 13.3391 9.33325H11.4991C11.251 9.33338 11.0079 9.40271 10.7971 9.53344C10.5863 9.66417 10.4161 9.85111 10.3057 10.0733L8.00573 14.6666C7.69134 14.6627 7.3819 14.5878 7.10052 14.4475C6.81915 14.3072 6.57311 14.1052 6.38079 13.8565C6.18847 13.6077 6.05485 13.3187 5.9899 13.0111C5.92495 12.7035 5.93036 12.3852 6.00573 12.0799Z" fill="#FDBA72" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p className="text-lg opacity-60">of Next Js Saas Products Looks similar right ? Lets Change the approach</p></div>








    </div>
  )
}

export default TemplateCard
