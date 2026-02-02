import { Textarea } from "@/components/ui/textarea"
import AiRegenerateIcon from "@/assets/icons/ai-regenerate.svg?react"
import BackIcon from "@/assets/icons/back.svg?react"
import NextIcon from "@/assets/icons/next.svg?react"

export const PromptTextarea = () => {
  return (
    <div className="relative">
      <Textarea className="mt-[10px] rounded-[12px] h-[195px] resize-none p-[15px] border-[#F2F4F6]" />

      <div className="absolute bottom-0 left-0 pl-[17.5px] pb-[17px] flex items-center cursor-pointer">
        <AiRegenerateIcon />
        <span className="font-semibold text-[12px] indent-1">
          Regenerate
        </span>
      </div>

      <div className="absolute bottom-0 right-0 pr-[23px] pb-[15px] flex items-center gap-5 text-[21px]">
        <BackIcon className="cursor-pointer" />
        <NextIcon className="cursor-pointer" />
      </div>
    </div>
  )
}
