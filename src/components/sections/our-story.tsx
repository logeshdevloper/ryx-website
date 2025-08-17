"use client";

import { motion } from "framer-motion";
import { Calendar, Code, Database, Zap } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "The Beginning",
    icon: Calendar,
    description: "Founded by experienced developers frustrated with slow traditional agencies. Our first project delivered a complete SaaS MVP in 2 weeks.",
    achievement: "First client project completed",
  },
  {
    year: "2023",
    title: "Database Specialization",
    icon: Database,
    description: "Recognized the critical need for database optimization in modern applications. Developed proprietary frameworks for Supabase and MySQL scaling.",
    achievement: "10+ database optimization projects",
  },
  {
    year: "2024",
    title: "AI Integration",
    icon: Zap,
    description: "Early adoption of AI and prompt engineering. Became specialists in LLM integration, helping clients build AI-powered features.",
    achievement: "15+ AI-powered applications",
  },
  {
    year: "2024",
    title: "Scale & Growth",
    icon: Code,
    description: "Expanded to serve startups and established businesses worldwide. Maintained 99.9% uptime across all deployed applications.",
    achievement: "120+ projects delivered",
  },
];

export function OurStory() {
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
          <h2 className="ryx-heading text-[clamp(1.5rem,4.5vw,2.25rem)] mb-3 md:mb-5">
            Our Journey
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            From a small team of passionate developers to a trusted partner for businesses 
            worldwide. Here&apos;s how we&apos;ve grown while maintaining our core values.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-ryx-silver/40 dark:bg-ryx-silver/20 hidden lg:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-ryx-silver/20 dark:bg-ryx-silver/10 rounded-lg flex items-center justify-center mr-3 md:mr-4">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-ryx-gold" />
                      </div>
                      <div>
                        <div className="text-lg md:text-xl font-bold text-ryx-gold">
                          {item.year}
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-xs md:text-sm">
                      {item.description}
                    </p>
                    
                    <div className="inline-flex items-center px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs md:text-sm font-medium rounded-full">
                      ✓ {item.achievement}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ryx-gold rounded-full border-4 border-white dark:border-gray-950 z-10" />

                {/* Spacer for mobile */}
                <div className="lg:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-ryx-white to-ryx-silver/20 dark:from-ryx-navy dark:to-ryx-navy-light/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to be part of our story?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the growing list of successful projects and satisfied clients. 
            Let&apos;s build something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg focus:ring-4 focus:ring-ryx-gold/20"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
