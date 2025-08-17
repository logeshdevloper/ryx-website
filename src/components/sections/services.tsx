"use client";

import { Database, Globe, Zap, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Services() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="ryx-heading text-[clamp(1.75rem,5vw,3rem)] mb-4 md:mb-6">
            What We Build
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            From database optimization to full-stack SaaS applications, we deliver production-ready solutions 
            that scale with your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Database Management */}
          <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
            <CardHeader className="relative pb-4">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                Performance
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                85% avg. speed improvement
              </div>
              <div className="w-16 h-16 bg-ryx-silver/10 dark:bg-ryx-silver/10 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-ryx-gold" />
              </div>
              <CardTitle className="text-lg md:text-xl font-bold text-foreground mb-3">
                Database Management & Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                Enterprise-grade database solutions with Supabase, PostgreSQL, and MySQL.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Query optimization & indexing strategies
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Automated backup & disaster recovery
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Real-time monitoring & alerting
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Web Development */}
          <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
            <CardHeader className="relative pb-4">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                Digital
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                95+ Lighthouse scores
              </div>
              <div className="w-16 h-16 bg-green-50 dark:bg-green-950/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg md:text-xl font-bold text-foreground mb-3">
                High-Performance Web Development
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                Lightning-fast, SEO-optimized websites and web applications built with modern technologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Next.js & React development
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Mobile-first responsive design
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Advanced SEO optimization
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Micro SaaS */}
          <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
            <CardHeader className="relative pb-4">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                Product
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                2-6 weeks to launch
              </div>
              <div className="w-16 h-16 bg-purple-50 dark:bg-purple-950/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg md:text-xl font-bold text-foreground mb-3">
                Micro SaaS Development
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                End-to-end SaaS product development from concept to launch.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  MVP development & rapid prototyping
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Stripe payment integration
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  User management & authentication
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* AI Solutions */}
          <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80">
            <CardHeader className="relative pb-4">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                Intelligence
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                94% accuracy rate
              </div>
              <div className="w-16 h-16 bg-orange-50 dark:bg-orange-950/20 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-lg md:text-xl font-bold text-foreground mb-3">
                AI Integration & Prompt Engineering
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                Custom AI solutions with OpenAI, Anthropic, and local models.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  LLM integration & fine-tuning
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Custom prompt optimization
                </li>
                <li className="flex items-center text-xs md:text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Vector database implementation
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Ready to turn your idea into a production-ready solution?
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
