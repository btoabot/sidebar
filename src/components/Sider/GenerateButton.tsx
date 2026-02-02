import { Button } from "@/components/ui/button"
import AiIcon from "@/assets/icons/ai.svg?react"

export const GenerateButton = () => {
  return (
    <Button className="mt-6 rounded-[120px] h-[48px] w-full bg-black">
      <AiIcon />
      Generate BG for 1 credit
    </Button>
  )
}
