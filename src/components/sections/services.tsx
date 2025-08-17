"use client";

import { motion } from "framer-motion";
import { Database, Globe, Zap, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Database,
    title: "Database Management & Optimization",
    description: "Enterprise-grade database solutions with Supabase, PostgreSQL, and MySQL. Achieve 10x performance improvements with our proven optimization techniques.",
    features: [
      "Query optimization & indexing strategies", 
      "Automated backup & disaster recovery", 
      "Real-time monitoring & alerting", 
      "Seamless migration & scaling support",
      "Performance audits & bottleneck analysis",
      "Custom database architecture design"
    ],
    tier: "Performance",
    stats: "85% avg. speed improvement",
    color: "text-ryx-gold",
    bgColor: "bg-ryx-silver/10 dark:bg-ryx-silver/10"
  },
  {
    icon: Globe,
    title: "High-Performance Web Development",
    description: "Lightning-fast, SEO-optimized websites and web applications built with modern technologies. Achieve 95+ Lighthouse scores and superior user experiences.",
    features: [
      "Next.js & React development", 
      "Mobile-first responsive design", 
      "Advanced SEO optimization", 
      "Conversion rate optimization",
      "Progressive Web App (PWA) features",
      "Performance monitoring & analytics"
    ],
    tier: "Digital",
    stats: "95+ Lighthouse scores",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20"
  },
  {
    icon: Zap,
    title: "Micro SaaS Development",
    description: "End-to-end SaaS product development from concept to launch. Full-stack solutions with authentication, payments, analytics, and admin dashboards.",
    features: [
      "MVP development & rapid prototyping", 
      "Stripe payment integration", 
      "User management & authentication", 
      "Admin dashboards & analytics",
      "RESTful API development",
      "DevOps & deployment automation"
    ],
    tier: "Product",
    stats: "2-6 weeks to launch",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20"
  },
  {
    icon: Cpu,
    title: "AI Integration & Prompt Engineering",
    description: "Custom AI solutions with OpenAI, Anthropic, and local models. Transform your application with intelligent features and automated workflows.",
    features: [
      "LLM integration & fine-tuning", 
      "Custom prompt optimization", 
      "Vector database implementation", 
      "AI workflow automation",
      "Multi-model integration",
      "Performance monitoring & scaling"
    ],
    tier: "Intelligence",
    stats: "94% accuracy rate",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function Services() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
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
            What We Build
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            From database optimization to full-stack SaaS applications, we deliver production-ready solutions 
            that scale with your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
                <CardHeader className="relative pb-4">
                  {/* Tier Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                    {service.tier}
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                    {service.stats}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>

                  <CardTitle className="text-lg md:text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs md:text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Ready to turn your idea into a production-ready solution?
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
