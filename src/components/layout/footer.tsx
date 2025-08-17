"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Send, Database, Globe, Zap, Cpu, Palette, Smartphone, Image, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PrivacyContent, TermsContent, CookiesContent } from "@/components/sections/policies";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "database",
    name: "Database Management",
    icon: Database,
    price: "Starting at ₹25,000",
    description: "Supabase & MySQL optimization, scaling, and backup solutions for production applications",
    features: [
      "Performance tuning and optimization",
      "Automated backup and recovery",
      "Real-time monitoring and alerts",
      "Migration support (MySQL, PostgreSQL, Supabase)"
    ],
    href: "/services/database-management"
  },
  {
    id: "web",
    name: "Web Development",
    icon: Globe,
    price: "Starting at ₹45,000",
    description: "Landing pages, product sites, and full-stack applications with modern technologies",
    features: [
      "SEO-optimized and mobile-first design",
      "Fast loading (90+ Lighthouse score)",
      "Conversion-focused architecture",
      "Modern tech stack (Next.js, React, TypeScript)"
    ],
    href: "/services/web-development"
  },
  {
    id: "saas",
    name: "Micro SaaS Development",
    icon: Zap,
    price: "Starting at ₹1,25,000",
    description: "Complete SaaS products from MVP to scale with authentication, payments, and admin dashboards",
    features: [
      "User authentication and authorization",
      "Stripe payment integration",
      "Admin dashboards and analytics",
      "RESTful API development"
    ],
    href: "/services/micro-saas"
  },
  {
    id: "ai",
    name: "AI Solutions",
    icon: Cpu,
    price: "Starting at ₹75,000",
    description: "LLM integration, prompt optimization, and AI-powered features for your applications",
    features: [
      "Custom AI workflows and automation",
      "Prompt optimization and testing",
      "OpenAI, Anthropic, and local model integration",
      "AI performance tuning and monitoring"
    ],
    href: "/services/ai-solutions"
  },
  {
    id: "graphic",
    name: "Graphic & Brand Design",
    icon: Palette,
    price: "Starting at ₹15,000",
    description: "Custom logos, brand identity, and marketing materials that make your business memorable",
    features: [
      "Logo design and brand identity",
      "Business cards and stationery",
      "Marketing materials and brochures",
      "Social media graphics and templates"
    ],
    href: "/services/graphic-design"
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    icon: Smartphone,
    price: "Starting at ₹35,000",
    description: "Intuitive, beautiful interfaces that keep users engaged and convert visitors into customers",
    features: [
      "User research and persona development",
      "Wireframes and interactive prototypes",
      "Mobile and web app interfaces",
      "Design systems and component libraries"
    ],
    href: "/services/ui-ux-design"
  },
  {
    id: "illustration",
    name: "Illustration & Creative Art",
    icon: Image,
    price: "Starting at ₹20,000",
    description: "Custom illustrations for web, print, and branding that bring your ideas to life",
    features: [
      "Custom digital illustrations",
      "Infographics and data visualization",
      "Character design and mascots",
      "Website and app illustrations"
    ],
    href: "/services/illustration"
  }
];

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookies Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Email", href: "mailto:hello@ryx.dev", icon: Mail },
];

export function Footer() {
  const [modal, setModal] = useState<null | "privacy" | "terms" | "cookies">(null);
  const [serviceModal, setServiceModal] = useState<string | null>(null);
  
  const selectedService = services.find(service => service.id === serviceModal);
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-primary-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-foreground">RYX</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">RYX</strong> specializes in rapid micro SaaS development, 
              database optimization, and AI integration. We transform ideas into scalable, 
              production-ready solutions with industry-leading speed and precision.
              <br />
              <span className="text-sm text-muted-foreground/80 mt-2 block">
                Trusted by 120+ projects • 99.9% uptime • 92% client retention
              </span>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-card hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 border border-border hover:border-primary/20"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => setServiceModal(service.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Creative Services</h3>
            <ul className="space-y-3">
              {services.slice(4).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => setServiceModal(service.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Now spanning full width */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates on new services and case studies.
            </p>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                />
                <Button className="w-full group">
                  Subscribe
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Company Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-foreground">Company</h4>
              <div className="grid grid-cols-2 gap-2">
                {navigation.company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 RYX. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => setModal("privacy")} className="text-muted-foreground/80 hover:text-primary text-sm transition-colors">Privacy Policy</button>
              <button onClick={() => setModal("terms")} className="text-muted-foreground/80 hover:text-primary text-sm transition-colors">Terms of Service</button>
              <button onClick={() => setModal("cookies")} className="text-muted-foreground/80 hover:text-primary text-sm transition-colors">Cookies Policy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Modals */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="max-w-3xl w-full rounded-2xl bg-background text-foreground border border-border shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="ryx-heading text-2xl">
                {modal === "privacy" ? "Privacy Policy" : modal === "terms" ? "Terms of Service" : "Cookies Policy"}
              </h3>
              <button onClick={() => setModal(null)} className="text-muted-foreground hover:text-foreground">✕</button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {modal === "privacy" && <PrivacyContent />}
              {modal === "terms" && <TermsContent />}
              {modal === "cookies" && <CookiesContent />}
            </div>
          </div>
        </div>
      )}

      {/* Service Details Modal */}
      {serviceModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true">
          <div className="max-w-2xl w-full rounded-2xl bg-background text-foreground border border-border shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center space-x-3">
                <selectedService.icon className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{selectedService.name}</h3>
              </div>
              <button onClick={() => setServiceModal(null)} className="text-muted-foreground hover:text-foreground text-xl">✕</button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">{selectedService.price}</span>
                  <Link 
                    href={selectedService.href}
                    onClick={() => setServiceModal(null)}
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <p className="text-muted-foreground leading-relaxed">{selectedService.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-border">
                <Link 
                  href="/contact"
                  onClick={() => setServiceModal(null)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Quote
                </Link>
                <Link 
                  href={selectedService.href}
                  onClick={() => setServiceModal(null)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-border hover:bg-accent text-foreground font-semibold rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
