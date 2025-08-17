"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BalancedList, PhaseFilter, ListItem } from "@/components/ui/balanced-list";
import { Filter, Settings, Eye, EyeOff } from "lucide-react";
import { 
  fadeInUp, 
  staggerParent, 
  enhancedButton,
  controlPanel,
  glassContainer
} from "@/lib/motionVariants";

interface BalancedListShowcaseProps {
  title?: string;
  description?: string;
  items: ListItem[];
  showControls?: boolean;
  className?: string;
}

export function BalancedListShowcase({
  title = "Project Phases",
  description = "Track your projects through different phases with beautiful animations",
  items,
  showControls = true,
  className,
}: BalancedListShowcaseProps) {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [showPhases, setShowPhases] = useState(true);
  const [showStatus, setShowStatus] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const [filteredItems, setFilteredItems] = useState(items);

  const handlePhaseChange = (phase: string | null) => {
    setSelectedPhase(phase);
    if (phase === null) {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.phase === phase));
    }
  };

  const statsData = [
    { 
      label: "Total", 
      value: items.length, 
      color: "from-ryx-silver to-ryx-gold",
      description: "All projects"
    },
    { 
      label: "In Progress", 
      value: items.filter(i => i.status === "in-progress").length, 
      color: "from-purple-500 to-purple-600",
      description: "Active work"
    },
    { 
      label: "Completed", 
      value: items.filter(i => i.status === "completed").length, 
      color: "from-green-500 to-green-600",
      description: "Finished"
    },
    { 
      label: "High Priority", 
      value: items.filter(i => i.priority === "high").length, 
      color: "from-red-500 to-red-600",
      description: "Urgent"
    },
  ];

  return (
    <section className={`py-12 md:py-16 lg:py-20 bg-gradient-to-br from-ryx-white via-ryx-silver/5 to-ryx-gold/5 dark:from-ryx-navy dark:via-ryx-navy-light/10 dark:to-ryx-navy-dark/20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ryx-gold mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-ryx-silver max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Controls */}
        {showControls && (
          <motion.div
            variants={controlPanel}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 p-4 md:p-6 bg-ryx-navy/60 backdrop-blur-md rounded-2xl shadow-xl border border-ryx-bronze/30 max-w-4xl mx-auto"
          >
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <Filter className="w-5 h-5 text-ryx-gold" />
              <span className="text-sm md:text-base font-medium text-ryx-gold">Display:</span>
            </motion.div>
            
            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                onClick={() => setShowPhases(!showPhases)}
                variants={enhancedButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border transition-all duration-300 ${
                  showPhases
                    ? "bg-ryx-bronze/25 text-ryx-bronze-light border-ryx-bronze/40 shadow-lg"
                    : "bg-ryx-silver/10 text-ryx-silver hover:bg-ryx-silver/20 border-ryx-silver/20"
                }`}
              >
                <motion.div
                  animate={{ rotate: showPhases ? 0 : 180 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {showPhases ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </motion.div>
                Phases
              </motion.button>
              
              <motion.button
                onClick={() => setShowStatus(!showStatus)}
                variants={enhancedButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border transition-all duration-300 ${
                  showStatus
                    ? "bg-green-500/25 text-green-400 border-green-500/40 shadow-lg"
                    : "bg-ryx-silver/10 text-ryx-silver hover:bg-ryx-silver/20 border-ryx-silver/20"
                }`}
              >
                <motion.div
                  animate={{ rotate: showStatus ? 0 : 180 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {showStatus ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </motion.div>
                Status
              </motion.button>
              
              <motion.button
                onClick={() => setShowPriority(!showPriority)}
                variants={enhancedButton}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border transition-all duration-300 ${
                  showPriority
                    ? "bg-yellow-500/25 text-yellow-400 border-yellow-500/40 shadow-lg"
                    : "bg-ryx-silver/10 text-ryx-silver hover:bg-ryx-silver/20 border-ryx-silver/20"
                }`}
              >
                <motion.div
                  animate={{ rotate: showPriority ? 0 : 180 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {showPriority ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </motion.div>
                Priority
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Phase Filter */}
        <motion.div 
          variants={fadeInUp} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <PhaseFilter 
            selectedPhase={selectedPhase} 
            onPhaseChange={handlePhaseChange} 
          />
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              whileTap={{ scale: 0.97 }}
              className="group p-4 md:p-6 rounded-xl bg-ryx-navy/60 backdrop-blur-md shadow-xl border border-ryx-bronze/30 text-center cursor-pointer hover:shadow-2xl hover:shadow-ryx-gold/20 transition-all duration-300"
            >
              <motion.div 
                className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 mx-auto shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span 
                  className="text-white font-bold text-lg md:text-xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  {stat.value}
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-sm md:text-base font-semibold text-ryx-gold group-hover:text-ryx-bronze-light transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                {stat.label}
              </motion.h3>
              <motion.p 
                className="text-xs md:text-sm text-ryx-silver group-hover:text-ryx-silver/80 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.9 }}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Balanced List */}
        <motion.div
          variants={glassContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          className="bg-ryx-navy/40 backdrop-blur-lg rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-ryx-bronze/30 relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-ryx-bronze/5 via-transparent to-ryx-gold/5 opacity-50" />
          
          <div className="relative z-10">
            <BalancedList 
              items={filteredItems}
              showPhases={showPhases}
              showStatus={showStatus}
              showPriority={showPriority}
              animateOnMount={true}
            />
          </div>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-center py-12 md:py-16"
          >
            <motion.div 
              className="w-20 h-20 bg-gradient-to-br from-ryx-silver/20 to-ryx-bronze/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Settings className="w-10 h-10 text-ryx-gold" />
            </motion.div>
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-ryx-gold mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              No projects found
            </motion.h3>
            <motion.p 
              className="text-ryx-silver text-base md:text-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Try adjusting your filters or add new projects to get started.
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
}