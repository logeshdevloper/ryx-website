"use client"

import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles, Zap, Code, Palette } from 'lucide-react'

interface LoadingCurtainProps {
  onComplete?: () => void
}

export function LoadingCurtain({ onComplete }: LoadingCurtainProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [stage, setStage] = useState<'intro' | 'split' | 'reveal'>('intro')
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      // Intro stage
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Split stage
      setStage('split')
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Reveal stage
      setStage('reveal')
      await new Promise(resolve => setTimeout(resolve, 1500))

      setIsLoading(false)
      onComplete?.()
    }

    sequence()
  }, [onComplete])

  const letterVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      rotateY: -180,
      z: -100
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }
    },
    split: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.3
      }
    }
  }

  const icons = [
    { Icon: Sparkles, color: "text-violet-500", delay: 0 },
    { Icon: Zap, color: "text-pink-500", delay: 0.1 },
    { Icon: Code, color: "text-cyan-500", delay: 0.2 },
    { Icon: Palette, color: "text-amber-500", delay: 0.3 }
  ]

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Left curtain */}
          <motion.div
            className="fixed left-0 top-0 w-1/2 h-full z-[200] overflow-hidden"
            initial={{ x: 0 }}
            animate={{
              x: stage === 'reveal' ? '-100%' : 0,
              rotateY: stage === 'reveal' ? 15 : 0
            }}
            exit={{ x: '-100%' }}
            transition={{
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1]
            }}
            style={{
              perspective: '1000px',
              transformOrigin: 'right center'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gray-950 via-violet-950/50 to-gray-950"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid-left" width="40" height="40" patternUnits="userSpaceOnUse">
                      <motion.rect
                        width="1"
                        height="40"
                        fill="white"
                        animate={{
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                      <motion.rect
                        width="40"
                        height="1"
                        fill="white"
                        animate={{
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-left)" />
                </svg>
              </div>

              {/* Left side of RYX */}
              <div className="absolute inset-0 flex items-center justify-end pr-0">
                <motion.div
                  className="relative"
                  initial="initial"
                  animate={stage === 'split' ? 'split' : 'animate'}
                  variants={letterVariants}
                >
                  <div
                    className="text-[20vw] md:text-[15vw] font-black"
                    style={{
                      clipPath: 'polygon(0 0, 51% 0, 51% 100%, 0 100%)',
                      marginRight: '-0.1em'
                    }}
                  >
                    <motion.span
                      className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                      style={{ backgroundSize: '200% 100%' }}
                    >
                      RYX
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Floating icons left */}
              {icons.slice(0, 2).map((icon, i) => (
                <motion.div
                  key={`left-icon-${i}`}
                  className={`absolute ${icon.color}`}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1.2, 0],
                    rotate: [0, 180, 360],
                    y: [-20, 20, -20]
                  }}
                  transition={{
                    duration: 3,
                    delay: icon.delay,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <icon.Icon className="w-8 h-8" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right curtain */}
          <motion.div
            className="fixed right-0 top-0 w-1/2 h-full z-[200] overflow-hidden"
            initial={{ x: 0 }}
            animate={{
              x: stage === 'reveal' ? '100%' : 0,
              rotateY: stage === 'reveal' ? -15 : 0
            }}
            exit={{ x: '100%' }}
            transition={{
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1]
            }}
            style={{
              perspective: '1000px',
              transformOrigin: 'left center'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-bl from-gray-950 via-pink-950/50 to-gray-950"
              animate={{
                backgroundPosition: ['100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid-right" width="40" height="40" patternUnits="userSpaceOnUse">
                      <motion.rect
                        width="1"
                        height="40"
                        fill="white"
                        animate={{
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1
                        }}
                      />
                      <motion.rect
                        width="40"
                        height="1"
                        fill="white"
                        animate={{
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.5
                        }}
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-right)" />
                </svg>
              </div>

              {/* Right side of RYX */}
              <div className="absolute inset-0 flex items-center justify-start pl-0">
                <motion.div
                  className="relative"
                  initial="initial"
                  animate={stage === 'split' ? 'split' : 'animate'}
                  variants={letterVariants}
                >
                  <div
                    className="text-[20vw] md:text-[15vw] font-black"
                    style={{
                      clipPath: 'polygon(49% 0, 100% 0, 100% 100%, 49% 100%)',
                      marginLeft: '-0.1em'
                    }}
                  >
                    <motion.span
                      className="bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity
                      }}
                      style={{ backgroundSize: '200% 100%' }}
                    >
                      RYX
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              {/* Floating icons right */}
              {icons.slice(2).map((icon, i) => (
                <motion.div
                  key={`right-icon-${i}`}
                  className={`absolute ${icon.color}`}
                  style={{
                    right: `${20 + i * 30}%`,
                    top: `${50 + i * 20}%`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1.2, 0],
                    rotate: [0, -180, -360],
                    y: [20, -20, 20]
                  }}
                  transition={{
                    duration: 3,
                    delay: icon.delay,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <icon.Icon className="w-8 h-8" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Center seam glow effect */}
          <motion.div
            className="fixed left-1/2 top-0 w-px h-full z-[201] pointer-events-none"
            style={{ transform: 'translateX(-50%)' }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: stage === 'split' ? 1 : 0,
              scaleY: stage === 'split' ? [0, 1, 1] : 1
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute inset-0 w-20 -left-10 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-xl" />
          </motion.div>

          {/* Loading text */}
          <motion.div
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-[202] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: stage === 'reveal' ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-xs sm:text-sm text-gray-400 tracking-[0.4em] uppercase font-light"
              animate={{
                letterSpacing: stage === 'split' ? '0.6em' : '0.4em'
              }}
              transition={{ duration: 0.5 }}
            >
              {stage === 'intro' && 'INITIALIZING'}
              {stage === 'split' && 'OPENING'}
              {stage === 'reveal' && 'WELCOME'}
            </motion.p>
          </motion.div>

          {/* Flash effect on reveal */}
          {stage === 'reveal' && (
            <motion.div
              className="fixed inset-0 z-[199] bg-gradient-to-r from-violet-600/20 via-white/30 to-pink-600/20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8 }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}