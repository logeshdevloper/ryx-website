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
    <section className="py-12 sm:py-16 md:py-20 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-2xl p-6 sm:p-8 hover:bg-gray-800 transition-colors"
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}>
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg transition-shadow"
          >
            View All Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}