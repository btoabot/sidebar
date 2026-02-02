import {
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer"

import CloseIcon from "@/assets/icons/close.svg?react"
import { PromptTextarea } from "./PromptTextarea"
import { GenerateButton } from "./GenerateButton"

export const DrawerHeaderSection = () => {
  return (
    <DrawerHeader>
      <DrawerTitle className="text-[22px] font-bold flex items-center justify-between">
        <span>Change background</span>
        <CloseIcon className="mb-1.5 mr-1.5 cursor-pointer" />
      </DrawerTitle>

      <div className="w-[360px]">
        <DrawerDescription className="text-[14px] font-semibold text-black pt-[11px]">
          Background idea
        </DrawerDescription>

        <PromptTextarea />
        <GenerateButton />
      </div>
    </DrawerHeader>
  )
}
