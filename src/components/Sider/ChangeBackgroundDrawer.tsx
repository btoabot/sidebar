import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { DrawerHeaderSection } from "./DrawerHeaderSection"
import { BackgroundsGrid } from "./BackgroundsGrid"

export const ChangeBackgroundDrawer = () => {
  return (
    <Drawer open direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" className="capitalize">
          Change background
        </Button>
      </DrawerTrigger>

      <DrawerContent className="pt-3.5 pl-0.5">
        <DrawerHeaderSection />
        <BackgroundsGrid />
      </DrawerContent>
    </Drawer>
  )
}
