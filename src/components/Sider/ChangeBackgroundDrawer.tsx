import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { DrawerHeaderSection } from "./DrawerHeaderSection"
import { BackgroundsGrid } from "./BackgroundsGrid"
import { useState } from "react"

export const ChangeBackgroundDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="capitalize">
          Change background
        </Button>
      </DrawerTrigger>

      <DrawerContent className="pt-3.5 pl-0.5">
        <DrawerHeaderSection handleClose={handleClose} />
        <BackgroundsGrid />
      </DrawerContent>
    </Drawer>
  )
}
