"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle2, Clock, TrendingUp, Users, Target, Star, Code2, TestTube2, Rocket as RocketIcon, Wrench as WrenchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  listItem,
  phaseBadge,
  statusBadge,
  hoverButton,
  progressMotion,
  progressPulse,
  staggerParent
} from "@/lib/motionVariants";

export interface ListItem {
  id: string;
  title: string;
  description: string;
  phase: "planning" | "development" | "testing" | "deployment" | "maintenance";
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  assignee?: string;
  dueDate?: string;
}

interface BalancedListProps {
  items: ListItem[];
  className?: string;
  showPhases?: boolean;
  showStatus?: boolean;
  showPriority?: boolean;
  animateOnMount?: boolean;
}

const phaseConfig = {
  planning: {
    icon: Target,
    color: "from-ryx-bronze to-ryx-bronze-dark",
    bgColor: "bg-ryx-bronze/10 dark:bg-ryx-bronze/20",
    borderColor: "border-ryx-bronze/30 dark:border-ryx-bronze/50",
    textColor: "text-ryx-bronze dark:text-ryx-bronze-light",
  },
  development: {
    icon: Code2,
    color: "from-ryx-gold to-ryx-gold-dark",
    bgColor: "bg-ryx-gold/10 dark:bg-ryx-gold/20",
    borderColor: "border-ryx-gold/30 dark:border-ryx-gold/50",
    textColor: "text-ryx-gold dark:text-ryx-gold-light",
  },
  testing: {
    icon: TestTube2,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    borderColor: "border-amber-500/30 dark:border-amber-500/50",
    textColor: "text-amber-600 dark:text-amber-400",
  },
  deployment: {
    icon: RocketIcon,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
    borderColor: "border-green-500/30 dark:border-green-500/50",
    textColor: "text-green-600 dark:text-green-400",
  },
  maintenance: {
    icon: WrenchIcon,
    color: "from-ryx-silver to-gray-500",
    bgColor: "bg-ryx-silver/10 dark:bg-gray-500/20",
    borderColor: "border-ryx-silver/30 dark:border-gray-500/50",
    textColor: "text-ryx-silver dark:text-gray-300",
  },
};

const statusConfig = {
  pending: {
    icon: Clock,
    color: "text-gray-500 dark:text-gray-400",
    bgColor: "bg-gray-100 dark:bg-gray-800",
  },
  "in-progress": {
    icon: TrendingUp,
    color: "text-ryx-gold",
    bgColor: "bg-ryx-silver/10",
  },
  completed: {
    icon: CheckCircle2,
    color: "text-green-500 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
  },
};

const priorityConfig = {
  low: {
    color: "text-gray-500 dark:text-gray-400",
    bgColor: "bg-gray-100 dark:bg-gray-800",
  },
  medium: {
    color: "text-yellow-500 dark:text-yellow-400",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
  },
  high: {
    color: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-100 dark:bg-red-900/30",
  },
};

