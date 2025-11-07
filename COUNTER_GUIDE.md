# Counter Component - Altius 2025

## 🎯 Overview
Animated number counter component with smooth rolling animation, perfect for displaying statistics, countdowns, and dynamic numbers.

## 📦 Installation
The Counter component is already installed in your project at:
- **Component**: `components/ui/Counter.tsx`
- **Styles**: `components/ui/Counter.css`

## 🚀 Quick Start

### Basic Usage
```tsx
import Counter from '@/components/ui/Counter';

<Counter
  value={500}
  fontSize={80}
  textColor="#F1FAEE"
  fontWeight="bold"
/>
```

### With Altius Red Theme
```tsx
<Counter
  value={25}
  fontSize={100}
  textColor="#E63946"
  fontWeight="900"
  borderRadius={12}
  horizontalPadding={20}
  counterStyle={{
    backgroundColor: 'rgba(230, 57, 70, 0.1)',
    border: '2px solid rgba(230, 57, 70, 0.3)'
  }}
  gradientFrom="#0B0C10"
  gradientTo="transparent"
/>
```

### Large Numbers (6 digits)
```tsx
<Counter
  value={100000}
  fontSize={70}
  places={[100000, 10000, 1000, 100, 10, 1]}
  textColor="#457B9D"
  fontWeight="bold"
/>
```

## 🎨 Altius Theme Examples

### Stats Section (Home Page)
```tsx
'use client';

import { useState, useEffect } from 'react';
import Counter from '@/components/ui/Counter';
import SpotlightCard from '@/components/SpotlightCard';

export default function StatsSection() {
  const [participants, setParticipants] = useState(0);
  const [events, setEvents] = useState(0);
  const [prizes, setPrizes] = useState(0);

  useEffect(() => {
    // Animate counters when section is visible
    setTimeout(() => setParticipants(500), 100);
    setTimeout(() => setEvents(25), 200);
    setTimeout(() => setPrizes(100), 300);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SpotlightCard className="p-8 text-center" spotlightColor="rgba(230, 57, 70, 0.2)">
        <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Participants</h3>
        <Counter
          value={participants}
          fontSize={60}
          textColor="#E63946"
          fontWeight="bold"
          gradientFrom="#0B0C10"
          gradientTo="transparent"
        />
        <p className="text-gray-500 text-sm mt-4">Students Registered</p>
      </SpotlightCard>

      <SpotlightCard className="p-8 text-center" spotlightColor="rgba(69, 123, 157, 0.2)">
        <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Events</h3>
        <Counter
          value={events}
          fontSize={60}
          textColor="#457B9D"
          fontWeight="bold"
          gradientFrom="#0B0C10"
          gradientTo="transparent"
        />
        <p className="text-gray-500 text-sm mt-4">Total Competitions</p>
      </SpotlightCard>

      <SpotlightCard className="p-8 text-center" spotlightColor="rgba(29, 53, 87, 0.2)">
        <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Prize Pool</h3>
        <Counter
          value={prizes}
          fontSize={60}
          textColor="#1D3557"
          fontWeight="bold"
          gradientFrom="#0B0C10"
          gradientTo="transparent"
        />
        <p className="text-gray-500 text-sm mt-4">Thousands in Prizes</p>
      </SpotlightCard>
    </div>
  );
}
```

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | **Required** | The number to display |
| `fontSize` | `number` | `100` | Font size in pixels |
| `padding` | `number` | `0` | Vertical padding |
| `places` | `number[]` | `[100, 10, 1]` | Place values for digits (e.g., `[1000, 100, 10, 1]` for 4 digits) |
| `gap` | `number` | `8` | Gap between digits in pixels |
| `borderRadius` | `number` | `4` | Border radius in pixels |
| `horizontalPadding` | `number` | `8` | Horizontal padding in pixels |
| `textColor` | `string` | `'white'` | Text color |
| `fontWeight` | `string \| number` | `'bold'` | Font weight |
| `containerStyle` | `CSSProperties` | `undefined` | Custom styles for outer container |
| `counterStyle` | `CSSProperties` | `undefined` | Custom styles for counter container |
| `digitStyle` | `CSSProperties` | `undefined` | Custom styles for each digit |
| `gradientHeight` | `number` | `16` | Height of gradient overlays |
| `gradientFrom` | `string` | `'black'` | Gradient start color |
| `gradientTo` | `string` | `'transparent'` | Gradient end color |
| `topGradientStyle` | `CSSProperties` | `undefined` | Custom top gradient styles |
| `bottomGradientStyle` | `CSSProperties` | `undefined` | Custom bottom gradient styles |

## 🎨 Altius Color Palette

Use these colors for consistency:

```tsx
// Primary Red
textColor="#E63946"
backgroundColor="rgba(230, 57, 70, 0.1)"
border="2px solid rgba(230, 57, 70, 0.3)"

// Primary Blue
textColor="#457B9D"
backgroundColor="rgba(69, 123, 157, 0.1)"
border="2px solid rgba(69, 123, 157, 0.3)"

// Dark Blue
textColor="#1D3557"
backgroundColor="rgba(29, 53, 87, 0.1)"
border="2px solid rgba(29, 53, 87, 0.3)"

// Light
textColor="#F1FAEE"

// Background
gradientFrom="#0B0C10"
```

## 💡 Usage Tips

1. **State Management**: Use `useState` to control the counter value
2. **Animation Timing**: Use `setTimeout` or `useEffect` to trigger animations
3. **Place Values**: For 3-digit numbers use `[100, 10, 1]`, for 6-digit use `[100000, 10000, 1000, 100, 10, 1]`
4. **Gradients**: Match `gradientFrom` to your background color for seamless overflow fade
5. **Performance**: The component uses Framer Motion's `useSpring` for smooth, physics-based animations

## 🔥 Live Examples

Check out `COUNTER_EXAMPLES.tsx` for a complete interactive demo with all variations and use cases.

## ♿ Accessibility

The component includes:
- `prefers-reduced-motion` support
- Proper semantic HTML
- Screen reader friendly

## 📱 Responsive

The counter automatically scales with `fontSize` prop. For responsive designs:

```tsx
<Counter
  fontSize={60}  // Use smaller sizes for mobile
  // ... other props
  className="text-4xl md:text-6xl lg:text-8xl" // Tailwind responsive classes
/>
```

## 🎯 Common Use Cases

1. **Homepage Statistics** - Show participants, events, prizes
2. **Countdown Timers** - Days/hours remaining
3. **Live Updates** - Real-time registration counts
4. **Achievement Displays** - Score counters, milestones
5. **Prize Pool** - Dynamic prize amounts

---

**Created for Altius 2025** 🚀
Powered by Framer Motion
