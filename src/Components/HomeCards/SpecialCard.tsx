import React from "react";
// import Image1 from "/images/card1.jpeg";
// import Image2 from "/images/card1.jpeg";
// import Image3 from "/images/card1.jpeg";
// import Image4 from "/images/card1.jpeg";
// import Image5 from "/images/card1.jpeg";
// import Image6 from "/images/card1.jpeg";
import FeatureCarousel from "../ui/feature-carousel";
import { cn } from "@/lib/utils";


const SpecialCard = () => {
  return (
<div className="w-[70%] mx-auto">
  <div className="rounded-[34px] bg-neutral-700 p-2 mb-20">
    <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
      <FeatureCarousel
        title="Components that pop"
        description="Showcase your features with smooth animations and transitions"
        // Example classes for responsive layout
        step1img1Class={cn(
          "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
          "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[57%] md:left-[35px] md:top-[29%]",
          "md:group-hover:translate-y-2"
        )}
        step1img2Class={cn(
          "pointer-events-none w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
          "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[21%] md:left-[calc(50%+35px+1rem)]",
          "md:group-hover:-translate-y-6"
        )}
        step2img1Class={cn(
          "pointer-events-none w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
          "max-md:scale-[160%] left-[25%] top-[69%] md:left-[35px] md:top-[30%]",
          "md:group-hover:translate-y-2"
        )}
        step2img2Class={cn(
          "pointer-events-none w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden",
          "max-md:scale-[140%] left-[70%] top-[53%] md:top-[25%] md:left-[calc(50%+27px+1rem)]",
          "md:group-hover:-translate-y-6"
        )}
        step3imgClass={cn(
          "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
          "left-[5%] top-[50%] md:top-[30%] md:left-[68px]"
        )}
        step4imgClass={cn(
          "pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden",
          "left-[5%] top-[50%] md:top-[30%] md:left-[68px]"
        )}

        
        // Example images
        image={{
          step1light1: "/images/card1.jpeg",
          step1light2: "/images/card2.jpeg",
          step2light1: "/images/card3.jpeg",
          step2light2: "/images/card4.jpeg",
          step3light: "/images/card5.jpeg",
          step4light: "/images/card2.jpeg",
          alt: "Features Demonstration",
        }}
        // Card styling
        bgClass="bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90"
      />
    </div>
  </div>
</div>

  )
}

export default SpecialCard
