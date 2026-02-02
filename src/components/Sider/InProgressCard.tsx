import { CircularProgress } from "@/components/progress-circle"

export const InProgressCard = () => {
  return (
    <div className="w-[112px] h-[198px] bg-black rounded-xl relative flex items-center justify-center">
      <CircularProgress progress={25} size={65} strokeWidth={3} className="mt-[3px]" />

      <div className="absolute bottom-2.5 w-full text-center text-[12px] text-white">
        1 minute left
      </div>
    </div>
  )
}
