import clsx from "clsx";

interface CircularProgressProps {
  progress: number; // 0–100
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function CircularProgress({
  progress,
  size = 120,
  strokeWidth = 10,
  className,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={clsx(
        "relative inline-flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        className="-rotate-90"
      >
        <circle
          className="text-gray-700"
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          className="text-[#5BF0A5] transition-all duration-300"
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      <span className="absolute text-[14px] font-normal select-none text-white mt-1">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
