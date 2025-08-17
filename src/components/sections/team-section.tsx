"use client";

import { motion } from "framer-motion";

const team = [
  { name: "sowmiya" },
  { name: "Ramesh" },
  { name: "logesh" },
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

export function TeamSection() {
  return (
    <section className="py-10 md:py-12 lg:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-[clamp(1.5rem,4.5vw,2.25rem)] font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
            Meet the Team
          </h2>
          {/* Minimized: description removed per request */}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="group bg-white dark:bg-gray-800 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Avatar */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-ryx-silver to-ryx-gold rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg md:text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Culture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Our Culture
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              We&apos;re a remote-first team that values collaboration, continuous learning, 
              and work-life balance. Here&apos;s what makes RYX a great place to work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Remote First",
                description: "Work from anywhere, anytime. We care about results, not hours.",
                icon: "🌍",
              },
              {
                title: "Learning Budget",
                description: "₹25,000 annual budget for courses, conferences, and books.",
                icon: "📚",
              },
              {
                title: "Latest Tech",
                description: "Always working with cutting-edge tools and technologies.",
                icon: "⚡",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Want to join our team?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We&apos;re always looking for talented developers, designers, and strategists.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 focus:ring-4 focus:ring-blue-500/20"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
