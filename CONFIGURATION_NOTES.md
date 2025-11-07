# Altius 2025 - Configuration Notes

## 🎯 Project Structure (Cleaned & Streamlined)

### ✅ Active Pages (4 Core Pages)
- **Home** (`/app/page.tsx`) - Hero, countdown, stats, featured events
- **Events** (`/app/events/page.tsx`) - Event listing with search and filters
- **Gallery** (`/app/gallery/page.tsx`) - Photo/video gallery with lightbox
- **About** (`/app/about/page.tsx`) - About Altius information

### ❌ Removed Features
- Admin/Super Admin pages
- Login/Signup authentication
- Profile management
- Leaderboard/Scoreboard
- Contact form
- Registration system
- API routes for user management

---

## 🔧 Required Configuration

### 1. Rulebook PDF Link

**Replace this placeholder in 3 files:**

```
YOUR_GOOGLE_DRIVE_RULEBOOK_LINK
```

**Files to update:**

1. **`components/Navbar.tsx`** (Lines ~75 and ~157)
   - Desktop navbar rulebook button
   - Mobile navbar rulebook button

2. **`app/page.tsx`** (Line ~217)
   - Home page hero CTA button

3. **`app/about/page.tsx`** (Line ~116)
   - About page hero CTA button

**How to get Google Drive link:**
1. Upload your `rulebook.pdf` to Google Drive
2. Right-click → Share → Change to "Anyone with the link"
3. Copy the shareable link
4. Replace `YOUR_GOOGLE_DRIVE_RULEBOOK_LINK` with your link

---

## 📋 Navigation Structure

**Current Navigation:**
- Home
- Events
- Gallery
- About
- 📘 Rulebook (external link button)

---

## 🎨 Design System

### Color Palette
- **Primary Red:** `#E63946`
- **Primary Blue:** `#1D3557`
- **Accent Blue:** `#457B9D`
- **Background:** `#0B0C10`
- **Surface:** `#1F2833`
- **Text Primary:** `#F1FAEE`
- **Text Secondary:** `#C5C6C7`

### Typography
- **Headings:** Goldman Bold
- **Body:** Inter Regular
- **Taglines:** Montserrat Light/Semibold

---

## 📁 Data Management

### Mock Data (`lib/mockData.ts`)
Contains:
- **Events Data** - 8 sample events with details
- **Gallery Data** - 6 sample gallery items
- **Team Members** - 6 sample team members (for future use)

### What Was Removed:
- ❌ Leaderboard data and interface
- ❌ Registration links from events
- ❌ User authentication data

---

## 🚀 Features Overview

### Home Page
- Animated hero section with logo
- Countdown timer to event start
- Event statistics (animated counters)
- Featured live events
- CTA: Explore Events + View Rulebook

### Events Page
- Search functionality
- Filter by Department and Type
- Display all events in grid
- Event cards show: date, time, venue, type
- No registration - informational only

### Gallery Page
- Filter: All / Photos / Videos
- Masonry grid layout
- Lightbox modal for full view
- Static images (no external APIs)

### About Page
- Event overview and mission
- Statistics section
- Why Participate section
- When & Where information
- CTA: View Events + Rulebook

---

## 📦 Dependencies

Key packages used:
- `next` - Framework
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwindcss` - Styling

---

## 🎯 Next Steps

1. **Upload Rulebook PDF to Google Drive**
2. **Replace placeholder links** in 3 files
3. **Add real event images** to `/public/` folder
4. **Update mock data** with actual event details
5. **Add gallery photos** from past events
6. **Test all navigation flows**
7. **Deploy to production**

---

## 🔗 Quick Links

- [Navbar Component](components/Navbar.tsx)
- [Home Page](app/page.tsx)
- [Events Page](app/events/page.tsx)
- [Gallery Page](app/gallery/page.tsx)
- [About Page](app/about/page.tsx)
- [Mock Data](lib/mockData.ts)

---

**Last Updated:** November 6, 2025
**Project:** Altius 2025 - Srinivas Institute of Technology
**Status:** ✅ Cleaned & Ready for Configuration
