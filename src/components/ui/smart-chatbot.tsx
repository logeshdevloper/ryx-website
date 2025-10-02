"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  id: string
  type: 'bot' | 'user'
  text: string
  options?: string[]
  timestamp: Date
}

// Enhanced smart response system
const smartResponses = {
  // Greeting patterns
  greeting: {
    patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    response: "👋 Hello! I'm RYX AI Assistant. I can help you with:\n\n• Web Development & Design\n• Database Solutions\n• AI Integration\n• Custom Project Quotes\n• Project Timelines\n\nWhat interests you?",
    options: ["Our Services", "Get a Quote", "Project Timeline", "Contact Us"]
  },

  // Services
  services: {
    patterns: ['service', 'what do you do', 'what you offer', 'offerings', 'capabilities', 'work', 'specialize'],
    response: "🚀 **RYX Comprehensive Services:**\n\n**Development:**\n• Custom Web Apps (React/Next.js)\n• Mobile Apps (React Native)\n• Database Architecture\n\n**Design & AI:**\n• UI/UX Design\n• AI Integration\n• Chatbot Development\n\n**Growth:**\n• SEO Optimization\n• Digital Marketing\n\nWhich area interests you most?",
    options: ["Web Development", "Database Solutions", "AI Integration", "Get a Quote"]
  },

  // Web Development
  webDev: {
    patterns: ['web', 'website', 'site', 'landing', 'frontend', 'react', 'next', 'nextjs', 'responsive'],
    response: "💻 **Web Development Services:**\n\n✅ Modern Tech Stack\n→ React 19, Next.js 15, TypeScript\n\n✅ Features Included:\n→ Responsive design (all devices)\n→ SEO optimization\n→ Lightning-fast loading\n→ Modern UI/UX\n→ Dark/Light mode\n\n⏱️ Timeline: 2-4 weeks\n💬 Custom pricing based on your needs\n\nLet's discuss your project!",
    options: ["Get Custom Quote", "See Examples", "Other Services", "Contact Team"]
  },

  // Database
  database: {
    patterns: ['database', 'db', 'sql', 'mysql', 'postgres', 'supabase', 'backend', 'data', 'storage'],
    response: "🗄️ **Database Solutions:**\n\n✅ Database Setup\n→ Supabase, MySQL, PostgreSQL\n\n✅ Services:\n→ Schema design & optimization\n→ Migration & backup\n→ Performance tuning\n→ Security implementation\n\n⏱️ Timeline: 1-2 weeks\n💬 Custom pricing for your specific needs\n\nLet's discuss your database requirements!",
    options: ["Get Custom Quote", "Migration Help", "Optimization", "Contact Team"]
  },

  // AI Integration
  ai: {
    patterns: ['ai', 'artificial intelligence', 'chatgpt', 'openai', 'machine learning', 'ml', 'bot', 'automation', 'nlp', 'chatbot'],
    response: "🤖 **AI Integration Services:**\n\n✅ ChatGPT Integration\n→ Custom AI assistants\n→ Chatbots like this one!\n\n✅ AI Features:\n→ Natural language processing\n→ Content generation\n→ Smart recommendations\n→ Automated workflows\n\n⏱️ Timeline: 1-3 weeks\n💬 Custom pricing based on complexity\n\nReady to add AI to your project?",
    options: ["Build Chatbot", "AI Features", "Get Quote", "Contact Team"]
  },

  // Pricing
  pricing: {
    patterns: ['price', 'pricing', 'cost', 'how much', 'budget', 'rates', 'fees', 'charge', 'expensive', 'cheap', 'affordable', 'money'],
    response: "💰 **Custom Design & Pricing:**\n\nEvery project is unique! We create custom solutions tailored to your needs.\n\n✨ **What We Offer:**\n• Personalized project scope\n• Flexible timelines\n• Quality-first approach\n• Competitive rates\n\n**Get Your Custom Quote:**\n\n📧 Contact us with your project details:\n• Email: hello@ryx.dev\n• Or fill our contact form\n\n📞 We'll respond within 24 hours with a detailed proposal!\n\nReady to collaborate?",
    options: ["Contact Us", "Our Services", "Project Timeline", "See Examples"]
  },

  // Timeline
  timeline: {
    patterns: ['timeline', 'time', 'how long', 'duration', 'when', 'deadline', 'delivery', 'fast', 'quick', 'speed'],
    response: "⏱️ **Project Timelines:**\n\n⚡ **Quick Projects** (1-2 weeks)\n→ Landing pages\n→ Simple websites\n\n⚡ **Standard** (2-4 weeks)\n→ Business websites\n→ Portfolio sites\n\n⚡ **Complex** (4-8 weeks)\n→ Web applications\n→ E-commerce sites\n\n⚡ **Enterprise** (8-12 weeks)\n→ SaaS platforms\n→ Custom solutions\n\n**Our Process:**\n✅ Weekly updates\n✅ Live previews\n✅ Fast iterations\n\n\"Deploy in days, not months!\"",
    options: ["Start Project", "Our Process", "Get Quote", "Contact Team"]
  },

  // Contact
  contact: {
    patterns: ['contact', 'email', 'call', 'reach', 'talk', 'discuss', 'meeting', 'consultation', 'touch', 'connect', 'collaborate', 'work together'],
    response: "📧 **Let's Collaborate!**\n\n✉️ **Email:** hello@ryx.dev\n📱 **Website:** ryx.dev\n⏰ **Response Time:** < 24 hours\n🌍 **Working:** Worldwide (Remote)\n\n**What We Need:**\n• Your project vision\n• Key requirements\n• Timeline preferences\n• Any specific features\n\n**Next Steps:**\n1. Send us an email\n2. We'll discuss your needs\n3. Get a custom quote\n4. Start building together!\n\nReady to create something amazing?",
    options: ["Email hello@ryx.dev", "Our Services", "Project Examples", "Ask More"]
  },

  // Quote
  quote: {
    patterns: ['quote', 'estimate', 'proposal', 'free quote', 'custom quote'],
    response: "📝 **Get Your Custom Quote:**\n\nEvery project is unique! We'll create a personalized proposal for you.\n\n**Share Your Project Details:**\n\n1️⃣ What are you building?\n2️⃣ Key features needed\n3️⃣ Timeline expectations\n4️⃣ Your budget range\n\n**Contact Methods:**\n✉️ Email: hello@ryx.dev\n📝 Visit our contact page\n\n**Our Promise:**\n✅ Response within 24 hours\n✅ Detailed proposal\n✅ Transparent pricing\n✅ No hidden costs\n\nLet's start your project!",
    options: ["Email Us", "Contact Page", "Our Services", "See Examples"]
  },

  // Portfolio/Work
  portfolio: {
    patterns: ['portfolio', 'work', 'projects', 'examples', 'showcase', 'case study', 'previous', 'sample'],
    response: "🎨 **Our Work:**\n\nWe've built amazing projects:\n\n✅ SaaS Platforms\n✅ E-commerce Sites\n✅ Business Websites\n✅ Mobile Applications\n✅ AI-Powered Tools\n\n**Tech Stack:**\n→ React, Next.js, TypeScript\n→ Tailwind CSS\n→ Supabase, PostgreSQL\n→ AI Integration (ChatGPT)\n\nWant to see examples?",
    options: ["View Portfolio", "Our Services", "Start Project", "Get Quote"]
  },

  // Thanks/Bye
  thanks: {
    patterns: ['thank', 'thanks', 'appreciate', 'bye', 'goodbye', 'see you'],
    response: "🙏 You're welcome! Feel free to reach out anytime.\n\n**Stay Connected:**\n✉️ Email: hello@ryx.dev\n🌐 Website: ryx.dev\n💬 Always here to help!\n\nHave a great day! 🚀",
    options: ["Contact Us", "Our Services", "Get Quote"]
  },

  // Default fallback
  default: {
    patterns: [],
    response: "🤔 I'm not quite sure about that!\n\nI can help you with:\n\n• **Services** - What we offer\n• **Custom Quotes** - Personalized pricing\n• **Timeline** - How long projects take\n• **Collaboration** - Let's work together\n• **Contact** - Reach our team\n\nWhat would you like to know?",
    options: ["Our Services", "Get Custom Quote", "Contact Us", "Timeline"]
  }
}

