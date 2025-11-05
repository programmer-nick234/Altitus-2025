# 🎯 Supabase Configuration Guide - ALTIUS 2025

## Current Status: ⚠️ Mock Data Mode

Your leaderboard is currently running with **mock data** because Supabase hasn't been configured yet.

**What this means:**
- ✅ Leaderboard page displays sample data (13 departments)
- ✅ UI and animations work perfectly
- ❌ Real-time updates won't work
- ❌ Admin panel can't save results
- ❌ Data won't persist between refreshes

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Supabase Account
1. Go to **https://supabase.com**
2. Click **"Start your project"**
3. Sign up with GitHub/Email

### Step 2: Create New Project
1. Click **"New Project"**
2. Fill in details:
   - **Name**: `altius-2025-leaderboard`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose `Southeast Asia (Singapore)` or closest
   - **Plan**: Free (sufficient for 500+ concurrent users)
3. Click **"Create new project"**
4. ⏱️ Wait 2-3 minutes for project setup

### Step 3: Get API Credentials
1. In your project dashboard, click **Settings** (⚙️ icon in sidebar)
2. Click **API** in the settings menu
3. You'll see two important values:

#### Project URL
```
Example: https://xyzabcdefghijklmn.supabase.co
```
**Copy this entire URL** (including `https://`)

#### anon public Key
```
Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFz...
```
**Copy this entire key** (it's very long, ~300 characters)

### Step 4: Update Environment Variables
1. Open your project folder: `/home/lucifer/CODE/ALTIUS/altius-2025`
2. Open the file: `.env.local`
3. Replace the placeholder values:

**BEFORE:**
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_PASSWORD=altius2025admin
```

**AFTER:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xyzabcdefghijklmn.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M...
ADMIN_PASSWORD=your_secure_password_here
```

⚠️ **Important:** Change `ADMIN_PASSWORD` to something secure!

4. **Save the file**

### Step 5: Run Database Migration
1. Go back to Supabase dashboard
2. Click **SQL Editor** in the left sidebar (database icon)
3. Click **"New query"** button
4. Open this file in your project: `supabase-schema.sql`
5. **Copy ALL the content** (172 lines)
6. **Paste** into the Supabase SQL Editor
7. Click **"Run"** button (or press `Ctrl/Cmd + Enter`)
8. You should see: ✅ **"Success. No rows returned"**

### Step 6: Enable Realtime (Critical!)
1. In Supabase, go to **Database** → **Replication**
2. Find the table: `departments`
3. Click the **toggle switch** to turn it ON (should turn green)
4. You should see: `1 table enabled`

### Step 7: Restart Your Server
```bash
# Stop current server (Ctrl+C if running)
# Then restart:
npm run dev
```

### Step 8: Test It!
1. Open: **http://localhost:3000/scoreboard**
   - You should see **green "LIVE" badge** (instead of gray)
   - Check browser console - should say: "Realtime update: ..."

2. Open: **http://localhost:3000/admin**
   - Login with your password
   - Try submitting a result
   - Should show: ✅ **"Result submitted successfully!"**

3. Go back to scoreboard → Should update automatically! 🎉

---

## ✅ Verification Checklist

After setup, verify these:

- [ ] Supabase project created
- [ ] `.env.local` updated with real URL and Key
- [ ] SQL migration ran successfully (172 lines)
- [ ] Realtime enabled on `departments` table
- [ ] Server restarted
- [ ] Scoreboard shows **green "LIVE" badge**
- [ ] Admin panel can submit results
- [ ] Leaderboard updates in real-time

---

## 🔍 How to Tell If It's Working

### ✅ **Working (Real Database)**
- **Scoreboard**: Green pulsing "LIVE" badge visible
- **Browser Console**: "Realtime update: ..." messages
- **Admin Panel**: Success message after submission
- **Data Persists**: Refresh page, data stays

### ❌ **Not Working (Mock Data)**
- **Scoreboard**: No "LIVE" badge OR gray badge
- **Browser Console**: "Supabase not configured - using mock data"
- **Admin Panel**: "Supabase configuration missing" error
- **Data Resets**: Refresh page, back to default values

---

## 🐛 Troubleshooting

### Problem: "Invalid supabaseUrl" error
**Solution:**
- Make sure URL starts with `https://`
- URL must contain `.supabase.co`
- No spaces or quotes in `.env.local`
- Restart dev server after changing `.env.local`

### Problem: SQL migration fails
**Solution:**
- Copy the ENTIRE `supabase-schema.sql` file (all 172 lines)
- Make sure you're in the SQL Editor (not other sections)
- If error persists, try deleting project and creating new one

### Problem: No "LIVE" badge on scoreboard
**Solution:**
- Check `Database > Replication` in Supabase
- Make sure `departments` table has green toggle
- Hard refresh page (Ctrl+Shift+R)
- Check browser console for errors

### Problem: Admin can't submit results
**Solution:**
- Verify `.env.local` has correct URL and Key
- Check all 3 tables exist in Supabase: `departments`, `events`, `results`
- Make sure migration was successful
- Check browser console for specific error

---

## 📊 What the Migration Creates

When you run `supabase-schema.sql`, it creates:

### Tables
1. **departments** (13 pre-loaded departments)
   - CSE, ECE, MECH, CIVIL, EEE, ISE, AIML, DS, CS, BT, CHEM, AUTO, AERO

2. **events** (10 sample events)
   - Code Sprint, RoboWars, Hackathon, Dance Competition, etc.

3. **results** (event results storage)
   - Links events to department placements

### Automatic Features
- **Trigger Function**: Auto-adds points (30/20/10) when results submitted
- **Security Policies**: Public can read, admin can write
- **Realtime**: Live updates across all viewers

---

## 🎯 Why Supabase?

✅ **Real-time updates** - No refresh needed
✅ **PostgreSQL** - Industry-standard database
✅ **Free tier** - 500MB storage, unlimited API requests
✅ **Automatic backups** - Your data is safe
✅ **Edge functions** - Lightning fast globally
✅ **Easy to use** - No server setup needed

---

## 🔐 Security Notes

Your setup is secure:
- ✅ API keys are safe for client-side (anon key)
- ✅ Row Level Security policies prevent unauthorized writes
- ✅ Admin password required for result submission
- ✅ Database access controlled by Supabase

**For production:**
- Change `ADMIN_PASSWORD` to strong value
- Consider adding proper authentication (Supabase Auth)
- Enable rate limiting in Supabase dashboard

---

## 📞 Need Help?

1. **Supabase Docs**: https://supabase.com/docs
2. **This project's docs**: Check `LEADERBOARD_SETUP.md`
3. **Video tutorial**: Search YouTube for "Supabase setup Next.js"

---

## 🎉 Next Steps

Once configured:
1. Test with sample data
2. Add real events in admin panel
3. Share leaderboard URL with students
4. Keep admin panel password secure
5. Monitor during event day

---

**Status**: 🟡 Waiting for Supabase Configuration
**Time Required**: 5 minutes
**Difficulty**: Easy ⭐

**Get started now**: https://supabase.com 🚀
