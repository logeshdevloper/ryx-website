import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Database, Globe, Zap, Cpu, Palette, Smartphone, Image, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Complete Digital Solutions | RYX",
  description: "RYX offers comprehensive digital services: database management, web development, SaaS development, AI solutions, graphic design, UI/UX design, and custom illustrations.",
};

const services = [
  {
    id: "database",
    icon: Database,
    title: "Database Management",
    description: "Supabase & MySQL optimization, scaling, and backup solutions for production applications",
    price: "Starting at ₹25,000",
    features: [
      "Performance tuning and optimization",
      "Automated backup and recovery",
      "Real-time monitoring and alerts",
      "Migration support (MySQL, PostgreSQL, Supabase)",
      "Query optimization and indexing",
      "Database security audit",
    ],
    deliverables: ["Performance report", "Optimized queries", "Backup strategy", "Monitoring dashboard"],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Landing pages, product sites, and full-stack applications with modern technologies",
    price: "Starting at ₹45,000",
    features: [
      "SEO-optimized and mobile-first design",
      "Fast loading (90+ Lighthouse score)",
      "Conversion-focused architecture",
      "Modern tech stack (Next.js, React, TypeScript)",
      "Content Management System (CMS)",
      "Analytics and performance tracking",
    ],
    deliverables: ["Responsive website", "SEO optimization", "CMS setup", "Performance audit"],
  },
  {
    id: "saas",
    icon: Zap,
    title: "Micro SaaS Development",
    description: "Complete SaaS products from MVP to scale with authentication, payments, and admin dashboards",
    price: "Starting at ₹1,25,000",
    features: [
      "User authentication and authorization",
      "Stripe payment integration",
      "Admin dashboards and analytics",
      "RESTful API development",
      "Database design and optimization",
      "Deployment and DevOps setup",
    ],
    deliverables: ["MVP application", "Admin panel", "API documentation", "Deployment guide"],
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI & Prompt Engineering",
    description: "LLM integration, prompt optimization, and AI-powered features for your applications",
    price: "Starting at ₹75,000",
    features: [
      "Custom AI workflows and automation",
      "Prompt optimization and testing",
      "OpenAI, Anthropic, and local model integration",
      "AI performance tuning and monitoring",
      "Custom AI-powered features",
      "Vector database setup and optimization",
    ],
    deliverables: ["AI integration", "Optimized prompts", "Performance metrics", "Usage analytics"],
  },
  {
    id: "graphic",
    icon: Palette,
    title: "Graphic & Brand Design",
    description: "Custom logos, brand identity, and marketing materials that make your business memorable",
    price: "Starting at ₹15,000",
    features: [
      "Logo design and brand identity",
      "Business cards and stationery",
      "Marketing materials and brochures",
      "Social media graphics and templates",
      "Brand guidelines and style guides",
      "Print and digital design assets",
    ],
    deliverables: ["Logo files", "Brand guidelines", "Marketing materials", "Social media templates"],
  },
  {
    id: "uiux",
    icon: Smartphone,
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces that keep users engaged and convert visitors into customers",
    price: "Starting at ₹35,000",
    features: [
      "User research and persona development",
      "Wireframes and interactive prototypes",
      "Mobile and web app interfaces",
      "Usability testing and optimization",
      "Design systems and component libraries",
      "Accessibility and responsive design",
    ],
    deliverables: ["Design mockups", "Interactive prototypes", "Design system", "Usability report"],
  },
  {
    id: "illustration",
    icon: Image,
    title: "Illustration & Creative Art",
    description: "Custom illustrations for web, print, and branding that bring your ideas to life",
    price: "Starting at ₹20,000",
    features: [
      "Custom digital illustrations",
      "Infographics and data visualization",
      "Character design and mascots",
      "Marketing campaign artwork",
      "Website and app illustrations",
      "Print and packaging design",
    ],
    deliverables: ["Custom illustrations", "Source files", "Multiple formats", "Usage guidelines"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-ryx-white via-ryx-silver/30 to-ryx-gold/10 dark:from-ryx-navy dark:via-ryx-navy-light/20 dark:to-ryx-navy-dark/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Complete digital solutions from technical development to creative design. We deliver production-ready 
              applications and beautiful designs that scale with your business.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-ryx-silver to-ryx-gold rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-ryx-gold font-semibold">
                          {service.price}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, delIndex) => (
                        <span
                          key={delIndex}
                          className="px-3 py-1 bg-ryx-silver/10 text-ryx-bronze text-sm font-medium rounded-full"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="inline-flex items-center w-full px-6 py-3 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-lg transition-all duration-200 focus:ring-4 focus:ring-ryx-gold/20 justify-center group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16 p-8 bg-gradient-to-r from-ryx-white to-ryx-silver/20 dark:from-ryx-navy dark:to-ryx-navy-light/20 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Every project is unique. Let&apos;s discuss your specific requirements and create a tailored solution 
                that fits your needs and budget.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg focus:ring-4 focus:ring-ryx-gold/20"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
