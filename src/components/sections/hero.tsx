"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Database, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-ryx-navy via-ryx-navy-light to-ryx-navy-dark pb-16 md:pb-20 lg:pb-24">
      {/* Beautiful background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(203,161,53,0.1),transparent_50%)]" />
      
      {/* Floating elements with luxury colors */}
      <div className="absolute top-20 left-10 w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-ryx-gold/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
      <div className="absolute top-40 right-10 w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-ryx-bronze/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      <div className="absolute -bottom-8 left-20 w-44 h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-ryx-silver/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Modern badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-ryx-gold/10 text-ryx-gold border border-ryx-gold/20 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Deploy Production-Ready Solutions in Days
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="ryx-heading text-[clamp(2rem,6vw,3.75rem)] text-ryx-white mb-4 md:mb-6 leading-tight"
          >
            From idea to{" "}
            <span className="text-ryx-gold">
              product
            </span>
            , deploy in days
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-ryx-silver mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            RYX specializes in rapid <strong className="text-ryx-gold">micro SaaS development</strong>, 
            high-performance <strong className="text-ryx-gold">database optimization</strong>, 
            and cutting-edge <strong className="text-ryx-gold">AI integrations</strong>. 
            <br className="hidden md:block" />
            <strong className="text-ryx-white">From MVP to scale in weeks, not months.</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16"
          >
            <Button
              asChild
              size="lg"
              className="group"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </motion.div>

          {/* Stats with modern cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 md:mb-14"
          >
            {[
              { icon: Rocket, stat: "120+", label: "Projects Delivered", color: "text-ryx-gold" },
              { icon: Database, stat: "99.9%", label: "Uptime SLA", color: "text-green-400" },
              { icon: Zap, stat: "92%", label: "Client Retention", color: "text-ryx-bronze" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <Card className="relative overflow-hidden shadow-xl transition-all duration-300 bg-ryx-navy/40 backdrop-blur-md border border-ryx-bronze/30 hover:translate-y-[-2px] hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-ryx-bronze/10 via-transparent to-ryx-gold/10 opacity-60" />
                  <CardContent className="relative p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-ryx-gold/10 rounded-lg mb-3 ${item.color}`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-extrabold text-ryx-white tracking-tight">
                      {item.stat}
                    </div>
                    <div className="text-ryx-silver font-medium text-sm">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Modern scroll indicator */}
      <ScrollIndicator className="absolute bottom-8 left-1/2 -translate-x-1/2" theme="dark" />
    </section>
  );
}