export function SmartChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "👋 Hi! I'm RYX AI Assistant.\n\nI can answer questions about our services, custom quotes, timelines, and collaboration!\n\nWhat would you like to know?",
      options: ["Our Services", "Get Custom Quote", "Project Timeline", "Contact Us"],
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestMatch = (userMessage: string): typeof smartResponses[keyof typeof smartResponses] => {
    const normalized = userMessage.toLowerCase().trim()

    // Try to find the best matching category
    let bestMatch: typeof smartResponses[keyof typeof smartResponses] = smartResponses.default
    let highestScore = 0

    for (const [key, data] of Object.entries(smartResponses)) {
      const patterns = data.patterns
      let score = 0

      // Check how many patterns match
      for (const pattern of patterns) {
        if (normalized.includes(pattern)) {
          score += pattern.length // Longer matches get higher priority
        }
      }

      if (score > highestScore) {
        highestScore = score
        bestMatch = data
      }
    }

    return highestScore > 0 ? bestMatch : smartResponses.default
  }

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: message,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = findBestMatch(message)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: botResponse.response,
        options: botResponse.options,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleOptionClick = (option: string) => {
    handleSendMessage(option)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full shadow-2xl hover:shadow-violet-500/50 flex items-center justify-center group transition-all duration-300"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />

            {/* Tooltip */}
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Ask me anything! 💬
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[420px] h-[650px] bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl shadow-violet-200/50 flex flex-col overflow-hidden border border-violet-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-2 ring-white/30">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">RYX AI</h3>
                  <p className="text-white/90 text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Always here to help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Close chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50/50 via-pink-50/50 to-blue-50/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2.5 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Avatar */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'bot'
                        ? 'bg-gradient-to-br from-violet-600 to-pink-600 ring-2 ring-violet-400/30'
                        : 'bg-gradient-to-br from-gray-700 to-gray-600'
                    }`}>
                      {message.type === 'bot' ? (
                        <Sparkles className="w-5 h-5 text-white" />
                      ) : (
                        <User className="w-5 h-5 text-white" />
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div>
                      <div className={`rounded-2xl px-4 py-3 shadow-md ${
                        message.type === 'bot'
                          ? 'bg-white border border-violet-200 text-gray-800'
                          : 'bg-gradient-to-r from-violet-600 to-pink-600 text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                      </div>

                      {/* Options */}
                      {message.type === 'bot' && message.options && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.options.map((option, idx) => (
                            <motion.button
                              key={idx}
                              onClick={() => handleOptionClick(option)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 text-xs font-semibold bg-white hover:bg-violet-50 text-violet-600 rounded-xl border border-violet-200 hover:border-violet-300 transition-all shadow-sm"
                            >
                              {option}
                            </motion.button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2.5"
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-violet-600 to-pink-600 ring-2 ring-violet-400/30">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 border border-violet-200 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-violet-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage(inputValue)
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything about RYX..."
                  className="flex-1 bg-purple-50/50 text-gray-900 placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 border border-violet-200"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-12 h-12 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all hover:scale-105 disabled:hover:scale-100"
                >
                  {isTyping ? (
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 text-white" />
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
