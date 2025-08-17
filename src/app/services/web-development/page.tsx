import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Globe, Smartphone, Search, Zap, Palette, Code, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services | RYX",
  description: "Modern, fast, and user-friendly websites that convert. Responsive web design, SEO optimization, and high-performance development.",
  keywords: "web development, responsive design, SEO optimization, website development, modern websites",
};

const features = [
  {
    icon: Palette,
    title: "Custom Web Design",
    description: "Tailored to your brand identity with pixel-perfect execution."
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts", 
    description: "Works perfectly on all devices, from mobile to desktop."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built to rank high in search results from day one."
  },
  {
    icon: Zap,
    title: "Performance Tuning",
    description: "Ultra-fast loading speeds for better user experience."
  },
  {
    icon: Code,
    title: "CMS Integration",
    description: "WordPress, Sanity, Strapi, or custom content management."
  },
  {
    icon: Globe,
    title: "Ongoing Maintenance",
    description: "Security updates, bug fixes, and feature upgrades."
  }
];

const process = [
  { step: "01", title: "Discovery & Strategy", description: "Understanding your goals and target audience." },
  { step: "02", title: "Design Prototyping", description: "Creating wireframes and visual mockups." },
  { step: "03", title: "Development & Coding", description: "Building with modern technologies." },
  { step: "04", title: "SEO & Speed Optimization", description: "Ensuring fast loads and search visibility." },
  { step: "05", title: "Testing & Launch", description: "Quality assurance and deployment." },
  { step: "06", title: "Maintenance & Updates", description: "Ongoing support and improvements." }
];

const technologies = ["Next.js", "React", "TailwindCSS", "Node.js", "Sanity", "WordPress", "TypeScript"];

const websiteTypes = [
  "Corporate Websites",
  "Product Landing Pages", 
  "E-commerce Stores",
  "Portfolio Websites"
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-ryx-white via-ryx-silver/20 to-ryx-gold/10 dark:from-ryx-navy dark:via-ryx-navy-light/20 dark:to-ryx-navy-dark/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-ryx-silver/20 dark:bg-ryx-silver/10 text-ryx-bronze dark:text-ryx-gold text-sm font-medium mb-8"
              >
                <Globe className="w-4 h-4 mr-2" />
                Web Development
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Modern, Fast, and User-Friendly{" "}
                <span className="text-gradient">Websites That Convert</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              >
                We design and develop responsive, high-performance websites that engage visitors and convert them into loyal customers. From landing pages to full-scale platforms, RYX delivers.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Request a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#features" className="inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-300">
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Your website is your <span className="text-ryx-gold">digital storefront</span>
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  It must load fast, look amazing, and work flawlessly. At RYX, we craft websites with clean UI, intuitive UX, and robust performance that turns visitors into customers.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">We build:</h3>
                  {websiteTypes.map((type, index) => (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-ryx-gold" />
                      <span className="text-gray-700 dark:text-gray-300">{type}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-video bg-gradient-to-br from-ryx-silver to-ryx-gold rounded-2xl p-8 flex items-center justify-center">
                  <Globe className="w-24 h-24 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need for a successful web presence
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <feature.icon className="w-12 h-12 text-ryx-gold mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Process</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-ryx-gold text-ryx-navy rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study & Technologies Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Case Study</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="font-semibold text-ryx-gold">Client:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">Local Retailer</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ryx-gold">Problem:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">Outdated, slow-loading site</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ryx-gold">Solution:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">Rebuilt with Next.js + TailwindCSS</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ryx-gold">Result:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">+55% increase in online sales within 3 months</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="px-4 py-2 bg-ryx-silver/20 text-ryx-bronze dark:text-ryx-gold rounded-lg font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Why Choose RYX?</h4>
                  <ul className="space-y-3">
                    {["Pixel-perfect design", "Conversion-focused layouts", "SEO expertise", "Fast delivery"].map((benefit, index) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-ryx-gold" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-ryx-gold">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-ryx-navy mb-6"
            >
              Let's build your website — better, faster, smarter.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-ryx-navy hover:bg-ryx-navy/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}