"use client";

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-ryx-white via-ryx-silver/20 to-ryx-gold/10 dark:from-ryx-navy dark:via-ryx-navy-light/20 dark:to-ryx-navy-dark/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-ryx-silver/20 dark:bg-ryx-silver/10 text-ryx-bronze dark:text-ryx-gold text-sm font-medium mb-8"
              >
                <Cpu className="w-4 h-4 mr-2" />
                AI Solutions
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Smart AI Solutions That{" "}
                <span className="text-gradient">Boost Your Business Efficiency</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              >
                We create AI-powered applications and integrations that automate processes, enhance customer experiences, and unlock new business potential.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore AI Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">AI Solutions & Prompt Engineering</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Starting at ₹75,000 - Custom AI workflows, prompt optimization, chatbots, and API integrations with OpenAI, Anthropic, and local models.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}