// Icon components
const Code = ({ className }: { className?: string }) => (
  <svg className={cn("w-4 h-4", className)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const TestTube = ({ className }: { className?: string }) => (
  <svg className={cn("w-4 h-4", className)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const Rocket = ({ className }: { className?: string }) => (
  <svg className={cn("w-4 h-4", className)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Wrench = ({ className }: { className?: string }) => (
  <svg className={cn("w-4 h-4", className)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export function BalancedList({
  items,
  className,
  showPhases = true,
  showStatus = true,
  showPriority = true,
  animateOnMount = true,
}: BalancedListProps) {
  const [visibleItems, setVisibleItems] = useState<ListItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    if (animateOnMount) {
      // Animate items in sequence
      items.forEach((item, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, item]);
        }, index * 150);
      });
    } else {
      setVisibleItems(items);
    }
  }, [items, animateOnMount]);

  // Using imported motion variants for consistent animations

  return (
    <motion.div
      className={cn("space-y-4", className)}
      variants={staggerParent}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {visibleItems.map((item) => {
          const phase = phaseConfig[item.phase];
          const status = statusConfig[item.status];
          const priority = priorityConfig[item.priority];
          const PhaseIcon = phase.icon;
          const StatusIcon = status.icon;

          return (
            <motion.div
              key={item.id}
              variants={listItem}
              whileHover="hover"
              whileTap="tap"
              layout
              className={cn(
                "group relative p-6 rounded-xl border transition-all duration-300",
                "bg-ryx-navy dark:bg-ryx-navy-dark",
                "border-ryx-bronze/20 dark:border-ryx-bronze/30",
                "hover:border-ryx-gold/50 dark:hover:border-ryx-gold/40",
                "hover:shadow-lg hover:shadow-ryx-gold/10",
                "cursor-pointer backdrop-blur-sm",
                selectedItem === item.id && "ring-2 ring-ryx-gold/50 ring-offset-2 ring-offset-ryx-navy"
              )}
              onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
            >
                              {/* Background gradient overlay */}
                <div className={cn(
                  "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                  `bg-gradient-to-r ${phase.color}`
                )} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ryx-white group-hover:text-ryx-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ryx-silver mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Status indicator */}
                  {showStatus && (
                    <motion.div
                      variants={statusBadge}
                      className={cn(
                        "flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium",
                        status.bgColor,
                        status.color
                      )}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {item.status.replace("-", " ")}
                    </motion.div>
                  )}
                </div>

                {/* Phase and Priority */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                                         {/* Phase */}
                     {showPhases && (
                       <motion.div
                         variants={phaseBadge}
                         className={cn(
                           "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium",
                           phase.bgColor,
                           phase.textColor,
                           phase.borderColor,
                           "border backdrop-blur-sm"
                         )}
                       >
                         <PhaseIcon className="w-3 h-3" />
                         {item.phase.charAt(0).toUpperCase() + item.phase.slice(1)}
                       </motion.div>
                     )}

                                         {/* Priority */}
                     {showPriority && (
                       <motion.div
                         variants={phaseBadge}
                         className={cn(
                           "flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium",
                           priority.bgColor,
                           priority.color,
                           "backdrop-blur-sm"
                         )}
                       >
                         <Star className="w-3 h-3" />
                         {item.priority}
                       </motion.div>
                     )}
                  </div>

                                     {/* Additional info */}
                   <div className="flex items-center gap-4 text-xs text-ryx-silver">
                     {item.assignee && (
                       <div className="flex items-center gap-1">
                         <Users className="w-3 h-3" />
                         {item.assignee}
                       </div>
                     )}
                     {item.dueDate && (
                       <div className="flex items-center gap-1">
                         <Clock className="w-3 h-3" />
                         {item.dueDate}
                       </div>
                     )}
                   </div>
                </div>

                                 {/* Progress indicator for in-progress items */}
                 {item.status === "in-progress" && (
                   <motion.div
                     variants={progressMotion(60)}
                     className="mt-4 h-1 bg-ryx-silver/20 rounded-full overflow-hidden"
                   >
                     <motion.div
                       variants={progressPulse}
                       className="h-full bg-gradient-to-r from-ryx-gold to-ryx-bronze rounded-full"
                     />
                   </motion.div>
                 )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

// Phase filter component
export function PhaseFilter({ 
  selectedPhase, 
  onPhaseChange 
}: { 
  selectedPhase: string | null; 
  onPhaseChange: (phase: string | null) => void;
}) {
  const phases = Object.keys(phaseConfig);

  return (
    <motion.div 
      className="flex flex-wrap gap-2 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        variants={hoverButton}
        whileHover="hover"
        whileTap="tap"
        onClick={() => onPhaseChange(null)}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
          selectedPhase === null
            ? "bg-ryx-gold text-ryx-navy shadow-lg"
            : "bg-ryx-silver/10 text-ryx-silver hover:bg-ryx-silver/20 border border-ryx-silver/20"
        )}
      >
        All Phases
      </motion.button>
      
      {phases.map((phase) => {
        const config = phaseConfig[phase as keyof typeof phaseConfig];
        const Icon = config.icon;
        
        return (
          <motion.button
            key={phase}
            variants={hoverButton}
            whileHover="hover"
            whileTap="tap"
            onClick={() => onPhaseChange(phase)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
              selectedPhase === phase
                ? `${config.bgColor} ${config.textColor} shadow-lg border ${config.borderColor}`
                : "bg-ryx-silver/10 text-ryx-silver hover:bg-ryx-silver/20 border border-ryx-silver/20"
            )}
          >
            <Icon className="w-4 h-4" />
            {phase.charAt(0).toUpperCase() + phase.slice(1)}
          </motion.button>
        );
      })}
    </motion.div>
  );
}
