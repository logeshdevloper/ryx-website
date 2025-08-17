import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Database, Shield, Zap, Clock, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Database Management Services | RYX",
  description: "Reliable database management for high-performance applications. Supabase, MySQL, PostgreSQL optimization, scaling, and monitoring.",
  keywords: "database management, supabase, mysql, postgresql, database optimization, database scaling",
};

const features = [
  {
    icon: Database,
    title: "Database Design & Setup",
    description: "Optimized schema tailored to your application's needs."
  },
  {
    icon: Zap,
    title: "Performance Optimization", 
    description: "Faster queries, better indexes, reduced load time."
  },
  {
    icon: Shield,
    title: "Backup & Disaster Recovery",
    description: "Automated, encrypted backups with instant restore."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Encryption, role-based access, and compliance protocols."
  },
  {
    icon: TrendingUp,
    title: "Migration Services",
    description: "Smooth transitions between database platforms."
  },
  {
    icon: Clock,
    title: "Monitoring & Maintenance",
    description: "Real-time tracking and proactive fixes."
  }
];

const process = [
  { step: "01", title: "Assessment", description: "Review current setup and requirements." },
  { step: "02", title: "Architecture Design", description: "Create scalable structure." },
  { step: "03", title: "Implementation", description: "Build, migrate, or optimize." },
  { step: "04", title: "Testing & QA", description: "Security and performance checks." },
  { step: "05", title: "Ongoing Support", description: "Regular updates and monitoring." }
];

const technologies = ["Supabase", "MySQL", "PostgreSQL", "Prisma ORM", "AWS RDS", "GCP Cloud SQL", "Docker"];

export default function DatabaseManagementPage() {
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
                <Database className="w-4 h-4 mr-2" />
                Database Management
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Reliable Database Management for{" "}
                <span className="text-gradient">High-Performance Applications</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              >
                At RYX, we specialize in building, optimizing, and maintaining Supabase, MySQL, and PostgreSQL databases that scale with your business. From design to monitoring, we ensure your data is fast, secure, and always available.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="#features" className="inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-300">
                  Learn More
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
                  Your database is the heart of your digital product
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  We don't just maintain databases; we <strong>architect</strong> them for long-term performance, reliability, and scalability. Whether you need a new setup, an optimization pass, or full ongoing management, RYX delivers results.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["Supabase", "MySQL", "PostgreSQL", "Cloud & On-premise"].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-ryx-gold" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
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
                  <Database className="w-24 h-24 text-white" />
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
                Comprehensive database solutions designed for modern applications
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
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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

        {/* Case Study Section */}
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
                      <span className="text-gray-700 dark:text-gray-300 ml-2">SaaS Dashboard Platform</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ryx-gold">Problem:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">Pages loading in 12 seconds</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ryx-gold">Solution:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">Query optimization + indexing</span>
                    </div>
                    <div>
                      <span className="font-semibold text-ryx-gold">Result:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">Load time cut to 1.8 seconds, improved customer retention</span>
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
              Your business deserves a database that's fast, secure, and reliable.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-ryx-navy hover:bg-ryx-navy/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
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