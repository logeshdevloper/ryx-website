"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Lazy load 3D components
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-900" />
})

const Float = dynamic(() => import('@react-three/drei').then(mod => mod.Float), { ssr: false })
const OrbitControls = dynamic(() => import('@react-three/drei').then(mod => mod.OrbitControls), { ssr: false })
const Sphere = dynamic(() => import('@react-three/drei').then(mod => mod.Sphere), { ssr: false })
const Box = dynamic(() => import('@react-three/drei').then(mod => mod.Box), { ssr: false })
const MeshDistortMaterial = dynamic(() => import('@react-three/drei').then(mod => mod.MeshDistortMaterial), { ssr: false })

// Optimized 3D Scene with fewer objects
function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.5, 16, 16]} position={[-3, 0, 0]}>
          <MeshDistortMaterial color="#8B5CF6" attach="material" distort={0.6} speed={2} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Box args={[2, 2, 2]} position={[3, 0, 0]}>
          <MeshDistortMaterial color="#EC4899" attach="material" distort={0.4} speed={2} />
        </Box>
      </Float>
    </>
  )
}

export function Hero3D() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Simplified 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="absolute inset-0 bg-gray-900" />}>
          <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 2]}>
            <HeroScene />
          </Canvas>
        </Suspense>
      </div>

      {/* Simple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
            <span className="text-xs sm:text-sm font-semibold text-white">Welcome to RYX</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Digital Innovation
            </span>
            <br />
            <span className="text-white">Made Simple</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
          >
            We transform ideas into powerful digital solutions with cutting-edge technology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              Get Started
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Simple scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}