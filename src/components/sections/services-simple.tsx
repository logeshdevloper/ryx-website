"use client"

import { motion } from 'framer-motion'
import { Code, Database, Smartphone, Palette, Cpu, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    features: ["React/Next.js", "Responsive Design", "SEO Optimization"],
    gradient: "from-violet-600 to-purple-600"
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Scalable database architecture and management",
    features: ["PostgreSQL", "MongoDB", "Performance Optimization"],
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    features: ["React Native", "iOS/Android", "App Store Deployment"],
    gradient: "from-pink-600 to-rose-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience",
    features: ["User Research", "Prototyping", "Design Systems"],
    gradient: "from-orange-600 to-amber-600"
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Intelligent solutions powered by machine learning",
    features: ["ChatGPT Integration", "Custom ML Models", "NLP Solutions"],
    gradient: "from-green-600 to-teal-600"
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic marketing to grow your online presence",
    features: ["SEO Strategy", "Content Marketing", "Analytics"],
    gradient: "from-indigo-600 to-purple-600"
  }
]

export function ServicesSimple() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      {/* Beautiful background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-300 to-purple-400 rounded-full opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 mb-6 text-sm font-bold bg-white border-2 border-violet-300 rounded-full shadow-lg shadow-violet-100 bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent"
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0 font-light">
            Transform your business with cutting-edge digital solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 hover:scale-[1.03] transition-all duration-300 border-2 border-violet-100 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-200/50 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {service.title}
              </h3>
              <p className="relative text-base sm:text-lg text-gray-600 mb-6 font-normal leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-200/40 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 sm:mt-20"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-lg sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-violet-300/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Explore All Services</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}