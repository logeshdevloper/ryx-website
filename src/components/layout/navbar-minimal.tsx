"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function NavbarMinimal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-violet-100 shadow-lg shadow-violet-100/50"
          : "bg-white/60 backdrop-blur-md border-b border-violet-50"
      )}>
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                  RYX
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <ul className="flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={cn(
                        "relative text-sm font-semibold tracking-wide transition-all duration-150 px-1",
                        isActive(item.href)
                          ? "text-transparent bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text"
                          : "text-gray-700 hover:text-gray-900"
                      )}
                    >
                      {item.name}
                      {isActive(item.href) && (
                        <motion.div
                          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-pink-600"
                          layoutId="navbar-indicator"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg bg-white border-2 border-violet-200 shadow-md hover:shadow-lg hover:border-violet-300"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 md:hidden backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col items-center justify-center h-full"
            >
              <ul className="space-y-6 sm:space-y-8 text-center px-4">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      prefetch={true}
                      onClick={() => setIsOpen(false)}
                      className="group relative inline-block"
                    >
                      <span className={cn(
                        "text-2xl sm:text-3xl font-bold tracking-wide block py-2 transition-all duration-200",
                        isActive(item.href)
                          ? "text-transparent bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text"
                          : "text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-600 hover:to-pink-600 hover:bg-clip-text"
                      )}>
                        {item.name}
                      </span>
                      <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-pink-600"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}