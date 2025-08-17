"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, Palette, Image, LayoutTemplate } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RYX Creative Website",
    category: "design",
    description: "Responsive portfolio website with luxury brand visuals, glass UI and smooth motion.",
    image: "/projects/ryx-creative.jpg",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    metrics: {
      pages: "8",
      assets: "20+",
      tools: "Figma",
    },
    links: {
      live: "#",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Illustration Showcase",
    category: "illustration",
    description: "Gallery website for vector characters and icon packs with lightbox and search.",
    image: "/projects/illustration-showcase.jpg",
    technologies: ["Next.js", "SVG", "Lightbox"],
    metrics: {
      pages: "5",
      assets: "40+",
      tools: "Illustrator",
    },
    links: {
      live: "#",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Canva Templates Hub",
    category: "canva",
    description: "Landing site for reusable Canva social templates with preview and download links.",
    image: "/projects/canva-templates.jpg",
    technologies: ["Next.js", "Canva", "SEO"],
    metrics: {
      templates: "25+",
      categories: "6",
      tools: "Canva",
    },
    links: {
      live: "#",
    },
    featured: false,
  },
  {
    id: 4,
    title: "Brand Microsite",
    category: "design",
    description: "One-page microsite with animated sections, sticky nav and contact form.",
    image: "/projects/brand-microsite.jpg",
    technologies: ["Next.js", "Tailwind", "Resend"],
    metrics: {
      pages: "1",
      sections: "6",
      tools: "Figma",
    },
    links: {
      live: "#",
      github: "#",
      case_study: "#",
    },
    featured: false,
  },
];

const categories = [
  { id: "all", name: "All", icon: TrendingUp },
  { id: "design", name: "Designing", icon: Palette },
  { id: "illustration", name: "Illustration", icon: Image },
  { id: "canva", name: "Canva", icon: LayoutTemplate },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function ProjectsGrid() {
  // Component retained but not rendering any projects per user request
  return null;
}
