-- ============================================
-- ALTIUS 2025 - Department Leaderboard Schema
-- ============================================
-- Run this in your Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard

-- ============================================
-- 1. DEPARTMENTS TABLE
-- ============================================
create table if not exists public.departments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  short_code text unique not null,
  logo_url text,
  total_points int default 0,
  events_participated int default 0,
  recent_wins text[] default '{}',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.departments enable row level security;

-- Allow public read access
create policy "Allow public read access on departments"
on public.departments for select
to anon, authenticated
using (true);

-- ============================================
-- 2. EVENTS TABLE
-- ============================================
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  date timestamptz default now(),
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.events enable row level security;

-- Allow public read access
create policy "Allow public read access on events"
on public.events for select
to anon, authenticated
using (true);

-- ============================================
-- 3. RESULTS TABLE
-- ============================================
create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references public.events(id) on delete cascade,
  first_place uuid references public.departments(id),
  second_place uuid references public.departments(id),
  third_place uuid references public.departments(id),
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.results enable row level security;

-- Allow public read access
create policy "Allow public read access on results"
on public.results for select
to anon, authenticated
using (true);

-- ============================================
-- 4. AUTO-UPDATE FUNCTION (TRIGGER)
-- ============================================
create or replace function public.update_department_points()
returns trigger as $$
begin
  -- Update first place (+30 points)
  if new.first_place is not null then
    update public.departments 
    set 
      total_points = total_points + 30,
      events_participated = events_participated + 1,
      recent_wins = array_prepend(
        (select name from public.events where id = new.event_id),
        recent_wins
      )
    where id = new.first_place;
  end if;

  -- Update second place (+20 points)
  if new.second_place is not null then
    update public.departments 
    set 
      total_points = total_points + 20,
      events_participated = events_participated + 1
    where id = new.second_place;
  end if;

  -- Update third place (+10 points)
  if new.third_place is not null then
    update public.departments 
    set 
      total_points = total_points + 10,
      events_participated = events_participated + 1
    where id = new.third_place;
  end if;

  return new;
end;
$$ language plpgsql security definer;

-- ============================================
-- 5. TRIGGER ON RESULT INSERT
-- ============================================
drop trigger if exists on_result_insert on public.results;

create trigger on_result_insert
after insert on public.results
for each row
execute function public.update_department_points();

-- ============================================
-- 6. SEED DATA - 13 SIT DEPARTMENTS
-- ============================================
insert into public.departments (name, short_code, logo_url) values
  ('Computer Science & Engineering', 'CSE', '/departments/cse.png'),
  ('Electronics & Communication Engineering', 'ECE', '/departments/ece.png'),
  ('Mechanical Engineering', 'MECH', '/departments/mech.png'),
  ('Civil Engineering', 'CIVIL', '/departments/civil.png'),
  ('Electrical & Electronics Engineering', 'EEE', '/departments/eee.png'),
  ('Information Science & Engineering', 'ISE', '/departments/ise.png'),
  ('Artificial Intelligence & Machine Learning', 'AIML', '/departments/aiml.png'),
  ('Data Science', 'DS', '/departments/ds.png'),
  ('Cyber Security', 'CS', '/departments/cybersec.png'),
  ('Biotechnology', 'BT', '/departments/biotech.png'),
  ('Chemical Engineering', 'CHEM', '/departments/chem.png'),
  ('Automobile Engineering', 'AUTO', '/departments/auto.png'),
  ('Aerospace Engineering', 'AERO', '/departments/aero.png')
on conflict (short_code) do nothing;

-- ============================================
-- 7. SEED DATA - SAMPLE EVENTS
-- ============================================
insert into public.events (name, category) values
  ('Code Sprint', 'Technical'),
  ('RoboWars', 'Technical'),
  ('Circuit Design Challenge', 'Technical'),
  ('CAD Modeling Contest', 'Technical'),
  ('Hackathon', 'Technical'),
  ('Cultural Night', 'Cultural'),
  ('Dance Competition', 'Cultural'),
  ('Music Fest', 'Cultural'),
  ('Sports Meet', 'Sports'),
  ('Cricket Tournament', 'Sports')
on conflict do nothing;

-- ============================================
-- 8. ENABLE REALTIME (Important!)
-- ============================================
-- Go to: Database > Replication
-- Enable realtime for table: departments
-- Or run this:
alter publication supabase_realtime add table public.departments;

-- ============================================
-- SETUP COMPLETE! 🎉
-- ============================================
-- Next steps:
-- 1. Copy your Supabase URL and Anon Key from Settings > API
-- 2. Update .env.local file in your Next.js project
-- 3. Test the leaderboard page
