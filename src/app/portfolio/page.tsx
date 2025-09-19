"use client"

import { NavbarMinimal } from "@/components/layout/navbar-minimal"
import { FooterMinimal } from "@/components/layout/footer-minimal"
import { AnimatedCursor } from "@/components/ui/animated-cursor"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Box, Torus, MeshDistortMaterial, Float, Stars } from "@react-three/drei"
import Tilt from "react-parallax-tilt"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight, Eye, Heart, Share2, Github, Globe,
  Play, Pause, ChevronLeft, ChevronRight, Layers,
  Sparkles, Code, Palette, Cpu, Star
} from "lucide-react"
import { Suspense } from "react"

// 3D Background Scene
function PortfolioScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} enableRotate={false} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Torus args={[3, 0.5, 16, 32]} position={[-5, 2, -5]} rotation={[Math.PI / 4, 0, 0]}>
          <MeshDistortMaterial color="#8B5CF6" attach="material" distort={0.6} speed={2} opacity={0.3} transparent />
        </Torus>
      </Float>

      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[2, 2, 2]} position={[5, -2, -5]} rotation={[0, Math.PI / 4, 0]}>
          <MeshDistortMaterial color="#EC4899" attach="material" distort={0.4} speed={3} opacity={0.3} transparent />
        </Box>
      </Float>

      <Float speed={4} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[1.5, 32, 32]} position={[0, 0, -10]}>
          <MeshDistortMaterial color="#10B981" attach="material" distort={0.5} speed={1.5} opacity={0.3} transparent />
        </Sphere>
      </Float>
    </>
  )
}

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    category: "Machine Learning",
    client: "TechCorp International",
    description: "Revolutionary analytics platform using GPT-4 and custom ML models for predictive insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    video: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1600&h=900&fit=crop",
    technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
    results: {
      performance: "+250%",
      users: "50K+",
      accuracy: "98.5%"
    },
    gradient: "from-violet-600 to-purple-600",
    link: "/portfolio/ai-analytics",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 2,
    title: "E-Commerce Revolution",
    category: "Full Stack Development",
    client: "ShopMaster Pro",
    description: "Next-gen shopping platform with AR try-on, AI recommendations, and Web3 payments",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
    video: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&h=900&fit=crop",
    technologies: ["Next.js", "Three.js", "Stripe", "Ethereum", "Node.js"],
    results: {
      sales: "+340%",
      conversion: "12.5%",
      retention: "85%"
    },
    gradient: "from-pink-600 to-rose-600",
    link: "/portfolio/ecommerce",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 3,
    title: "SaaS Management Dashboard",
    category: "UI/UX Design",
    client: "CloudSync Systems",
    description: "Comprehensive dashboard with real-time data visualization and team collaboration",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    video: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind", "WebSockets"],
    results: {
      efficiency: "+180%",
      satisfaction: "95%",
      uptime: "99.9%"
    },
    gradient: "from-blue-600 to-cyan-600",
    link: "/portfolio/saas-dashboard",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 4,
    title: "Blockchain Trading Platform",
    category: "Web3 Development",
    client: "CryptoTrade Global",
    description: "Decentralized trading platform with smart contracts and liquidity pools",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=900&fit=crop",
    video: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1600&h=900&fit=crop",
    technologies: ["Solidity", "Web3.js", "React", "Hardhat", "IPFS"],
    results: {
      volume: "$50M+",
      users: "25K+",
      transactions: "100K+"
    },
    gradient: "from-orange-600 to-amber-600",
    link: "/portfolio/blockchain",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 5,
    title: "Healthcare AI Assistant",
    category: "Healthcare Tech",
    client: "MediCare Plus",
    description: "AI-powered medical assistant for diagnosis support and patient management",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=900&fit=crop",
    video: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&h=900&fit=crop",
    technologies: ["Python", "TensorFlow", "React Native", "MongoDB", "Docker"],
    results: {
      accuracy: "96.8%",
      timeReduction: "-65%",
      patients: "10K+"
    },
    gradient: "from-green-600 to-teal-600",
    link: "/portfolio/healthcare",
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 6,
    title: "Social Media Analytics",
    category: "Data Analytics",
    client: "SocialBoost Pro",
    description: "Comprehensive social media analytics with sentiment analysis and trend prediction",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&h=900&fit=crop",
    video: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&h=900&fit=crop",
    technologies: ["Node.js", "Redis", "ElasticSearch", "React", "GraphQL"],
    results: {
      insights: "+400%",
      engagement: "+220%",
      roi: "450%"
    },
    gradient: "from-indigo-600 to-purple-600",
    link: "/portfolio/social-analytics",
    github: "https://github.com",
    live: "https://example.com"
  }
]

