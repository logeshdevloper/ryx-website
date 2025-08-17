"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Database Management", href: "/services/database-management" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Micro SaaS Development", href: "/services/micro-saas" },
      { name: "AI Solutions", href: "/services/ai-solutions" },
      { name: "Graphic & Brand Design", href: "/services/graphic-design" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Illustration & Creative Art", href: "/services/illustration" },
    ]
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
      setActiveDropdown(null);
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-ryx-navy/95 backdrop-blur-lg shadow-lg border-b border-ryx-bronze/50" 
        : "bg-ryx-navy/80 backdrop-blur-md border-b border-ryx-bronze/30"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
          >
            <div className="relative">
              <Image
                src="/RYX_Logo.png"
                alt="RYX Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                priority
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-ryx-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-bold text-xl text-ryx-white group-hover:text-ryx-gold transition-colors">
              RYX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  // Dropdown Menu
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center px-4 py-2 text-ryx-silver hover:text-ryx-gold font-medium transition-colors duration-200 rounded-lg hover:bg-ryx-bronze/20">
                      {item.name}
                      <ChevronDown className={cn(
                        "ml-1 w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Dropdown Content */}
                    <div className={cn(
                      "absolute top-full left-0 mt-2 w-64 bg-ryx-navy/95 backdrop-blur-sm rounded-xl shadow-xl border border-ryx-bronze/30 py-2 transition-all duration-200",
                      activeDropdown === item.name 
                        ? "opacity-100 visible transform translate-y-0" 
                        : "opacity-0 invisible transform -translate-y-2 pointer-events-none"
                    )}>
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-3 text-ryx-silver hover:text-ryx-gold hover:bg-ryx-bronze/20 transition-colors duration-200"
                        >
                          <div className="font-medium">{dropItem.name}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Regular Link
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-ryx-silver hover:text-ryx-gold font-medium transition-colors duration-200 rounded-lg hover:bg-ryx-bronze/20 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-ryx-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-4 ml-6">
              <ThemeToggle />
              <Button asChild>
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
                          <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
                className="text-ryx-silver hover:text-ryx-gold transition-colors p-2 rounded-lg hover:bg-ryx-bronze/20"
                aria-label="Toggle mobile menu"
              >
              <div className="relative w-6 h-6">
                <span className={cn(
                  "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                  isOpen ? "rotate-45 top-3" : "top-1"
                )} />
                <span className={cn(
                  "absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-2.5",
                  isOpen ? "opacity-0" : "opacity-100"
                )} />
                <span className={cn(
                  "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
                  isOpen ? "-rotate-45 top-3" : "top-4"
                )} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 border-t border-ryx-bronze/30">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-ryx-silver hover:text-ryx-gold hover:bg-ryx-bronze/20 font-medium transition-colors duration-200 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-ryx-silver/80 hover:text-ryx-gold hover:bg-ryx-bronze/20 transition-colors duration-200 rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="mx-4 mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}