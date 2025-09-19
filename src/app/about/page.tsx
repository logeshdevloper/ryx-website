"use client"

import { NavbarMinimal } from "@/components/layout/navbar-minimal"
import { FooterMinimal } from "@/components/layout/footer-minimal"
import { AnimatedCursor } from "@/components/ui/animated-cursor"
import { TeamAnimated } from "@/components/sections/team-animated"
import { TestimonialsAnimated } from "@/components/sections/testimonials-animated"
import { motion } from "framer-motion"
import { Sparkles, Target, Heart, Rocket, Award, Users, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Rocket, value: "500+", label: "Projects Delivered" },
  { icon: Award, value: "25+", label: "Awards Won" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" }
]

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We embrace cutting-edge technologies to deliver future-ready solutions",
    gradient: "from-violet-600 to-purple-600"
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our priority. We go above and beyond to exceed expectations",
    gradient: "from-pink-600 to-rose-600"
  },
  {
    icon: Rocket,
    title: "Agile Delivery",
    description: "Fast, efficient, and flexible development process that adapts to your needs",
    gradient: "from-blue-600 to-cyan-600"
  }
]

export default function AboutPage() {
  return (
    <>
      <AnimatedCursor />
      <NavbarMinimal />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-semibold text-white">About RYX</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  Transforming Ideas
                </span>
                <br />
                <span className="text-white">Into Digital Reality</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Founded in 2023, RYX is a passionate team of innovators dedicated to delivering
                exceptional digital solutions that drive business growth and success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold text-white mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 backdrop-blur rounded-3xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with innovative digital solutions that drive growth,
                  efficiency, and success in the modern digital landscape. We believe in
                  transforming challenges into opportunities through technology.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800/50 backdrop-blur rounded-3xl p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading digital transformation partner for businesses worldwide,
                  known for our innovation, excellence, and commitment to client success.
                  We aim to shape the future of digital experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gray-800/50 backdrop-blur rounded-3xl p-8 hover:bg-gray-800 transition-colors"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamAnimated />

        {/* Testimonials Section */}
        <TestimonialsAnimated />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-violet-600 to-pink-600">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Let's work together to transform your ideas into reality
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <Sparkles className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterMinimal />
    </>
  )
}