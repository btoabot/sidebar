type Props = {
  img: string
  isDefault?: boolean
}

export const BackgroundCard = ({ img, isDefault }: Props) => {
  return (
    <div className="w-[112px] h-[198px] relative rounded-xl">
      {isDefault && (
        <div className="absolute top-2 left-2 bg-white w-[50px] h-[19px] rounded-[5px]">
          <div className="text-[10px] py-[3px] px-1">DEFAULT</div>
        </div>
      )}

      <img
        src={img}
        className={`h-full rounded-[16px] ${
          isDefault ? "border-2 border-black" : ""
        }`}
      />
    </div>
  )
}
