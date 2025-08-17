import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore articles by Sowmiya, Ramesh, and Logesh on development, design, and engineering.",
  alternates: { canonical: "/blog" },
};

const posts = [
  { 
    slug: "sowmiya", 
    title: "Building Fast, SEO-Optimized Blogs with Next.js", 
    excerpt: "Learn how to create lightning-fast personal blogs using Next.js, MDX, and automated OpenGraph generation for maximum reach.", 
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop&crop=center",
    author: "Sowmiya",
    date: "Dec 15, 2024",
    readTime: "8 min read"
  },
  { 
    slug: "ramesh", 
    title: "Developer Productivity: Advanced Code Organization", 
    excerpt: "Discover powerful techniques for organizing codebases, implementing search functionality, and building developer-friendly documentation.", 
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop&crop=center",
    author: "Ramesh",
    date: "Dec 12, 2024",
    readTime: "12 min read"
  },
  { 
    slug: "logesh", 
    title: "Modern Web Performance: CDN Optimization & Analytics", 
    excerpt: "Deep dive into image optimization, CDN strategies, and privacy-focused analytics for modern web applications.", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center",
    author: "Logesh",
    date: "Dec 10, 2024",
    readTime: "15 min read"
  },
];

export default function BlogIndex() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="ryx-heading text-4xl md:text-6xl font-bold mb-8">Blog</h1>
        <p className="text-muted-foreground mb-12">Articles from our authors. Click to read more.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-border bg-card hover:shadow-xl transition-all overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {p.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {p.date}
                  </div>
                  <span>{p.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold group-hover:text-ryx-gold transition-colors mb-2">{p.title}</h2>
                <p className="text-muted-foreground mb-4">{p.excerpt}</p>
                <div className="flex items-center text-ryx-gold font-medium text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


