# Balanced List Component

A sophisticated, animated list component with phase management, status tracking, and priority levels. Built with Framer Motion for smooth animations and styled with your RYX brand colors.

## Features

### 🎨 **Brand-Aligned Colors**
- Uses your RYX brand color scheme (blue-based)
- Consistent with your design system
- Dark mode support

### ✨ **Smooth Animations**
- Spring-based animations with staggered reveals
- Hover effects with scale and lift
- Progress indicators for in-progress items
- Staggered item entrance animations

### 📊 **Phase Management**
- **Planning** (Blue) - Initial project planning
- **Development** (Purple) - Active development work
- **Testing** (Orange) - Quality assurance
- **Deployment** (Green) - Production deployment
- **Maintenance** (Indigo) - Ongoing maintenance

### 🏷️ **Status Tracking**
- **Pending** (Gray) - Not started
- **In Progress** (Blue) - Currently being worked on
- **Completed** (Green) - Finished

### ⭐ **Priority Levels**
- **Low** (Gray) - Low priority
- **Medium** (Yellow) - Medium priority
- **High** (Red) - High priority

## Usage

### Basic Usage

```tsx
import { BalancedList, ListItem } from "@/components/ui/balanced-list";

const items: ListItem[] = [
  {
    id: "1",
    title: "Website Redesign",
    description: "Complete overhaul of the main website",
    phase: "planning",
    status: "completed",
    priority: "high",
    assignee: "Sarah Johnson",
    dueDate: "2024-01-15",
  },
  // ... more items
];

function MyComponent() {
  return (
    <BalancedList 
      items={items}
      showPhases={true}
      showStatus={true}
      showPriority={true}
      animateOnMount={true}
    />
  );
}
```

### With Phase Filtering

```tsx
import { BalancedList, PhaseFilter, ListItem } from "@/components/ui/balanced-list";
import { useState } from "react";

function MyComponent() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState(items);

  const handlePhaseChange = (phase: string | null) => {
    setSelectedPhase(phase);
    if (phase === null) {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.phase === phase));
    }
  };

  return (
    <div>
      <PhaseFilter 
        selectedPhase={selectedPhase} 
        onPhaseChange={handlePhaseChange} 
      />
      <BalancedList items={filteredItems} />
    </div>
  );
}
```

### Using the Showcase Component

```tsx
import { BalancedListShowcase } from "@/components/sections/balanced-list-showcase";

function MyPage() {
  return (
    <BalancedListShowcase
      title="Project Management"
      description="Track your projects through different phases"
      items={items}
      showControls={true}
    />
  );
}
```

## Props

### BalancedList Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ListItem[]` | - | Array of list items |
| `className` | `string` | - | Additional CSS classes |
| `showPhases` | `boolean` | `true` | Show phase indicators |
| `showStatus` | `boolean` | `true` | Show status indicators |
| `showPriority` | `boolean` | `true` | Show priority indicators |
| `animateOnMount` | `boolean` | `true` | Animate items on mount |

### ListItem Interface

```tsx
interface ListItem {
  id: string;
  title: string;
  description: string;
  phase: "planning" | "development" | "testing" | "deployment" | "maintenance";
  status: "pending" | "in-progress" | "completed";
  priority: "low" | "medium" | "high";
  assignee?: string;
  dueDate?: string;
}
```

## Animation Features

### Entrance Animations
- Items animate in with staggered timing (150ms delay between items)
- Spring-based animations with natural feel
- Blur effect that clears as items appear

### Hover Effects
- Items lift up slightly on hover
- Scale effect for interactive feedback
- Color transitions for brand consistency

### Progress Indicators
- Animated progress bars for in-progress items
- Gradient colors matching the phase
- Continuous animation for visual appeal

## Color Scheme

The component uses your RYX brand colors:

- **Primary Blue**: `hsl(221.2 83.2% 53.3%)` - Your brand blue
- **Phase Colors**: Each phase has its own color palette
- **Status Colors**: Semantic colors for different statuses
- **Priority Colors**: Clear visual hierarchy

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- High contrast mode compatible
- Focus indicators for interactive elements

## Performance

- Optimized animations using Framer Motion
- Efficient re-renders with React state management
- Lazy loading of animations
- Smooth 60fps animations

## Examples

See the test page at `/test` for a complete working example with sample data and all features enabled.
