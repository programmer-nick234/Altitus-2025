# SpotlightCard Component Guide

## Overview
The SpotlightCard component creates an interactive card with a spotlight effect that follows the user's mouse cursor. It's been integrated into the About page with Altius 2025 theme colors.

## Installation Complete ✅

### Files Created:
1. **`components/SpotlightCard.tsx`** - Main component
2. **`components/SpotlightCard.css`** - Styling with spotlight effect

## Component Features

### 🎨 Theme Integration
- **Primary Color**: `rgba(230, 57, 70, 0.2)` - Altius Red
- **Secondary Color**: `rgba(69, 123, 157, 0.2)` - Altius Blue
- **Tertiary Color**: `rgba(29, 53, 87, 0.2)` - Altius Dark Blue
- Glassmorphism background matching your design system
- Smooth hover transitions and animations

### 🖱️ Interactive Effects
- Mouse-following spotlight effect
- Hover state with border color change
- Subtle lift animation on hover
- Mobile-optimized (touch devices have reduced effects)

## Usage

### Basic Usage
```tsx
import SpotlightCard from '@/components/SpotlightCard';

<SpotlightCard>
  <div>Your content here</div>
</SpotlightCard>
```

### With Custom Spotlight Color
```tsx
<SpotlightCard spotlightColor="rgba(230, 57, 70, 0.3)">
  <div>Your content here</div>
</SpotlightCard>
```

### With Custom ClassName
```tsx
<SpotlightCard className="custom-padding custom-height">
  <div>Your content here</div>
</SpotlightCard>
```

## Implemented Sections in About Page

### 1. Stats Cards (4 cards)
- **Days of Innovation** - Red spotlight
- **Participants** - Blue spotlight  
- **Events & Workshops** - Red spotlight (brighter)
- **Departments** - Dark blue spotlight

```tsx
<SpotlightCard 
  className="stats-card min-h-[220px]"
  spotlightColor="rgba(230, 57, 70, 0.2)"
>
  {/* Stats content */}
</SpotlightCard>
```

### 2. Why Participate Cards (3 cards)
- **Compete & Win** - Red spotlight
- **Network** - Blue spotlight
- **Learn & Grow** - Red spotlight

```tsx
<SpotlightCard 
  className="info-card h-full p-8"
  spotlightColor="rgba(230, 57, 70, 0.25)"
>
  {/* Info content */}
</SpotlightCard>
```

### 3. When & Where + Mission (2 cards)
- **When & Where** - Red spotlight
- **Our Mission** - Blue spotlight

```tsx
<SpotlightCard 
  className="h-full p-8"
  spotlightColor="rgba(230, 57, 70, 0.2)"
>
  {/* Content */}
</SpotlightCard>
```

### 4. Final CTA Card
- **ALTIUS 2025** - Bright red spotlight

```tsx
<SpotlightCard 
  className="p-12 md:p-16 lg:p-20"
  spotlightColor="rgba(230, 57, 70, 0.3)"
>
  {/* CTA content */}
</SpotlightCard>
```

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | Content to display inside the card |
| `className` | `string` | `''` | Additional CSS classes |
| `spotlightColor` | `string` | `'rgba(230, 57, 70, 0.2)'` | Color of the spotlight effect |

## Customization Examples

### Different Spotlight Intensities
```tsx
// Subtle
<SpotlightCard spotlightColor="rgba(230, 57, 70, 0.1)">

// Medium (default)
<SpotlightCard spotlightColor="rgba(230, 57, 70, 0.2)">

// Bright
<SpotlightCard spotlightColor="rgba(230, 57, 70, 0.4)">
```

### Using Theme Colors
```tsx
// Altius Red
<SpotlightCard spotlightColor="rgba(230, 57, 70, 0.2)">

// Altius Blue
<SpotlightCard spotlightColor="rgba(69, 123, 157, 0.2)">

// Altius Dark Blue
<SpotlightCard spotlightColor="rgba(29, 53, 87, 0.2)">

// White/Light
<SpotlightCard spotlightColor="rgba(241, 250, 238, 0.1)">
```

### Advanced Styling
```tsx
<SpotlightCard 
  className="p-10 min-h-[300px] flex flex-col items-center justify-center"
  spotlightColor="rgba(230, 57, 70, 0.25)"
>
  {/* Centered content with custom padding and height */}
</SpotlightCard>
```

## CSS Variables

The component uses CSS custom properties for the spotlight effect:
- `--mouse-x`: X position of the mouse
- `--mouse-y`: Y position of the mouse  
- `--spotlight-color`: Color of the spotlight (set via prop)

## Performance Considerations

### Mobile Optimization
- On touch devices (mobile), the spotlight effect is disabled to improve performance
- Cards still maintain hover effects via CSS transforms
- Reduced motion is respected via the `@media (hover: none)` query

### Best Practices
1. Use appropriate spotlight opacity (0.1 - 0.4 recommended)
2. Don't nest SpotlightCards
3. Keep content layout responsive
4. Test on various devices

## Browser Compatibility
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Supports backdrop-filter (with fallback)

## Accessibility
- Maintains focus states
- Keyboard navigation supported
- Screen reader friendly (spotlight is decorative only)
- Respects reduced motion preferences

## Troubleshooting

### Spotlight not appearing
- Ensure the card has sufficient size (min-height)
- Check that `spotlightColor` has proper RGBA format
- Verify hover is working (try on desktop first)

### Performance issues
- Reduce the number of SpotlightCards on a single page
- Lower the opacity in `spotlightColor`
- Check if backdrop-filter is causing issues

### Styling conflicts
- Use specific classNames to override defaults
- Check CSS specificity
- Ensure global styles aren't interfering

## Future Enhancements

Possible improvements you could add:
1. Add glow intensity prop
2. Implement spotlight size control
3. Add animation speed control
4. Create spotlight color presets
5. Add multi-color gradient spotlight option

## Credits
Component inspired by React Bits SpotlightCard, customized for Altius 2025 branding.

---

**Created for**: ALTIUS 2025  
**Theme**: Dark mode with red/blue accents  
**Framework**: Next.js 14 + TypeScript + Tailwind CSS
