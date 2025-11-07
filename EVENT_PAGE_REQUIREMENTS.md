# EVENT PAGE REQUIREMENTS - ANSWER SHEET

Please fill in your answers below. Copy this file and fill it out, then share with me.

---

## 📋 **EVENT DATA STRUCTURE**

### **1. EVENT TIMING & SCHEDULING**

**Q1.1:** Are all events on the same day or multiple days?
- [ ] Single day (Nov 10, 2025)
- [ ] Multiple days (Nov 10-12, 2025)
- [ ] Other: _______________

**Q1.2:** What time format do you use?
- [ ] 12-hour (10:00 AM)
- [ ] 24-hour (10:00)

**Q1.3:** Do you have end times for each event?
- [ ] Yes (e.g., "10:00 AM - 1:00 PM")
- [ ] No (only start times)

**Q1.4:** How should events be sorted?
- [ ] By start time (upcoming first)
- [ ] Manually ordered
- [ ] Alphabetically

---

### **2. DEPARTMENTS & CATEGORIES**

**Q2.1:** List all your departments (separate with commas):

Example: Computer Science, Electronics, Mechanical, Civil, etc.

**YOUR DEPARTMENTS:**
```
____________________________________________
____________________________________________
____________________________________________
```

**Q2.2:** Or use generic short codes?
- [ ] Yes, use: CSE, ECE, MECH, CIVIL, EEE, ISE, etc.
- [ ] No, use full names

---

### **3. EVENT POSTER IMAGES**

**Q3.1:** Confirm folder structure:
```
public/
  events/
    computer-science/
      event1.jpg
      event2.jpg
    electronics/
      event1.jpg
```
- [ ] Correct ✅
- [ ] Different (explain): _______________

**Q3.2:** Poster file naming convention:
- [ ] event-name.jpg (e.g., "code-sprint.jpg")
- [ ] event-id.jpg (e.g., "1.jpg", "2.jpg")
- [ ] poster-1.jpg, poster-2.jpg
- [ ] Other: _______________

**Q3.3:** If poster is missing, show:
- [ ] Placeholder with event name initial (e.g., "C" for Code Sprint)
- [ ] Generic placeholder image
- [ ] Department color background

**Q3.4:** Image aspect ratio preference:
- [ ] Square (1:1)
- [ ] Landscape (16:9)
- [ ] Portrait (3:4)
- [ ] Custom: _______________

---

### **4. LIVE EVENTS AUTO-SCROLL**

**Q4.1:** Auto-scroll speed per event:
- [ ] Slow (5 seconds per event)
- [ ] Medium (3 seconds)
- [ ] Fast (2 seconds)
- [ ] Custom: _______________

**Q4.2:** Scroll direction:
- [ ] Vertical scroll (top to bottom)
- [ ] Horizontal carousel (left to right)

**Q4.3:** Pause on hover:
- [ ] Yes, stop when mouse hovers
- [ ] No, keep scrolling

**Q4.4:** Loop behavior:
- [ ] Yes, restart from first event after last
- [ ] No, stop at last event

---

### **5. EVENT STATUS LOGIC**

**Q5.1:** Should ENDED events:
- [ ] Disappear completely (hidden)
- [ ] Show as "Completed" (grayed out)
- [ ] Move to bottom of list

**Q5.2:** Buffer time before event goes LIVE:
- [ ] Show LIVE exactly at start time
- [ ] Show LIVE 5 mins before
- [ ] Show LIVE 10 mins before
- [ ] Custom: _______________

**Q5.3:** Should upcoming events show countdown timer?
- [ ] Yes (e.g., "Starts in 1h 30m")
- [ ] No

---

### **6. FILTER UI/UX**

**Q6.1:** Filter type:
- [ ] Toggle buttons (can select multiple, e.g., Technical + Live)
- [ ] Radio buttons (select only one at a time)
- [ ] Dropdown select

**Q6.2:** Should there be an "All Events" option?
- [ ] Yes (default view)
- [ ] No

**Q6.3:** Can users combine filters?
- [ ] Yes (e.g., Technical + Live together)
- [ ] No (only one filter at a time)

---

### **7. LIVE EVENT DISPLAY SCREEN**

**Q7.1:** For event day projection, should there be a dedicated page?
- [ ] Yes, create `/live` page for full-screen display
- [ ] No, just filter on main events page

**Q7.2:** Live events display style:
- [ ] Grid view (cards)
- [ ] List view (rows)
- [ ] Carousel (rotating)
- [ ] Full-screen slides

**Q7.3:** Information shown on live display:
- [ ] Poster + Name only
- [ ] Poster + Name + Venue + Time
- [ ] Full details including description

---

### **8. PLACEHOLDER DATA**

**Q8.1:** How many sample events to create?
- Technical events: _____ (e.g., 10)
- Non-Technical events: _____ (e.g., 5)

**Q8.2:** How many events can be live simultaneously?
- [ ] Only 1 at a time
- [ ] 2-3 events
- [ ] 5+ events (multiple venues)
- [ ] Unlimited

**Q8.3:** Sample event types (add your own):

**Technical:**
- Code Sprint
- Web Wizards
- AI Hackathon
- Circuit Design
- RoboRace
- _______________
- _______________

**Non-Technical:**
- Tech Quiz
- Poster Presentation
- Gaming Tournament
- Treasure Hunt
- _______________
- _______________

---

## 🎨 **UI/UX DESIGN**

### **9. HOVER EFFECTS (Minimal)**

**Q9.1:** Choose ONE subtle hover effect:
- [ ] Option A: Slight lift (4px up) + subtle shadow
- [ ] Option B: Border color change only
- [ ] Option C: Scale (1.02x) with smooth transition
- [ ] Option D: Just opacity change on image

---

### **10. EVENT CARD DESIGN**

**Q10.1:** Choose layout:

- [ ] **Option 1: Poster on Top**
```
┌─────────────────┐
│   [POSTER]      │
│   Event Name    │
│   📍 Venue      │
│   ⏰ Time       │
│   [LIVE Badge]  │
└─────────────────┘
```

- [ ] **Option 2: Poster on Left**
```
┌──────┬──────────┐
│ POST │ Name     │
│  ER  │ Venue    │
│      │ Time     │
└──────┴──────────┘
```

- [ ] **Option 3: Full-width Poster with Overlay**
```
┌─────────────────┐
│   [POSTER with  │
│    text overlay]│
│   at bottom     │
└─────────────────┘
```

---

### **11. LIVE SECTION DESIGN**

**Q11.1:** Where should auto-scrolling live events appear?

- [ ] Separate section at top of page
- [ ] Horizontal banner across the top
- [ ] Sidebar on the right
- [ ] Full-page takeover when clicking "Live" filter

---

## 🚀 **QUICK START (MINIMUM REQUIRED)**

**If you want to START IMMEDIATELY, just answer these 5:**

1. **Event dates:** _______________

2. **Your departments (or use CSE, ECE, etc.):** _______________

3. **Poster path format:** `public/events/[department]/[filename].jpg` ✅ or _______________

4. **Auto-scroll:** Vertical or Horizontal? Speed: _______________

5. **Filter type:** Multiple selection or Single selection? _______________

---

## ✅ **SUBMISSION**

Once filled, share this document or copy-paste your answers below:

```
YOUR ANSWERS HERE:




```

