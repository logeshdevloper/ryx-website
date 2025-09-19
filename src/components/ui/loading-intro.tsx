"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'

interface LoadingIntroProps {
  onComplete?: () => void
}

export function LoadingIntro({ onComplete }: LoadingIntroProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            onComplete?.()
          }, 500)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 300)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-900 via-violet-950/20 to-gray-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Gradient orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-violet-600/20 to-pink-600/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1
              }}
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-violet-400" />
                <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-pink-400" />
              </motion.div>

              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl font-bold"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(139, 92, 246, 0)",
                    "0 0 40px rgba(139, 92, 246, 0.5)",
                    "0 0 20px rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="bg-gradient-to-r from-violet-600 via-pink-600 to-violet-600 bg-clip-text text-transparent bg-300% animate-gradient">
                  RYX
                </span>
              </motion.h1>
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="text-sm sm:text-base text-gray-400 mb-8 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Loading Experience
              </motion.span>
            </motion.p>

            {/* Progress bar */}
            <div className="w-64 sm:w-80 h-1 bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-600 to-violet-600 bg-300%"
                style={{
                  backgroundSize: '300% 100%',
                }}
                initial={{ x: "-100%" }}
                animate={{
                  x: `${progress - 100}%`,
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  x: { duration: 0.3, ease: "easeOut" },
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />

              {/* Glowing effect */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-80px", "320px"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
            </div>

            {/* Progress percentage */}
            <motion.div
              className="mt-4 text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                {Math.min(100, Math.round(progress))}%
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}