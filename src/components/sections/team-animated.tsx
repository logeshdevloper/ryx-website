"use client"

import { motion } from 'framer-motion'
import { User, Linkedin, Twitter, Github, Sparkles } from 'lucide-react'

const team = [
  {
    name: "Sowmiya",
    role: "Founder & CEO",
    description: "Visionary leader with 8+ years in tech innovation and digital transformation",
    gradient: "from-violet-600 to-purple-600",
    bgColor: "bg-violet-100 dark:bg-violet-900/20",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Ramesh",
    role: "Co-Founder & CTO",
    description: "Technical architect specializing in scalable systems and cloud infrastructure",
    gradient: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  },
  {
    name: "Logesh",
    role: "Co-Founder & CDO",
    description: "Design expert focused on creating intuitive user experiences and brand identity",
    gradient: "from-pink-600 to-rose-600",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com"
    }
  }
]

// Animated Avatar Component
function AnimatedAvatar({ name, gradient, bgColor }: { name: string; gradient: string; bgColor: string }) {
  const firstLetter = name.charAt(0).toUpperCase()

  return (
    <div className="relative w-32 h-32 mx-auto mb-6">
      {/* Animated rings */}
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
      <motion.div
        className={`absolute inset-2 rounded-full bg-gradient-to-r ${gradient} opacity-30`}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Avatar circle */}
      <motion.div
        className={`relative w-full h-full rounded-full ${bgColor} border-4 border-white dark:border-gray-800 shadow-xl flex items-center justify-center overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Animated background pattern */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        {/* Letter or Icon */}
        <motion.div
          className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {firstLetter}
        </motion.div>

        {/* Floating particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r ${gradient} rounded-full`}
            initial={{
              x: 0,
              y: 0,
            }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

export function TeamAnimated() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-6 md:px-12">
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
            <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">Meet Our Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate innovators driving digital excellence
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 rounded-3xl`}
                  animate={{
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Avatar */}
                <AnimatedAvatar
                  name={member.name}
                  gradient={member.gradient}
                  bgColor={member.bgColor}
                />

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <motion.a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.social.github}
                      className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect particles */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Sparkles className={`w-6 h-6 text-gradient-to-r ${member.gradient} opacity-20`} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}