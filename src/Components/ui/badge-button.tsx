import React from "react"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const BadgeButton = () => {
  return (
    <Badge
      variant="outline"
      className="mb-3 cursor-pointer  rounded-[14px] border border-black/10 bg-[#4F4F4F] text-base md:left-20"
    >
      <SparklesIcon className=" mr-2 text-9xl font-bold fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
      Ai Input: ask Everthing
    </Badge>
  )
}

export default BadgeButton
