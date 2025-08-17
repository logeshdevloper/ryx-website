import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development Services | RYX",
  description: "Modern, fast, and user-friendly websites that convert.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-ryx-white via-ryx-silver/20 to-ryx-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-ryx-silver/20 text-ryx-bronze text-sm font-medium mb-8">
                <Globe className="w-4 h-4 mr-2" />
                Web Development
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Modern, Fast, and User-Friendly{" "}
                <span className="text-gradient">Websites That Convert</span>
              </h1>
              
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                We design and develop responsive, high-performance websites that engage visitors and convert them into loyal customers.
              </p>
              
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-all duration-300">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}