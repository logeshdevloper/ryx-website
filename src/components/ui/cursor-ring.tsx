"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorRing() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ringX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const ringY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const dotX = useSpring(mouseX, { stiffness: 700, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 700, damping: 35 });

  const isPointer = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isPointer.current = !!target?.closest("a, button, [role='button'], .cursor-pointer");
    };
    window.addEventListener("mouseover", onOver);
    return () => window.removeEventListener("mouseover", onOver);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-ryx-gold/40 mix-blend-screen"
        style={{ left: ringX, top: ringY, x: "-50%", y: "-50%" }}
        animate={{ scale: isPointer.current ? 0.9 : 1, opacity: 0.9 }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-ryx-gold/70"
        style={{ left: dotX, top: dotY, x: "-50%", y: "-50%" }}
      />
    </div>
  );
}


