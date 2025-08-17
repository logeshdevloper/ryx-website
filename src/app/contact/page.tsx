import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact RYX - Get Your Project Started Today",
  description: "Ready to build your micro SaaS, optimize your database, or develop AI solutions? Contact RYX for a free consultation and project estimate.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@ryx.dev",
    description: "We&apos;ll respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Response Time",
    content: "< 24 hours",
    description: "Quick turnaround on all inquiries",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Remote First",
    description: "Working with clients worldwide",
  },
  {
    icon: Phone,
    title: "Consultation",
    content: "Free 30-min call",
    description: "Discuss your project requirements",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-ryx-silver/20 to-ryx-gold/10 dark:from-ryx-navy dark:via-ryx-navy-light/20 dark:to-ryx-navy-dark/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">
                Amazing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to turn your idea into a production-ready solution? Get in touch and let&apos;s 
              discuss how we can help you scale.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                  Whether you need database optimization, web development, or a complete micro SaaS solution, 
                  we&apos;re here to help. Reach out and let&apos;s start the conversation.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {item.title}
                            </h3>
                            <p className="text-primary font-medium mb-1">
                              {item.content}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* FAQ */}
                <div className="mt-16">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-6">
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-foreground mb-2">
                          How long does a typical project take?
                        </h4>
                        <p className="text-muted-foreground">
                          Most projects are completed in 2-8 weeks, depending on complexity. 
                          We provide detailed timelines during our initial consultation.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-foreground mb-2">
                          Do you work with existing codebases?
                        </h4>
                        <p className="text-muted-foreground">
                          Absolutely! We can optimize, enhance, or migrate your existing applications 
                          to modern tech stacks and best practices.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-foreground mb-2">
                          What&apos;s included in ongoing support?
                        </h4>
                        <p className="text-muted-foreground">
                          We offer maintenance, monitoring, updates, and feature additions. 
                          Support packages are tailored to your specific needs.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Start Your Project
                  </h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
