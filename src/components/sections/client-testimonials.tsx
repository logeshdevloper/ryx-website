"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    company: "TaskFlow",
    image: "/testimonials/sarah.jpg", // Placeholder
    content: "RYX didn't just build our MVP – they built our entire foundation for success. Their technical expertise and speed to market gave us a 6-month head start on our competition.",
    rating: 5,
    project: "SaaS Development",
    result: "₹8.5L MRR in 6 months",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO",
    company: "HealthTech Solutions",
    image: "/testimonials/michael.jpg", // Placeholder
    content: "The database optimization work RYX did for us was incredible. They reduced our query times by 85% and helped us handle 10x more traffic without breaking a sweat.",
    rating: 5,
    project: "Database Optimization",
    result: "85% performance improvement",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Product Manager",
    company: "ContentAI",
    image: "/testimonials/emily.jpg", // Placeholder
    content: "Working with RYX on our AI integration was seamless. They understand both the technical and business side of AI, delivering features that our users actually love.",
    rating: 5,
    project: "AI Integration",
    result: "94% user satisfaction",
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "EcoCommerce",
    image: "/testimonials/david.jpg", // Placeholder
    content: "RYX transformed our landing page and the results speak for themselves. Our conversion rate increased by 45% and our bounce rate dropped significantly.",
    rating: 5,
    project: "Web Development",
    result: "45% conversion increase",
  },
  {
    id: 5,
    name: "Lisa Zhang",
    role: "Head of Engineering",
    company: "FinanceFlow",
    image: "/testimonials/lisa.jpg", // Placeholder
    content: "The real-time dashboard RYX built for us processes over 1M transactions daily with perfect accuracy. Their attention to detail is unmatched.",
    rating: 5,
    project: "SaaS Development",
    result: "1M+ daily transactions",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "CEO",
    company: "DataCorp",
    image: "/testimonials/james.jpg", // Placeholder
    content: "RYX didn't just deliver a solution – they delivered a partnership. Their ongoing support and optimization have been crucial to our 99.99% uptime.",
    rating: 5,
    project: "Infrastructure",
    result: "99.99% uptime",
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

export function ClientTestimonials() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="ryx-heading text-[clamp(1.75rem,5vw,3rem)] mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what founders, CTOs, and product leaders 
            have to say about working with RYX.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {[
            { label: "Client Satisfaction", value: "4.9/5", desc: "Average rating" },
            { label: "Client Retention", value: "92%", desc: "Long-term partnerships" },
            { label: "Project Success", value: "100%", desc: "On-time delivery" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="text-center p-5 md:p-6 bg-ryx-silver/10 dark:bg-ryx-navy-light/10 rounded-xl"
            >
              <div className="text-2xl md:text-3xl font-bold text-ryx-gold mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-ryx-gold" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-5 md:mb-6 leading-relaxed text-sm md:text-base">
                &quot;{testimonial.content}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4 mb-4">
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-ryx-silver to-ryx-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-xs md:text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Project:</span>
                  <span className="text-gray-900 dark:text-white font-medium ml-1">
                    {testimonial.project}
                  </span>
                </div>
                <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
           className="text-center mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-ryx-white to-ryx-silver/20 dark:from-ryx-navy dark:to-ryx-navy-light/20 rounded-2xl"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Ready to join our success stories?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-5 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Let&apos;s discuss your project and how we can help you achieve similar results. 
            Get in touch for a free consultation and project estimate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg focus:ring-4 focus:ring-ryx-gold/20"
          >
            Start Your Success Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
