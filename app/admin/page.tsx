"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Trophy, CheckCircle, AlertCircle, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import type { Database, Department, Event } from "@/types/database.types";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
  const [departments, setDepartments] = useState<Department[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  
  const [selectedEvent, setSelectedEvent] = useState("");
  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Initialize Supabase client on client side only
  const getSupabaseClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    
    // Validate URL format
    const isValidUrl = supabaseUrl.startsWith('https://') && supabaseUrl.includes('.supabase.co');
    const isNotPlaceholder = supabaseUrl !== 'your_supabase_project_url';
    
    if (!supabaseUrl || !supabaseAnonKey || !isValidUrl || !isNotPlaceholder) {
      console.log('Supabase not configured - please update .env.local');
      return null;
    }
    
    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
      realtime: { params: { eventsPerSecond: 10 } },
    });
  };

  // Fetch departments and events
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError('Supabase configuration missing. Please check environment variables.');
      return;
    }

    try {
      const [deptResponse, eventsResponse] = await Promise.all([
        supabase.from('departments').select('*').order('name'),
        supabase.from('events').select('*').order('name')
      ]);

      if (deptResponse.data) setDepartments(deptResponse.data);
      if (eventsResponse.data) setEvents(eventsResponse.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'altius2025admin';
    
    if (password === adminPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password. Please try again.");
      setPassword("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const supabase = getSupabaseClient();
    if (!supabase) {
      setError('Supabase configuration missing. Please check environment variables.');
      return;
    }

    // Validation
    if (!selectedEvent || !firstPlace || !secondPlace || !thirdPlace) {
      setError("Please fill in all fields");
      return;
    }

    if (firstPlace === secondPlace || firstPlace === thirdPlace || secondPlace === thirdPlace) {
      setError("Departments must be different for each position");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error: submitError } = await supabase
        .from('results')
        .insert({
          event_id: selectedEvent,
          first_place: firstPlace,
          second_place: secondPlace,
          third_place: thirdPlace,
        } as any)
        .select();

      if (submitError) throw submitError;

      setSuccessMessage("Result submitted successfully! Leaderboard updated.");
      
      // Reset form
      setSelectedEvent("");
      setFirstPlace("");
      setSecondPlace("");
      setThirdPlace("");

      // Clear success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Error submitting result: ${err.message}`);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0B0C10] to-[#11131A] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#E63946]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(230,57,70,0.3)]">
                <Lock className="text-[#E63946]" size={36} />
              </div>
              <h1 className="text-3xl font-bold text-[#F1FAEE] goldman-bold mb-2">
                Admin Dashboard
              </h1>
              <p className="text-[#C5C6C7] inter-regular">
                Enter password to access leaderboard controls
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#C5C6C7] mb-2 inter-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#1F2833] border border-white/10 rounded-xl text-[#F1FAEE] focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-all inter-regular"
                    placeholder="Enter admin password"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C5C6C7] hover:text-[#F1FAEE] transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-xl"
                >
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-500 text-sm inter-regular">{error}</p>
                </motion.div>
              )}

              <Button
                variant="primary"
                size="lg"
                className="w-full font-bold tracking-wide"
              >
                Login
              </Button>
            </form>

            {/* Back to Home */}
            <Link href="/" className="block mt-6">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[#C5C6C7] hover:text-[#F1FAEE] hover:border-[#457B9D]/50 transition-all inter-regular">
                <ArrowLeft size={18} />
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0C10] to-[#11131A] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#E63946]/20 rounded-xl flex items-center justify-center">
                <Trophy className="text-[#E63946]" size={24} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-[#F1FAEE] goldman-bold">
                  Leaderboard Control
                </h1>
                <p className="text-[#C5C6C7] inter-regular">Add event results to update rankings</p>
              </div>
            </div>
            <Link href="/scoreboard">
              <Button variant="outline" size="md" className="inter-medium">
                View Leaderboard
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Success Message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
          >
            <CheckCircle className="text-green-500" size={24} />
            <p className="text-green-500 font-semibold inter-medium">{successMessage}</p>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
          >
            <AlertCircle className="text-red-500" size={24} />
            <p className="text-red-500 font-semibold inter-medium">{error}</p>
          </motion.div>
        )}

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Selection */}
            <div>
              <label className="block text-sm font-semibold text-[#C5C6C7] mb-3 inter-medium uppercase tracking-wider">
                Select Event
              </label>
              <select
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="w-full px-4 py-3 bg-[#1F2833] border border-white/10 rounded-xl text-[#F1FAEE] focus:outline-none focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/20 transition-all inter-regular"
                required
              >
                <option value="">Choose an event...</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name} {event.category && `(${event.category})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Place */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-3 inter-medium uppercase tracking-wider">
                  <span className="text-yellow-400">🥇 First Place</span>
                  <span className="text-yellow-400/70">(30 pts)</span>
                </label>
                <select
                  value={firstPlace}
                  onChange={(e) => setFirstPlace(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1F2833] border border-yellow-400/30 rounded-xl text-[#F1FAEE] focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all inter-regular"
                  required
                >
                  <option value="">Select department...</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.short_code}
                    </option>
                  ))}
                </select>
              </div>

              {/* Second Place */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-3 inter-medium uppercase tracking-wider">
                  <span className="text-gray-300">🥈 Second Place</span>
                  <span className="text-gray-300/70">(20 pts)</span>
                </label>
                <select
                  value={secondPlace}
                  onChange={(e) => setSecondPlace(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1F2833] border border-gray-300/30 rounded-xl text-[#F1FAEE] focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-300/20 transition-all inter-regular"
                  required
                >
                  <option value="">Select department...</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.short_code}
                    </option>
                  ))}
                </select>
              </div>

              {/* Third Place */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold mb-3 inter-medium uppercase tracking-wider">
                  <span className="text-orange-400">🥉 Third Place</span>
                  <span className="text-orange-400/70">(10 pts)</span>
                </label>
                <select
                  value={thirdPlace}
                  onChange={(e) => setThirdPlace(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1F2833] border border-orange-400/30 rounded-xl text-[#F1FAEE] focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all inter-regular"
                  required
                >
                  <option value="">Select department...</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.short_code}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                variant="gradient"
                size="xl"
                className="w-full font-bold tracking-wide"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Result & Update Leaderboard"}
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 bg-[#457B9D]/10 border border-[#457B9D]/30 backdrop-blur-md rounded-xl p-6"
        >
          <h3 className="text-lg font-bold text-[#F1FAEE] mb-3 goldman-bold flex items-center gap-2">
            <Trophy className="text-[#457B9D]" size={20} />
            How It Works
          </h3>
          <ul className="space-y-2 text-[#C5C6C7] inter-regular">
            <li className="flex items-start gap-2">
              <span className="text-[#E63946] mt-1">•</span>
              <span>Select an event and the top 3 departments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E63946] mt-1">•</span>
              <span>Points are automatically added: 1st = 30pts, 2nd = 20pts, 3rd = 10pts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E63946] mt-1">•</span>
              <span>Leaderboard updates in real-time for all viewers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#E63946] mt-1">•</span>
              <span>Rankings are recalculated automatically based on total points</span>
            </li>
          </ul>
        </motion.div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-6 py-3 text-[#C5C6C7] hover:text-[#F1FAEE] transition-colors inter-regular"
          >
            Logout
          </button>
        </motion.div>
      </div>
    </div>
  );
}
