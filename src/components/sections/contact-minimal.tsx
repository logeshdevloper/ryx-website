"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export function ContactMinimal() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.botcheck) {
      return;
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true)
        toast.success("Message sent successfully!");
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', message: '', botcheck: '' })
        }, 3000)
      } else {
        throw new Error(result.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm font-light text-muted-foreground mb-3 sm:mb-4 tracking-wide uppercase">
              Get in Touch
            </p>
            <h2 className="heading-2 mb-6 sm:mb-8">
              Let's start a
              <span className="text-muted-foreground/60"> conversation</span>
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h4 className="text-sm sm:text-base font-normal mb-1 sm:mb-2">Email</h4>
                <p className="text-sm sm:text-base text-muted-foreground break-all">contact@ryxdigital.com</p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-normal mb-1 sm:mb-2">Phone</h4>
                <p className="text-sm sm:text-base text-muted-foreground">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-normal mb-1 sm:mb-2">Location</h4>
                <p className="text-sm sm:text-base text-muted-foreground">Mumbai, India</p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-normal mb-1 sm:mb-2">Working Hours</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <CheckCircle className="w-16 h-16 text-foreground/60 mb-6" />
                <h3 className="heading-3 mb-2">Thank you!</h3>
                <p className="text-muted-foreground">
                  Your message has been sent. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full px-0 py-2 sm:py-3 bg-transparent border-0 border-b border-border focus:border-foreground focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}