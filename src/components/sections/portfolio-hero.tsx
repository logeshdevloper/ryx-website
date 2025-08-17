"use client";

import { motion } from "framer-motion";
import { Filter, TrendingUp, DollarSign, Heart } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "Quality", label: "Every Build" },
  { icon: DollarSign, value: "Your", label: "Budget" },
  { icon: Heart, value: "Custom", label: "Solutions" },
];

export function PortfolioHero() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-ryx-white via-ryx-silver/30 to-ryx-gold/10 dark:from-ryx-navy dark:via-ryx-navy-light/20 dark:to-ryx-navy-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-ryx-silver/20 dark:bg-ryx-silver/10 text-ryx-bronze dark:text-ryx-gold text-sm font-medium mb-8"
          >
            <Filter className="w-4 h-4 mr-2" />
            Our Approach
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="ryx-heading text-[clamp(2rem,6vw,3.5rem)] mb-4 md:mb-6"
          >
            Quality Websites,{" "}
            <span className="text-gradient">
              Your Budget
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-12"
          >
            We believe every business deserves a professional website that works within their budget. No inflated promises — just honest pricing and quality builds tailored to what you actually need.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-ryx-white dark:bg-ryx-navy rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-ryx-silver/30">
                  <stat.icon className="w-8 h-8 text-ryx-gold dark:text-ryx-gold" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
