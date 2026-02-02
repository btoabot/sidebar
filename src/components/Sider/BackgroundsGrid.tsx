import img from "@/assets/image.png"
import { InProgressCard } from "./InProgressCard"
import { BackgroundCard } from "./BackgroundCard"

export const BackgroundsGrid = () => {
  return (
    <div className="no-scrollbar overflow-y-auto px-4">
      <div className="text-[14px] font-semibold text-black pt-[22px]">
        Your backgrounds
      </div>

      <div className="flex flex-wrap mt-2 gap-3 mb-3">
        <InProgressCard />

        <BackgroundCard img={img} isDefault />
        {Array.from({ length: 7 }).map((_, i) => (
          <BackgroundCard key={i} img={img} />
        ))}
      </div>
    </div>
  )
}
