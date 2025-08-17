"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PrivacyContent, TermsContent, CookiesContent } from "@/components/sections/policies";
import { Card, CardContent } from "@/components/ui/card";

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
              database optimization, and AI integration.
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
              <li><Link href="/services/database-management" className="text-muted-foreground hover:text-primary transition-colors duration-200">Database Management</Link></li>
              <li><Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors duration-200">Web Development</Link></li>
              <li><Link href="/services/micro-saas" className="text-muted-foreground hover:text-primary transition-colors duration-200">Micro SaaS Development</Link></li>
              <li><Link href="/services/ai-solutions" className="text-muted-foreground hover:text-primary transition-colors duration-200">AI Solutions</Link></li>
            </ul>
          </div>

          {/* Creative Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Creative Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/graphic-design" className="text-muted-foreground hover:text-primary transition-colors duration-200">Graphic & Brand Design</Link></li>
              <li><Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary transition-colors duration-200">UI/UX Design</Link></li>
              <li><Link href="/services/illustration" className="text-muted-foreground hover:text-primary transition-colors duration-200">Illustration & Creative Art</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
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
    </footer>
  );
}
