"use client"

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Eye, Heart, Share2 } from 'lucide-react'
import Tilt from 'react-parallax-tilt'

const projects = [
  {
    id: 1,
    title: "Digital Banking App",
    category: "Mobile App",
    description: "Revolutionary banking experience with AI-powered insights",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    gradient: "from-blue-600 to-cyan-600",
    stats: { views: "12K", likes: "3.4K" }
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Next-gen shopping with AR try-on features",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    gradient: "from-purple-600 to-pink-600",
    stats: { views: "18K", likes: "5.2K" }
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    gradient: "from-orange-600 to-red-600",
    stats: { views: "9K", likes: "2.8K" }
  },
  {
    id: 4,
    title: "AI Content Generator",
    category: "Machine Learning",
    description: "Automated content creation powered by GPT-4",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    gradient: "from-green-600 to-teal-600",
    stats: { views: "25K", likes: "7.1K" }
  },
  {
    id: 5,
    title: "Social Media Platform",
    category: "Full Stack",
    description: "Next-generation social networking with Web3",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    gradient: "from-indigo-600 to-purple-600",
    stats: { views: "15K", likes: "4.5K" }
  },
  {
    id: 6,
    title: "Fitness Tracker",
    category: "IoT & Wearables",
    description: "Smart health monitoring with predictive analytics",
    image: "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&h=600&fit=crop",
    gradient: "from-rose-600 to-pink-600",
    stats: { views: "8K", likes: "2.3K" }
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const springConfig = { stiffness: 100, damping: 15 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / 10)
    y.set((e.clientY - centerY) / 10)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="relative group"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.02}
        transitionSpeed={2000}
      >
        <Link href={`/portfolio/${project.id}`}>
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-2xl">
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />

            {/* Image container */}
            <div className="relative h-80 overflow-hidden">
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay content */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <motion.div
                    className="flex items-center gap-1 text-white/80"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isHovered ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.1 }}
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{project.stats.views}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-1 text-white/80"
                    initial={{ x: -20, opacity: 0 }}
                    animate={isHovered ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{project.stats.likes}</span>
                  </motion.div>
                </div>

                {/* View project button */}
                <motion.div
                  className="inline-flex items-center gap-2 text-white font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isHovered ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <span>View Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </motion.div>

              {/* Category badge */}
              <motion.div
                className="absolute top-4 left-4 z-30"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-pink-600 transition-all">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
            </div>

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `linear-gradient(90deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`,
                opacity: isHovered ? 1 : 0,
                padding: "2px",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl" />
            </motion.div>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  )
}

export function Portfolio3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Animated background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-violet-400 dark:bg-violet-600 rounded-full"
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
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-violet-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Featured Works
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Explore our latest projects showcasing innovation and creativity
          </motion.p>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.a
            href="/portfolio"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl group"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowUpRight className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}