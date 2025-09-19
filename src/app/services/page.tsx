"use client";

import { NavbarMinimal } from "@/components/layout/navbar-minimal";
import { FooterMinimal } from "@/components/layout/footer-minimal";
import { AnimatedCursor } from "@/components/ui/animated-cursor";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Cone, MeshDistortMaterial, Float } from "@react-three/drei";
import Tilt from "react-parallax-tilt";
import {
  Code, Database, Palette, Cpu, Smartphone, Globe,
  Layers, Zap, Shield, Rocket, CheckCircle, ArrowRight,
  BarChart, Users, Clock, Award
} from "lucide-react";
import { Suspense } from "react";
import Image from "next/image";

// 3D Scene Component
function ServiceScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.5, 32, 32]} position={[-3, 0, 0]}>
          <MeshDistortMaterial color="#8B5CF6" attach="material" distort={0.6} speed={2} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[2, 2, 2]} position={[3, 0, 0]}>
          <MeshDistortMaterial color="#EC4899" attach="material" distort={0.4} speed={3} />
        </Box>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <Cone args={[1.5, 3, 32]} position={[0, 0, -3]}>
          <MeshDistortMaterial color="#10B981" attach="material" distort={0.5} speed={1.5} />
        </Cone>
      </Float>
    </>
  );
}

const mainServices = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    features: ["React/Next.js", "Node.js Backend", "Responsive Design", "SEO Optimization"],
    gradient: "from-violet-600 to-purple-600",
    price: "$5,000+"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Scalable database solutions optimized for performance and reliability",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
    features: ["MySQL/PostgreSQL", "MongoDB", "Redis Caching", "Data Migration"],
    gradient: "from-blue-600 to-cyan-600",
    price: "$3,000+"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that users love",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    features: ["React Native", "Flutter", "iOS/Android", "App Store Deployment"],
    gradient: "from-pink-600 to-rose-600",
    price: "$8,000+"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-orange-600 to-amber-600",
    price: "$2,500+"
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Intelligent solutions powered by machine learning and AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    features: ["ChatGPT Integration", "Custom ML Models", "Computer Vision", "NLP Solutions"],
    gradient: "from-green-600 to-teal-600",
    price: "$10,000+"
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    features: ["SEO Strategy", "Content Marketing", "Social Media", "Analytics"],
    gradient: "from-indigo-600 to-purple-600",
    price: "$2,000/mo"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your vision, goals, and requirements",
    icon: Users,
    color: "from-violet-600 to-purple-600"
  },
  {
    step: "02",
    title: "Strategy",
    description: "Creating a detailed roadmap and project timeline",
    icon: BarChart,
    color: "from-blue-600 to-cyan-600"
  },
  {
    step: "03",
    title: "Design",
    description: "Crafting beautiful, user-centered designs",
    icon: Palette,
    color: "from-pink-600 to-rose-600"
  },
  {
    step: "04",
    title: "Development",
    description: "Building your solution with clean, scalable code",
    icon: Code,
    color: "from-orange-600 to-amber-600"
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous testing to ensure quality and performance",
    icon: Shield,
    color: "from-green-600 to-teal-600"
  },
  {
    step: "06",
    title: "Launch",
    description: "Deploying your project and providing ongoing support",
    icon: Rocket,
    color: "from-indigo-600 to-purple-600"
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses and startups",
    features: [
      "5-page website",
      "Responsive design",
      "Basic SEO",
      "Contact form",
      "1 month support"
    ],
    gradient: "from-gray-600 to-gray-700",
    popular: false
  },
  {
    name: "Professional",
    price: "$7,999",
    description: "Ideal for growing businesses",
    features: [
      "10-page website",
      "Custom design",
      "Advanced SEO",
      "CMS integration",
      "E-commerce ready",
      "3 months support"
    ],
    gradient: "from-violet-600 to-purple-600",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited pages",
      "Custom features",
      "API integrations",
      "Advanced security",
      "Dedicated team",
      "12 months support"
    ],
    gradient: "from-orange-600 to-amber-600",
    popular: false
  }
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0]);

  return (
    <>
      <AnimatedCursor />
      <NavbarMinimal />
      <main ref={containerRef} className="min-h-screen">
        {/* Hero Section with 3D Background */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <Suspense fallback={null}>
                <ServiceScene />
              </Suspense>
            </Canvas>
          </div>

          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 z-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(139,92,246,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(236,72,153,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(139,92,246,0.2) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Content */}
          <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-4 h-4 text-violet-600" />
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  Our Services
                </span>
              </motion.span>

              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block">
                  <motion.span
                    className="inline-block bg-gradient-to-r from-violet-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Solutions That
                  </motion.span>
                </span>
                <span className="block">Transform Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
              >
                From concept to launch, we deliver exceptional digital solutions that drive growth and innovation
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  What We Offer
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Comprehensive digital services tailored to your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    scale={1.02}
                  >
                    <motion.div
                      className="relative h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl group"
                      whileHover={{ y: -10 }}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`} />

                        {/* Icon */}
                        <motion.div
                          className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center"
                          animate={hoveredService === index ? { rotate: 360 } : {}}
                          transition={{ duration: 0.8 }}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Price Badge */}
                        <motion.div
                          className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full"
                          initial={{ x: -100, opacity: 0 }}
                          animate={hoveredService === index ? { x: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-sm font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                            Starting at {service.price}
                          </span>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          {service.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={hoveredService === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <motion.a
                          href="#"
                          className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group/link`}
                          whileHover={{ x: 5 }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                      </div>

                      {/* Hover Effect Particles */}
                      {hoveredService === index && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                              initial={{
                                x: Math.random() * 300,
                                y: 400,
                                opacity: 0
                              }}
                              animate={{
                                y: -50,
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                          ))}
                        </>
                      )}
                    </motion.div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-white dark:bg-gray-950 relative overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-violet-400 dark:bg-violet-600 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </motion.div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  Our Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures project success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <motion.div
                    className="relative p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl group"
                    whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)" }}
                  >
                    {/* Step Number */}
                    <motion.div
                      className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {item.step}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 mb-6 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  Pricing Plans
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Transparent pricing with no hidden fees
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    scale={plan.popular ? 1.05 : 1.02}
                  >
                    <motion.div
                      className={`relative h-full p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl ${
                        plan.popular ? 'ring-4 ring-violet-600 ring-offset-4' : ''
                      }`}
                      whileHover={{ y: -10 }}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-sm font-bold rounded-full">
                          Most Popular
                        </div>
                      )}

                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.name}
                      </h3>

                      <div className="mb-4">
                        <span className="text-5xl font-bold">{plan.price}</span>
                        {plan.price !== "Custom" && <span className="text-gray-600 dark:text-gray-400">/project</span>}
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-8">
                        {plan.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.a
                        href="/contact"
                        className={`block w-full py-3 text-center font-semibold rounded-full transition-all ${
                          plan.popular
                            ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Started
                      </motion.a>
                    </motion.div>
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-gradient-to-br from-violet-600 to-pink-600 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Rocket, value: "500+", label: "Projects Launched" },
                { icon: Users, value: "200+", label: "Happy Clients" },
                { icon: Clock, value: "50K+", label: "Hours Worked" },
                { icon: Award, value: "25+", label: "Awards Won" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="text-white"
                  >
                    <stat.icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <motion.div
                      className="text-5xl font-bold mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/80">{stat.label}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                Let's discuss your project and see how we can help you achieve your goals
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl group"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterMinimal />
    </>
  );
}