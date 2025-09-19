"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingIntroSplitProps {
  onComplete?: () => void
}

export function LoadingIntroSplit({ onComplete }: LoadingIntroSplitProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Start the opening sequence after a delay
    const timer = setTimeout(() => {
      setShowContent(true)
      setTimeout(() => {
        setIsLoading(false)
        onComplete?.()
      }, 1500)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Top half */}
          <motion.div
            className="fixed inset-x-0 top-0 h-[50vh] z-[200] overflow-hidden"
            initial={{ y: 0 }}
            animate={{ y: showContent ? "-100%" : 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: showContent ? 0.3 : 0
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                  linear-gradient(180deg, #030712 0%, #111827 50%, #030712 100%)
                `
              }}
            >
              {/* Animated lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[...Array(5)].map((_, i) => (
                  <motion.line
                    key={`top-${i}`}
                    x1="0"
                    y1={`${100 - i * 20}%`}
                    x2="100%"
                    y2={`${100 - i * 20}%`}
                    stroke="url(#gradient1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                ))}
              </svg>

              {/* Top RYX letters */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: showContent ? [1, 0.95, 1.1] : [0.8, 1],
                    opacity: showContent ? [1, 1, 0] : [0, 1]
                  }}
                  transition={{
                    duration: showContent ? 0.8 : 0.6,
                    delay: 0.3
                  }}
                >
                  <motion.div
                    className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-tighter"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                      lineHeight: "1"
                    }}
                  >
                    <span className="bg-gradient-to-r from-violet-600 via-pink-600 to-violet-600 bg-clip-text text-transparent bg-300% animate-gradient">
                      RYX
                    </span>
                  </motion.div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-tighter">
                      <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                        RYX
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom half */}
          <motion.div
            className="fixed inset-x-0 bottom-0 h-[50vh] z-[200] overflow-hidden"
            initial={{ y: 0 }}
            animate={{ y: showContent ? "100%" : 0 }}
            exit={{ y: "100%" }}
            transition={{
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: showContent ? 0.3 : 0
            }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                  linear-gradient(0deg, #030712 0%, #111827 50%, #030712 100%)
                `
              }}
            >
              {/* Animated lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                {[...Array(5)].map((_, i) => (
                  <motion.line
                    key={`bottom-${i}`}
                    x1="0"
                    y1={`${i * 20}%`}
                    x2="100%"
                    y2={`${i * 20}%`}
                    stroke="url(#gradient1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1 + 0.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                ))}
              </svg>

              {/* Bottom RYX letters */}
              <div className="absolute inset-0 flex items-start justify-center pt-8">
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: showContent ? [1, 0.95, 1.1] : [0.8, 1],
                    opacity: showContent ? [1, 1, 0] : [0, 1]
                  }}
                  transition={{
                    duration: showContent ? 0.8 : 0.6,
                    delay: 0.3
                  }}
                >
                  <motion.div
                    className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-tighter"
                    style={{
                      clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
                      lineHeight: "1",
                      transform: "translateY(-50%)"
                    }}
                  >
                    <span className="bg-gradient-to-r from-violet-600 via-pink-600 to-violet-600 bg-clip-text text-transparent bg-300% animate-gradient">
                      RYX
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Center line with glow */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: showContent ? 0 : 1,
                  opacity: showContent ? 0 : 1
                }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-r from-transparent via-violet-600 to-transparent" />
                <div className="w-full h-8 bg-gradient-to-r from-transparent via-violet-600/50 to-transparent blur-xl -mt-4" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Center elements */}
          <motion.div
            className="fixed inset-0 z-[201] pointer-events-none flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: showContent ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Particle explosion effect */}
            {showContent && [...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2
              const distance = 200 + Math.random() * 200
              const x = Math.cos(angle) * distance
              const y = Math.sin(angle) * distance

              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full"
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                  animate={{
                    x: x,
                    y: y,
                    scale: [0, 1.5, 0],
                    opacity: [1, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.02,
                    ease: "easeOut"
                  }}
                />
              )
            })}

            {/* Loading text */}
            <motion.div
              className="absolute bottom-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.p
                className="text-xs sm:text-sm text-gray-500 tracking-[0.3em] uppercase font-light"
                animate={{
                  opacity: showContent ? 0 : [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: showContent ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              >
                Preparing Experience
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Reveal flash effect */}
          {showContent && (
            <motion.div
              className="fixed inset-0 z-[199] bg-white pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.5, times: [0, 0.5, 1] }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}