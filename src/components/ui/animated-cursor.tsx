"use client"

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function AnimatedCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
          animate={{
            scale: isHovering ? 2.5 : 1,
            opacity: isHovering ? 0.6 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Trailing gradient glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-violet-400/30 to-pink-400/30 blur-md"
          animate={{
            scale: isHovering ? 1.8 : 1,
            opacity: isHovering ? 0.8 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}