"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
  theme?: "light" | "dark";
}

export function ScrollIndicator({ className, theme = "dark" }: ScrollIndicatorProps) {
  const borderColor = theme === "dark" ? "border-ryx-silver/40" : "border-ryx-navy/40";
  const dotColor = theme === "dark" ? "bg-ryx-silver/70" : "bg-ryx-navy/70";
  const arrowColor = theme === "dark" ? "text-ryx-silver/60" : "text-ryx-navy/60";

  return (
    <div className={cn("pointer-events-none select-none", className)}>
      <div className="flex flex-col items-center gap-3">
        {/* Mouse shape */}
        <div className={cn("w-7 h-11 rounded-[14px] border-2 flex justify-center", borderColor)}>
          <motion.div
            className={cn("w-1.5 h-3 rounded-full mt-2", dotColor)}
            animate={{ y: [0, 6, 0], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        {/* Arrows */}
        <div className="flex flex-col items-center -mt-1">
          <motion.div
            className={cn("text-xs leading-none", arrowColor)}
            animate={{ y: [0, 6, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          >
            ▼
          </motion.div>
          <motion.div
            className={cn("text-[10px] leading-none", arrowColor)}
            animate={{ y: [0, 6, 0], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            ▼
          </motion.div>
        </div>
      </div>
    </div>
  );
}


