"use client";

import { useState } from "react";
import { BalancedList, PhaseFilter, ListItem } from "@/components/ui/balanced-list";
import { motion } from "framer-motion";

const sampleItems: ListItem[] = [
  {
    id: "1",
    title: "Website Redesign",
    description: "Complete overhaul of the main website with modern design and improved UX",
    phase: "planning",
    status: "completed",
    priority: "high",
    assignee: "Sarah Johnson",
    dueDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Native iOS and Android app for customer engagement",
    phase: "development",
    status: "in-progress",
    priority: "high",
    assignee: "Mike Chen",
    dueDate: "2024-03-20",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Connect third-party services and payment gateways",
    phase: "testing",
    status: "in-progress",
    priority: "medium",
    assignee: "Alex Rodriguez",
    dueDate: "2024-02-28",
  },
  {
    id: "4",
    title: "Database Migration",
    description: "Migrate from legacy system to cloud-based solution",
    phase: "deployment",
    status: "pending",
    priority: "high",
    assignee: "Emma Wilson",
    dueDate: "2024-04-10",
  },
  {
    id: "5",
    title: "Security Audit",
    description: "Comprehensive security review and vulnerability assessment",
    phase: "maintenance",
    status: "pending",
    priority: "medium",
    assignee: "David Kim",
    dueDate: "2024-03-15",
  },
  {
    id: "6",
    title: "Performance Optimization",
    description: "Improve loading times and overall application performance",
    phase: "development",
    status: "completed",
    priority: "low",
    assignee: "Lisa Thompson",
    dueDate: "2024-01-30",
  },
  {
    id: "7",
    title: "User Testing",
    description: "Conduct usability testing with target audience",
    phase: "testing",
    status: "completed",
    priority: "medium",
    assignee: "James Miller",
    dueDate: "2024-02-15",
  },
  {
    id: "8",
    title: "Content Management System",
    description: "Implement new CMS for easier content updates",
    phase: "planning",
    status: "in-progress",
    priority: "medium",
    assignee: "Rachel Green",
    dueDate: "2024-05-01",
  },
];

export default function TestPage() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState(sampleItems);

  const handlePhaseChange = (phase: string | null) => {
    setSelectedPhase(phase);
    if (phase === null) {
      setFilteredItems(sampleItems);
    } else {
      setFilteredItems(sampleItems.filter(item => item.phase === phase));
    }
  };

      return (
      <div className="min-h-screen bg-gradient-to-br from-ryx-navy via-ryx-navy-light to-ryx-navy-dark">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-ryx-gold mb-4">
              RYX Project Management
            </h1>
            <p className="text-lg text-ryx-silver max-w-2xl mx-auto">
              A luxurious and animated list showcasing different project phases with smooth transitions and premium brand colors.
            </p>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Phase Filter */}
          <PhaseFilter 
            selectedPhase={selectedPhase} 
            onPhaseChange={handlePhaseChange} 
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: "Total Projects", value: sampleItems.length, color: "from-ryx-silver to-ryx-gold" },
              { label: "In Progress", value: sampleItems.filter(i => i.status === "in-progress").length, color: "from-purple-500 to-purple-600" },
              { label: "Completed", value: sampleItems.filter(i => i.status === "completed").length, color: "from-green-500 to-green-600" },
              { label: "High Priority", value: sampleItems.filter(i => i.priority === "high").length, color: "from-red-500 to-red-600" },
                         ].map((stat, index) => (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                 className={`p-6 rounded-xl bg-ryx-navy/50 backdrop-blur-sm shadow-lg border border-ryx-bronze/20`}
               >
                 <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                   <span className="text-white font-bold text-lg">{stat.value}</span>
                 </div>
                 <h3 className="text-sm font-medium text-ryx-silver">{stat.label}</h3>
               </motion.div>
             ))}
          </motion.div>

                     {/* Balanced List */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="bg-ryx-navy/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-ryx-bronze/20"
           >
            <BalancedList 
              items={filteredItems}
              showPhases={true}
              showStatus={true}
              showPriority={true}
              animateOnMount={true}
            />
          </motion.div>

          {/* Features Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Smooth Animations",
                description: "Spring-based animations with staggered reveals and hover effects",
                icon: "🎬",
                color: "from-ryx-silver to-ryx-gold",
              },
              {
                title: "Phase Management",
                description: "Visual phase indicators with color-coded status and priority levels",
                icon: "📊",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Brand Aligned",
                description: "Colors and styling that match your RYX brand identity",
                icon: "🎨",
                color: "from-ryx-silver to-ryx-gold",
              },
                         ].map((feature, index) => (
               <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                 className="p-6 rounded-xl bg-ryx-navy/50 backdrop-blur-sm border border-ryx-bronze/20 shadow-lg"
               >
                 <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 text-2xl`}>
                   {feature.icon}
                 </div>
                 <h3 className="text-lg font-semibold text-ryx-gold mb-2">
                   {feature.title}
                 </h3>
                 <p className="text-ryx-silver">
                   {feature.description}
                 </p>
               </motion.div>
             ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
