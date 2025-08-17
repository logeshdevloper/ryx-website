"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "120+",
    label: "Projects Delivered",
    description: "From MVPs to enterprise solutions",
    color: "from-ryx-silver to-ryx-gold",
  },
  {
    icon: Clock,
    number: "99.9%",
    label: "Uptime SLA",
    description: "Across all deployed applications",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    number: "92%",
    label: "Client Retention",
    description: "Long-term partnerships built on trust",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Shield,
    number: "< 48hr",
    label: "Response Time",
    description: "Fast support when you need it most",
    color: "from-orange-500 to-orange-600",
  },
];

const achievements = [
  "Zero security breaches across all projects",
  "Average 90+ Lighthouse performance scores",
  "500M+ API requests handled monthly",
  "15+ countries served worldwide",
  "24/7 monitoring and alerting",
  "100% client project completion rate",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-[clamp(1.5rem,4.5vw,2.25rem)] font-bold text-gray-900 dark:text-white mb-3 md:mb-5">
            Proven Track Record
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers don&apos;t lie. Here&apos;s the measurable impact we&apos;ve made for businesses 
            across industries and geographies.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12 md:mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-br from-ryx-white to-ryx-silver/20 dark:from-ryx-navy dark:to-ryx-navy-light/20 rounded-2xl p-5 md:p-8 lg:p-10"
        >
          <div className="text-center mb-12">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
              Key Achievements
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xs md:text-sm">
              Beyond the numbers, here are the qualitative milestones that demonstrate our 
              commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start space-x-3"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Trusted by startups and enterprises worldwide
          </h3>
          
          {/* Placeholder for client logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                  Client {index + 1}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