// Project categories
const categories = [
  { name: "All", count: 24, icon: Layers },
  { name: "Web Development", count: 8, icon: Code },
  { name: "UI/UX Design", count: 6, icon: Palette },
  { name: "Machine Learning", count: 5, icon: Cpu },
  { name: "Mobile Apps", count: 5, icon: Globe }
]

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  // Auto-play image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndexes = { ...prev }
        featuredProjects.forEach((project) => {
          if (hoveredProject === project.id) {
            newIndexes[project.id] = (prev[project.id] || 0) === 0 ? 1 : 0
          }
        })
        return newIndexes
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [hoveredProject])

  return (
    <>
      <AnimatedCursor />
      <NavbarMinimal />
      <main ref={containerRef} className="min-h-screen">
        {/* Hero Section with 3D Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 10] }}>
              <Suspense fallback={null}>
                <PortfolioScene />
              </Suspense>
            </Canvas>
          </div>

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 z-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(139,92,246,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(236,72,153,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(139,92,246,0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Hero Content */}
          <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-semibold text-white">Featured Portfolio</span>
                <Sparkles className="w-4 h-4 text-violet-400" />
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #8B5CF6, #EC4899, #10B981, #8B5CF6)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Creative Works
                </motion.span>
                <br />
                <span className="text-5xl md:text-6xl lg:text-7xl opacity-90">
                  That Inspire Innovation
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
              >
                Explore our collection of cutting-edge projects showcasing excellence in design, development, and innovation
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                {[
                  { value: "150+", label: "Projects Completed" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "25+", label: "Awards Won" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.1 }}
                    className="text-white"
                  >
                    <motion.div
                      className="text-4xl font-bold mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-white/60 rounded-full mt-2"
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group relative px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <category.icon className="w-4 h-4" />
                    {category.name}
                    <span className="text-xs opacity-60">({category.count})</span>
                  </span>
                  {selectedCategory === category.name && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 opacity-20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="py-32 bg-gray-950 relative overflow-hidden">
          {/* Animated particles */}
          <motion.div style={{ y }} className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-violet-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </motion.div>

          <motion.div style={{ opacity }} className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Handpicked selection of our best work across various industries
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    scale={1.02}
                  >
                    <motion.div
                      className="relative bg-gray-900 rounded-3xl overflow-hidden"
                      whileHover={{ y: -10 }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Image/Video Container */}
                      <div className="relative h-96 overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          animate={hoveredProject === project.id ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={currentImageIndex[project.id] === 1 ? project.video : project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40`} />

                        {/* Category Badge */}
                        <motion.div
                          className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-xl rounded-full"
                          initial={{ x: -100, opacity: 0 }}
                          animate={hoveredProject === project.id ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-sm font-semibold text-white">{project.category}</span>
                        </motion.div>

                        {/* Play Button (for video preview) */}
                        <motion.button
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={hoveredProject === project.id ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" />
                        </motion.button>

                        {/* Tech Stack */}
                        <motion.div
                          className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2"
                          initial={{ y: 100, opacity: 0 }}
                          animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ scale: 0 }}
                              animate={hoveredProject === project.id ? { scale: 1 } : { scale: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                              className="px-3 py-1 bg-white/20 backdrop-blur-xl text-white text-xs font-semibold rounded-full"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        {/* Title and Client */}
                        <div className="mb-4">
                          <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm">for {project.client}</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6">
                          {project.description}
                        </p>

                        {/* Results */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.results).map(([key, value], i) => (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, y: 20 }}
                              animate={hoveredProject === project.id ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="text-center"
                            >
                              <motion.div
                                className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                                animate={hoveredProject === project.id ? { scale: [1, 1.1, 1] } : {}}
                                transition={{ duration: 0.5 }}
                              >
                                {value}
                              </motion.div>
                              <div className="text-xs text-gray-500 capitalize">{key}</div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                          <motion.a
                            href={project.link}
                            className={`flex-1 py-3 text-center font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Case Study
                          </motion.a>
                          <motion.a
                            href={project.github}
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5 text-white" />
                          </motion.a>
                          <motion.a
                            href={project.live}
                            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                            whileHover={{ scale: 1.1, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Globe className="w-5 h-5 text-white" />
                          </motion.a>
                        </div>
                      </div>

                      {/* Hover Effects - Floating particles */}
                      {hoveredProject === project.id && (
                        <>
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                              initial={{
                                x: Math.random() * 400,
                                y: 500,
                                opacity: 0
                              }}
                              animate={{
                                y: -100,
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.1,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </motion.div>
                  </Tilt>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-20"
            >
              <motion.button
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl group"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Load More Projects</span>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-violet-600 via-pink-600 to-orange-600 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
                Have a Project in Mind?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
                Let's collaborate to bring your vision to life with cutting-edge technology and creative excellence
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-violet-600 font-bold text-lg rounded-full shadow-2xl group"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterMinimal />
    </>
  )
}