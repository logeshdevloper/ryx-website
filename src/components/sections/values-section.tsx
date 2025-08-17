"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Lightbulb, Users, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Speed Without Compromise",
    description: "We deliver fast, but never at the expense of quality. Every line of code is production-ready and scalable.",
    color: "from-ryx-silver to-ryx-gold",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Built-in security, performance monitoring, and compliance. Your data and your users' data is always protected.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "We stay ahead of the curve, adopting new technologies and best practices to give you a competitive edge.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We&apos;re not just vendors – we&apos;re your technical co-founders, invested in your long-term success.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Target,
    title: "Results Focused",
    description: "Every feature, every optimization, every decision is made with your business goals and user experience in mind.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Continuous Improvement",
    description: "We don&apos;t stop at delivery. Ongoing optimization, feature additions, and support ensure long-term success.",
    color: "from-ryx-bronze to-ryx-gold",
  },
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

export function ValuesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
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
            Our Core Values
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These principles guide every decision we make, every line of code we write, 
            and every relationship we build with our clients.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={item}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-5 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-ryx-gold/50"
            >
              {/* Icon */}
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                {value.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs md:text-sm">
                {value.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 md:mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-2xl font-medium text-gray-900 dark:text-white mb-3 md:mb-5 leading-relaxed">
              &quot;We don&apos;t just build software – we build the foundation for your success. 
              Every project is a partnership, every solution is crafted with your growth in mind.&quot;
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white text-sm md:text-base">RYX Founding Team</div>
                <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Builders, Engineers, Innovators</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
