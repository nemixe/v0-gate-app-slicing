import { cn } from "@/lib/utils"

interface TrafficLightProps {
  activeColor: "idle" | "green" | "yellow" | "red"
  className?: string
}

export function TrafficLight({ activeColor, className }: TrafficLightProps) {
  return (
    <div className={cn("flex flex-col gap-4 items-center", className)}>
      {/* Red light */}
      <div
        className={cn(
          "w-16 h-16 rounded-full border-2 border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.1)]",
          activeColor === "red"
            ? "bg-red-500 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_10px_rgba(239,68,68,0.5)]"
            : "bg-red-200 opacity-40 filter blur-[0.5px]",
        )}
      />

      {/* Yellow light */}
      <div
        className={cn(
          "w-16 h-16 rounded-full border-2 border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.1)]",
          activeColor === "yellow"
            ? "bg-yellow-400 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_10px_rgba(250,204,21,0.5)]"
            : "bg-yellow-200 opacity-40 filter blur-[0.5px]",
        )}
      />

      {/* Green light */}
      <div
        className={cn(
          "w-16 h-16 rounded-full border-2 border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.1)]",
          activeColor === "green"
            ? "bg-green-500 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.2),0_4px_10px_rgba(34,197,94,0.5)]"
            : "bg-green-200 opacity-40 filter blur-[0.5px]",
        )}
      />
    </div>
  )
}
