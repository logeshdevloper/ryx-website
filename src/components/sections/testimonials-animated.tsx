"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "CEO, TechStart India",
    content: "RYX transformed our vision into reality with their exceptional development skills. The team's dedication and innovative approach exceeded our expectations.",
    rating: 5,
    gradient: "from-violet-600 to-purple-600",
    bgColor: "bg-violet-100 dark:bg-violet-900/20"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, DataFlow Solutions",
    content: "Working with RYX was a game-changer for our business. Their expertise in database management and AI integration helped us scale efficiently.",
    rating: 5,
    gradient: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Product Manager, CloudNine",
    content: "The UI/UX design delivered by RYX was stunning. They understood our brand perfectly and created an interface that our users love.",
    rating: 5,
    gradient: "from-pink-600 to-rose-600",
    bgColor: "bg-pink-100 dark:bg-pink-900/20"
  },
  {
    id: 4,
    name: "Raj Patel",
    role: "CTO, FinTech Pro",
    content: "RYX's technical expertise is outstanding. They built our complex financial platform with robust security and seamless performance.",
    rating: 5,
    gradient: "from-green-600 to-teal-600",
    bgColor: "bg-green-100 dark:bg-green-900/20"
  },
  {
    id: 5,
    name: "Emma Johnson",
    role: "Marketing Director, BrandBoost",
    content: "The digital marketing solutions from RYX significantly improved our online presence. Our conversion rates increased by 200%!",
    rating: 5,
    gradient: "from-orange-600 to-amber-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/20"
  },
  {
    id: 6,
    name: "David Kim",
    role: "CEO, HealthTech Solutions",
    content: "RYX delivered our healthcare platform on time and within budget. Their attention to detail and commitment to quality is remarkable.",
    rating: 5,
    gradient: "from-indigo-600 to-purple-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20"
  }
]

// Animated Avatar
function AnimatedAvatar({ name, gradient, bgColor }: { name: string; gradient: string; bgColor: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase()

  return (
    <div className="relative w-20 h-20 mx-auto mb-4">
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} opacity-20`}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className={`relative w-full h-full rounded-full ${bgColor} border-2 border-white dark:border-gray-800 flex items-center justify-center`}>
        <span className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {initials}
        </span>
      </div>
    </div>
  )
}

export function TestimonialsAnimated() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-violet-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-violet-100 to-pink-100 dark:from-violet-900/20 dark:to-pink-900/20 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">Client Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Show 2 testimonials at a time on desktop, 1 on mobile */}
                {[0, 1].map((offset) => {
                  const index = (currentIndex + offset) % testimonials.length
                  const testimonial = testimonials[index]

                  return (
                    <motion.div
                      key={`${currentIndex}-${offset}`}
                      className={`${offset === 1 ? 'hidden md:block' : ''}`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">
                        {/* Quote Icon */}
                        <motion.div
                          className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center`}
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <Quote className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Avatar */}
                        <AnimatedAvatar
                          name={testimonial.name}
                          gradient={testimonial.gradient}
                          bgColor={testimonial.bgColor}
                        />

                        {/* Content */}
                        <div className="text-center">
                          {/* Rating */}
                          <div className="flex justify-center gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                              >
                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                              </motion.div>
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                            "{testimonial.content}"
                          </p>

                          {/* Author */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <p className={`text-sm bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        {/* Decorative gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-3xl pointer-events-none`}
                          animate={{
                            opacity: [0.05, 0.1, 0.05],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-violet-600 to-pink-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mt-20 text-center"
        >
          <div>
            <motion.div
              className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              200+
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
          </div>
          <div>
            <motion.div
              className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            >
              98%
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
          </div>
          <div>
            <motion.div
              className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, delay: 1, repeat: Infinity }}
            >
              4.9★
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}