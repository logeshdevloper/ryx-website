"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Clock, Zap } from "lucide-react";

export function CaseStudySpotlight() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Featured Case Study
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Deep dive into how we transformed a startup idea into a profitable SaaS platform 
            serving thousands of users worldwide.
          </p>
        </motion.div>

        {/* Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Story
            </div>
            
            <h3 className="text-xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              TaskFlow: From MVP to{" "}
              <span className="text-green-600 dark:text-green-400">₹8.5L MRR</span>
            </h3>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
              A project management startup approached us with an idea and a tight deadline. 
              In just 6 weeks, we delivered a full-featured SaaS platform that now serves 
              over 2,500 active users and generates consistent monthly recurring revenue.
            </p>

            {/* Challenge */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">The Challenge</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Build a competitive project management tool with real-time collaboration, 
                payment processing, and admin dashboards. Timeline: 6 weeks to launch.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Our Solution</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                <li>• Next.js + Supabase for rapid development</li>
                <li>• Real-time collaboration with WebSockets</li>
                <li>• Stripe integration for seamless payments</li>
                <li>• Comprehensive admin and analytics dashboard</li>
              </ul>
            </div>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-lg transition-all duration-200 group"
            >
              Read Full Case Study
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Project Results
            </h4>

            {/* Key Metrics */}
            <div className="space-y-8">
              {[
                {
                  icon: Users,
                  label: "Active Users",
                  value: "2,500+",
                  change: "+400% in 6 months",
                  color: "from-ryx-silver to-ryx-gold",
                },
                {
                  icon: TrendingUp,
                  label: "Monthly Revenue",
                  value: "₹8.5L",
                  change: "From ₹0 to ₹8.5L MRR",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Clock,
                  label: "Time to Market",
                  value: "6 weeks",
                  change: "50% faster than planned",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Zap,
                  label: "Performance",
                  value: "95/100",
                  change: "Lighthouse score",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {metric.value}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </span>
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {metric.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">
                Development Timeline
              </h5>
              <div className="space-y-3">
                {[
                  { week: "Week 1-2", task: "Architecture & Core Features" },
                  { week: "Week 3-4", task: "Real-time Collaboration" },
                  { week: "Week 5", task: "Payment Integration & Testing" },
                  { week: "Week 6", task: "Launch & Optimization" },
                ].map((phase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-ryx-gold rounded-full flex-shrink-0" />
                    <div className="flex-1 flex justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {phase.week}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {phase.task}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
