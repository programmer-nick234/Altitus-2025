# 🚀 ALTIUS 2025 - Leaderboard Quick Start

## ⚡ 3-Minute Setup

### 1️⃣ Create Supabase Project
- Visit: https://supabase.com
- Create new project
- Copy URL and Anon Key

### 2️⃣ Update Environment
Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
ADMIN_PASSWORD=your_secure_password
```

### 3️⃣ Run Migration
- Open Supabase SQL Editor
- Copy content from `supabase-schema.sql`
- Run it
- Enable Realtime on `departments` table

### 4️⃣ Test It!
```bash
npm run dev
```

Visit:
- **Leaderboard**: http://localhost:3000/scoreboard
- **Admin Panel**: http://localhost:3000/admin

---

## 🎯 How It Works

### Admin Workflow (Event Day)
1. Open `/admin` → Login
2. Select Event
3. Choose Departments for 1st/2nd/3rd
4. Click Submit
5. ✅ Leaderboard auto-updates!

### Points System
- 🥇 1st Place = **30 points**
- 🥈 2nd Place = **20 points**
- 🥉 3rd Place = **10 points**

### Auto-Magic Features
✅ Points calculated automatically
✅ Rankings update in real-time
✅ Recent wins tracked
✅ Events participated counted
✅ Smooth animations on rank changes

---

## 📱 Access Points

### Public Display (Projector/Screens)
```
http://localhost:3000/scoreboard
```
- Auto-refreshes every time results are added
- Shows live rankings with podium
- Premium animations and effects

### Admin Control Panel
```
http://localhost:3000/admin
```
- Password protected
- Add event results
- View instant updates

---

## 🎨 Features

### Leaderboard Page
- 🏆 Premium podium for top 3
- 📊 Complete rankings list
- 📈 Progress bars showing relative performance
- ⚡ Live update indicator
- 📱 Fully responsive (mobile/tablet/desktop)
- ✨ Smooth animations on every change

### Admin Dashboard
- 🔐 Password protection
- 📋 Event selection dropdown
- 🎯 Color-coded position selectors
- ✅ Form validation
- 🎉 Success/error notifications
- 📖 Built-in instructions

---

## 🐛 Common Issues

**Leaderboard not updating?**
→ Check Realtime is enabled on `departments` table

**Admin can't login?**
→ Verify `ADMIN_PASSWORD` in `.env.local`

**Build errors?**
→ Run: `rm -rf .next && npm run build`

**Supabase errors?**
→ Verify URL and Key in `.env.local`

---

## 📊 13 Departments Pre-loaded

1. CSE - Computer Science & Engineering
2. ECE - Electronics & Communication
3. MECH - Mechanical Engineering
4. CIVIL - Civil Engineering
5. EEE - Electrical & Electronics
6. ISE - Information Science
7. AIML - AI & Machine Learning
8. DS - Data Science
9. CS - Cyber Security
10. BT - Biotechnology
11. CHEM - Chemical Engineering
12. AUTO - Automobile Engineering
13. AERO - Aerospace Engineering

---

## 🎯 Event Day Checklist

### Before Event:
- [ ] Supabase project created
- [ ] Environment variables configured
- [ ] Database migration run
- [ ] Realtime enabled
- [ ] Admin password changed
- [ ] Test submission completed
- [ ] Devices ready (admin panel + display screens)

### During Event:
- [ ] Admin panel open on dedicated device
- [ ] Leaderboard displayed on projector
- [ ] Add results after each event
- [ ] Monitor for any issues

### After Event:
- [ ] Export final results
- [ ] Backup database
- [ ] Generate certificates

---

## 📞 Need Help?

Read full documentation: `LEADERBOARD_SETUP.md`

**Tech Stack:**
- Next.js 16 + React 19
- TypeScript
- Supabase (PostgreSQL + Realtime)
- Framer Motion
- TailwindCSS

---

## ✨ Premium Features

✅ Real-time updates (no refresh needed)
✅ Automatic point calculation
✅ Rank animations
✅ Glassmorphic UI
✅ Mobile responsive
✅ Industry-grade optimization
✅ Password protection
✅ Form validation
✅ Error handling
✅ Loading states
✅ Mock data fallback

---

**Version**: 1.0.0
**Status**: ✅ Production Ready
**Build**: ✅ All tests passed

🚀 **You're all set! Good luck with ALTIUS 2025!** 🏆
