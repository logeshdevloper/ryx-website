import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const posts = {
  sowmiya: {
    title: "Building Fast, SEO-Optimized Blogs with Next.js",
    description: "Learn how to create lightning-fast personal blogs using Next.js, MDX, and automated OpenGraph generation for maximum reach.",
    author: "Sowmiya",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=center",
    content: `# Building Fast, SEO-Optimized Blogs with Next.js

## Introduction

Creating a modern blog that performs well and ranks high in search results requires careful consideration of performance, SEO, and user experience. In this comprehensive guide, we'll explore how to build a lightning-fast blog using Next.js, MDX, and automated OpenGraph generation.

## Why Choose Next.js for Blogging?

Next.js provides several advantages for blog development:

- **Static Site Generation (SSG)**: Pre-render pages at build time for optimal performance
- **Automatic Code Splitting**: Only load the JavaScript needed for each page
- **Built-in SEO Support**: Easy meta tag management and sitemap generation
- **Image Optimization**: Automatic image compression and modern format serving

## Setting Up MDX for Content

MDX allows you to write JSX directly in Markdown, giving you the power to embed interactive components within your blog posts.

## Performance Optimization Strategies

### 1. Image Optimization
Use Next.js Image component for automatic optimization

### 2. Code Syntax Highlighting
Implement efficient syntax highlighting with Prism.js

### 3. RSS Feed Generation
Automatically generate RSS feeds for better content distribution

## SEO Best Practices

1. **Meta Tags**: Implement comprehensive meta tag management
2. **Schema Markup**: Add structured data for better search result appearance
3. **Internal Linking**: Create a logical internal link structure
4. **Page Speed**: Optimize Core Web Vitals for better rankings

## Conclusion

Building a modern blog with Next.js, MDX, and proper SEO optimization creates a foundation for long-term success. The combination of performance, developer experience, and SEO capabilities makes this stack ideal for content creators who want both speed and flexibility.`,
  },
  ramesh: {
    title: "Developer Productivity: Advanced Code Organization",
    description: "Discover powerful techniques for organizing codebases, implementing search functionality, and building developer-friendly documentation.",
    author: "Ramesh",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop&crop=center",
    content: `# Developer Productivity: Advanced Code Organization

As codebases grow, maintaining productivity becomes increasingly challenging. This guide explores proven strategies for organizing code, implementing powerful search functionality, and creating documentation that actually helps developers.

## The Foundation: Project Structure

A well-organized project structure is the foundation of developer productivity. Consider this structure for React/Next.js projects:

- **components/**: Reusable UI components organized by type
- **hooks/**: Custom React hooks for shared logic
- **utils/**: Pure utility functions
- **types/**: TypeScript type definitions
- **services/**: API and external service calls

## Implementing Code Search

Fast code search dramatically improves developer experience. Tools like Typesense can provide instant search across your entire codebase, making it easy to find components, functions, and patterns.

## Smart Documentation

Automated documentation generation keeps your codebase self-explanatory. Extract component props, generate API docs, and maintain up-to-date examples automatically.

## Git Workflow Integration

Streamline code organization with smart Git hooks that run linting, formatting, and documentation updates automatically.

## Code Quality Metrics

Track code organization health with automated metrics including complexity analysis, test coverage, and documentation coverage.

## Conclusion

Effective code organization is an investment in long-term productivity. By implementing search functionality, automated documentation, and quality metrics, teams can maintain velocity even as codebases grow.`,
  },
  logesh: {
    title: "Modern Web Performance: CDN Optimization & Analytics",
    description: "Deep dive into image optimization, CDN strategies, and privacy-focused analytics for modern web applications.",
    author: "Logesh",
    date: "Dec 10, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",
    content: `# Modern Web Performance: CDN Optimization & Analytics

Performance is no longer a nice-to-have—it's essential for user experience, SEO rankings, and business success. This comprehensive guide explores advanced CDN strategies, image optimization techniques, and privacy-focused analytics implementation.

## Understanding CDN Architecture

Content Delivery Networks form the backbone of modern web performance. A multi-tier CDN strategy ensures optimal content delivery across different regions and content types.

## Advanced Image Optimization

Modern image optimization goes beyond basic compression:

- **Next-Gen Formats**: Serve WebP and AVIF with fallbacks
- **Responsive Images**: Generate multiple sizes automatically
- **Intelligent Lazy Loading**: Load images only when needed
- **Edge Transformation**: Process images at CDN edge locations

## CDN Cache Optimization

Smart cache headers and edge computing integration can dramatically improve performance:

- **Static Assets**: Long cache times with versioning
- **HTML Pages**: Short cache with revalidation
- **API Responses**: Conditional caching with stale-while-revalidate

## Privacy-Focused Analytics

Implement analytics that respect user privacy while providing actionable insights:

- **Anonymous Tracking**: Generate session IDs without personal data
- **Data Minimization**: Collect only essential metrics
- **Local Processing**: Aggregate data before transmission

## Core Web Vitals Monitoring

Real-time performance monitoring helps identify and fix issues quickly:

- **Largest Contentful Paint (LCP)**: Monitor loading performance
- **First Input Delay (FID)**: Track interactivity metrics
- **Cumulative Layout Shift (CLS)**: Measure visual stability

## Conclusion

Modern web performance requires a holistic approach combining CDN optimization, intelligent caching, privacy-focused analytics, and continuous monitoring. The investment in performance optimization pays dividends in user experience and business success.`,
  },
} as const;

type Slug = keyof typeof posts;

export async function generateMetadata({ params }: { params: Promise<{ slug: Slug }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.description },
    twitter: { title: post.title, description: post.description },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: Slug }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return notFound();
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center text-ryx-gold hover:text-ryx-gold/80 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        {/* Hero Image */}
        <div className="aspect-video relative overflow-hidden rounded-2xl mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="ryx-heading text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.description}</p>
          
          {/* Meta Info */}
          <div className="flex items-center gap-6 text-muted-foreground border-t border-border pt-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-ryx-gold prose-pre:bg-muted prose-pre:border prose-pre:border-border">
          {post.content.split('\n\n').map((paragraph, index) => {
            // Handle headers
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{paragraph.replace('## ', '')}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-medium mt-4 mb-2">{paragraph.replace('### ', '')}</h3>
            }
            
            // Handle lists
            if (paragraph.includes('- **')) {
              const listItems = paragraph.split('\n').filter(line => line.trim().startsWith('- '))
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-4">
                  {listItems.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      <span dangerouslySetInnerHTML={{ 
                        __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>
              )
            }
            
            // Handle regular paragraphs
            if (paragraph.trim() && !paragraph.startsWith('#')) {
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  <span dangerouslySetInnerHTML={{ 
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                  }} />
                </p>
              )
            }
            
            return null
          })}
        </article>
        
        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-ryx-gold hover:bg-ryx-gold/90 text-ryx-navy font-semibold rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Read More Articles
          </Link>
        </footer>
      </div>
    </section>
  );
}


