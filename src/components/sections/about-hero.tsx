"use client";

import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";

export function AboutHero() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-ryx-white via-ryx-silver/30 to-ryx-gold/10 dark:from-ryx-navy dark:via-ryx-navy-light/20 dark:to-ryx-navy-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-ryx-silver/20 dark:bg-ryx-silver/10 text-ryx-bronze dark:text-ryx-gold text-xs md:text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Founded in 2023
            </div>
            
            <h1 className="ryx-heading text-[clamp(1.75rem,5vw,3rem)] mb-3 md:mb-5">
              Building the{" "}
              <span className="text-gradient">
                future
              </span>{" "}
              of SaaS
            </h1>
            
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              RYX was born from a simple belief: every great idea deserves to become reality, 
              fast. We&apos;re not just developers – we&apos;re product architects, database specialists, 
              and AI engineers who understand that speed to market is everything.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Target, label: "Sowmiya", desc: "Author & Content Strategist" },
                { icon: Rocket, label: "Ramesh", desc: "Tech Writer & Engineer" },
                { icon: Users, label: "Logesh", desc: "Developer & Educator" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-ryx-silver/20 dark:bg-ryx-silver/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-ryx-gold" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-ryx-silver via-ryx-gold to-ryx-bronze rounded-2xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="text-2xl md:text-4xl font-bold mb-3">120+</div>
                <div className="text-base opacity-90 mb-5">Projects Delivered</div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm opacity-80">Database Solutions</span>
                    <span className="text-xs md:text-sm font-semibold">45</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm opacity-80">Web Applications</span>
                    <span className="text-xs md:text-sm font-semibold">38</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm opacity-80">SaaS Products</span>
                    <span className="text-xs md:text-sm font-semibold">25</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm opacity-80">AI Integrations</span>
                    <span className="text-xs md:text-sm font-semibold">12</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-1000" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
