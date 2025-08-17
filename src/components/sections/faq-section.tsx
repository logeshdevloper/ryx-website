"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqCategories = [
  {
    id: "general",
    name: "General",
    icon: MessageCircle,
    faqs: [
      {
        question: "What makes RYX different from other development agencies?",
        answer: "RYX specializes exclusively in micro SaaS development, database optimization, and AI integration. We're not a generalist agency - we're specialists who deliver production-ready solutions in weeks, not months. Our team has deep expertise in modern tech stacks (Next.js, Supabase, OpenAI) and we maintain 99.9% uptime across all projects with a 92% client retention rate."
      },
      {
        question: "How quickly can you deliver a complete project?",
        answer: "Timeline depends on project complexity: Simple landing pages (1-2 weeks), Database optimization (2-4 weeks), Full SaaS MVP (4-8 weeks), Enterprise solutions (8-12 weeks). We provide detailed project timelines during our initial consultation and have never missed a agreed deadline."
      },
      {
        question: "Do you work with startups or only established companies?",
        answer: "We work with businesses of all sizes! From solo entrepreneurs building their first SaaS to enterprise companies optimizing massive databases. Our pricing is structured to be accessible for startups while providing enterprise-grade quality and reliability."
      }
    ]
  },
  {
    id: "technical",
    name: "Technical",
    icon: Zap,
    faqs: [
      {
        question: "What technologies and frameworks do you use?",
        answer: "Frontend: Next.js 15, React, TypeScript, Tailwind CSS. Backend: Node.js, Python, Supabase, PostgreSQL, MySQL. AI: OpenAI API, Anthropic, vector databases, custom prompt optimization. DevOps: Vercel, AWS, Docker, automated CI/CD pipelines. We always use the latest stable versions and best practices."
      },
      {
        question: "Can you work with our existing codebase and infrastructure?",
        answer: "Absolutely! We specialize in enhancing existing systems. Whether it's optimizing your database performance, integrating AI features into your current app, or migrating to modern technologies, we work seamlessly with your existing infrastructure while minimizing disruption."
      },
      {
        question: "How do you ensure code quality and security?",
        answer: "We follow enterprise-grade development practices: comprehensive testing, code reviews, security audits, and documentation. All code is production-ready with proper error handling, monitoring, and backup systems. We've maintained zero security breaches across all projects."
      }
    ]
  },
  {
    id: "process",
    name: "Process",
    icon: Clock,
    faqs: [
      {
        question: "What is your development process like?",
        answer: "Week 1: Discovery, architecture, and wireframes. Week 2-4: Core development with weekly progress reviews. Week 5-6: Testing, optimization, and deployment. Week 7+: Launch support and training. You'll have full visibility into progress with regular updates and a dedicated project dashboard."
      },
      {
        question: "How do you handle project communication and updates?",
        answer: "We provide weekly progress reports, access to a real-time project dashboard, and are available for calls/messages during business hours. You'll always know exactly where your project stands and can provide feedback at any stage."
      },
      {
        question: "What happens after my project launches?",
        answer: "We provide 30 days of free launch support, including bug fixes and minor adjustments. After that, we offer ongoing maintenance packages starting at ₹8,500/month, including monitoring, updates, feature additions, and priority support."
      }
    ]
  },
  {
    id: "pricing",
    name: "Pricing & Support",
    icon: Shield,
    faqs: [
      {
        question: "How do you structure your pricing?",
        answer: "We offer fixed-price project quotes based on scope and complexity. Database optimization starts at ₹25,000, web development at ₹45,000, SaaS MVPs at ₹1,25,000, and AI integration at ₹75,000. No hidden fees, no hourly billing complexity - just transparent, value-based pricing."
      },
      {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Yes! We offer comprehensive maintenance packages including: monitoring and uptime management, security updates, feature additions, performance optimization, and priority support. Plans start at ₹8,500/month and are customized based on your specific needs."
      },
      {
        question: "What if we need changes or additional features after launch?",
        answer: "We're your long-term technology partner. Post-launch changes are handled through our maintenance packages or separate project quotes. We maintain detailed documentation and code organization to make future enhancements efficient and cost-effective."
      }
    ]
  }
];

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const activeFAQs = faqCategories.find(cat => cat.id === activeCategory)?.faqs || [];

  // Structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-foreground mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our services, process, pricing, and more. 
            Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> directly.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenFAQ(null);
              }}
              className={cn(
                "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-accent border border-border"
              )}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-4"
        >
          {activeFAQs.map((faq, index) => {
            const faqId = `${activeCategory}-${index}`;
            const isOpen = openFAQ === faqId;
            
            return (
              <motion.div
                key={faqId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : faqId)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="w-full h-px bg-border mb-4" />
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                We&apos;re here to help! Schedule a free consultation to discuss your project requirements 
                and get personalized answers to your questions.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
