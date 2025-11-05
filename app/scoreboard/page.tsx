"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Medal, TrendingUp, Award, Zap, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createClient } from "@supabase/supabase-js";
import type { Database, Department } from "@/types/database.types";

export default function ScoreboardPage() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isLive, setIsLive] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Supabase client
  const getSupabaseClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    
    // Validate URL format and ensure it's not placeholder
    const isValidUrl = supabaseUrl.startsWith('https://') && supabaseUrl.includes('.supabase.co');
    const isNotPlaceholder = supabaseUrl !== 'your_supabase_project_url';
    
    if (!supabaseUrl || !supabaseAnonKey || !isValidUrl || !isNotPlaceholder) {
      console.log('Supabase not configured - using mock data');
      return null;
    }
    
    return createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
      realtime: { params: { eventsPerSecond: 10 } },
    });
  };

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    const supabase = getSupabaseClient();
    
    if (!supabase) {
      console.log('Supabase not configured - using mock data');
      // Use comprehensive mock data if Supabase not configured
      setDepartments([
        { id: '1', name: 'Computer Science & Engineering', short_code: 'CSE', logo_url: null, total_points: 250, events_participated: 12, recent_wins: ['Hackathon', 'Code Sprint'] },
        { id: '2', name: 'Electronics & Communication Engineering', short_code: 'ECE', logo_url: null, total_points: 210, events_participated: 10, recent_wins: ['Circuit Design Challenge'] },
        { id: '3', name: 'Mechanical Engineering', short_code: 'MECH', logo_url: null, total_points: 180, events_participated: 8, recent_wins: ['CAD Modeling Contest'] },
        { id: '4', name: 'Information Science & Engineering', short_code: 'ISE', logo_url: null, total_points: 150, events_participated: 7, recent_wins: [] },
        { id: '5', name: 'Artificial Intelligence & Machine Learning', short_code: 'AIML', logo_url: null, total_points: 140, events_participated: 6, recent_wins: [] },
        { id: '6', name: 'Electrical & Electronics Engineering', short_code: 'EEE', logo_url: null, total_points: 120, events_participated: 5, recent_wins: [] },
        { id: '7', name: 'Civil Engineering', short_code: 'CIVIL', logo_url: null, total_points: 100, events_participated: 4, recent_wins: [] },
        { id: '8', name: 'Data Science', short_code: 'DS', logo_url: null, total_points: 80, events_participated: 3, recent_wins: [] },
        { id: '9', name: 'Cyber Security', short_code: 'CS', logo_url: null, total_points: 60, events_participated: 2, recent_wins: [] },
        { id: '10', name: 'Biotechnology', short_code: 'BT', logo_url: null, total_points: 50, events_participated: 2, recent_wins: [] },
        { id: '11', name: 'Chemical Engineering', short_code: 'CHEM', logo_url: null, total_points: 30, events_participated: 1, recent_wins: [] },
        { id: '12', name: 'Automobile Engineering', short_code: 'AUTO', logo_url: null, total_points: 20, events_participated: 1, recent_wins: [] },
        { id: '13', name: 'Aerospace Engineering', short_code: 'AERO', logo_url: null, total_points: 10, events_participated: 1, recent_wins: [] },
      ]);
      setIsLoading(false);
      setIsLive(false); // Not live when using mock data
      return;
    }

    try {
      const { data, error } = await supabase
        .from('departments')
        .select('*')
        .order('total_points', { ascending: false });

      if (error) throw error;
      
      if (data) {
        setDepartments(data);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchLeaderboard();
  }, []);

  // Realtime subscription
  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    const channel = supabase
      .channel('departments-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'departments',
        },
        (payload) => {
          console.log('Realtime update:', payload);
          fetchLeaderboard();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getPodiumStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          shadow: "shadow-[0_0_40px_rgba(255,215,0,0.4)]",
          border: "border-yellow-400/40",
          gradient: "from-yellow-500/20 to-yellow-600/10",
          icon: <Trophy className="text-yellow-400" size={32} />,
          badge: "🥇",
        };
      case 2:
        return {
          shadow: "shadow-[0_0_35px_rgba(192,192,192,0.3)]",
          border: "border-gray-300/30",
          gradient: "from-gray-300/20 to-gray-400/10",
          icon: <Medal className="text-gray-300" size={28} />,
          badge: "🥈",
        };
      case 3:
        return {
          shadow: "shadow-[0_0_30px_rgba(205,127,50,0.3)]",
          border: "border-orange-500/30",
          gradient: "from-orange-500/20 to-orange-600/10",
          icon: <Award className="text-orange-400" size={24} />,
          badge: "🥉",
        };
      default:
        return {
          shadow: "shadow-[0_0_15px_rgba(230,57,70,0.1)]",
          border: "border-white/10",
          gradient: "from-white/5 to-white/0",
          icon: null,
          badge: null,
        };
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0C10] flex items-center justify-center">
        <div className="text-center space-y-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#E63946] border-t-transparent rounded-full mx-auto"
          />
          <p className="text-[#C5C6C7] text-xl inter-regular">Loading Leaderboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0C10] to-[#11131A]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 min-h-[50vh] flex items-center">
        <div className="content-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F1FAEE] goldman-bold drop-shadow-[0_0_30px_rgba(230,57,70,0.3)]">
                Department <span className="text-[#E63946]">Leaderboard</span>
              </h1>
              {isLive && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold inter-bold">LIVE</span>
                </motion.div>
              )}
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto rounded-full" />
            <p className="text-[#C5C6C7] text-xl md:text-2xl max-w-3xl mx-auto inter-regular leading-relaxed px-4">
              Real-time inter-department rankings. Auto-updates when points are added.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-12 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E63946]/20 rounded-xl flex items-center justify-center">
                  <Users className="text-[#E63946]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#C5C6C7]/70 inter-medium uppercase tracking-wider">Departments</p>
                  <p className="text-2xl font-bold text-[#F1FAEE] goldman-bold">{departments.length}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#457B9D]/20 rounded-xl flex items-center justify-center">
                  <Zap className="text-[#457B9D]" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#C5C6C7]/70 inter-medium uppercase tracking-wider">Total Points</p>
                  <p className="text-2xl font-bold text-[#F1FAEE] goldman-bold">
                    {departments.reduce((sum, dept) => sum + dept.total_points, 0)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-yellow-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#C5C6C7]/70 inter-medium uppercase tracking-wider">Last Update</p>
                  <p className="text-lg font-bold text-[#F1FAEE] inter-bold">{lastUpdate.toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top 3 Podium */}
          {departments.length >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#F1FAEE] mb-8 text-center goldman-bold">
                <Trophy className="inline-block mr-2 text-[#E63946]" size={32} />
                Top <span className="text-[#E63946]">Performers</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {departments.slice(0, 3).map((dept, index) => {
                  const rank = index + 1;
                  const style = getPodiumStyle(rank);
                  
                  return (
                    <motion.div
                      key={dept.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className={`relative ${rank === 1 ? 'md:order-2 md:scale-110' : rank === 2 ? 'md:order-1' : 'md:order-3'}`}
                    >
                      <div className={`bg-gradient-to-br ${style.gradient} border ${style.border} backdrop-blur-md rounded-2xl p-6 ${style.shadow} hover:scale-105 transition-all duration-300`}>
                        {/* Badge */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#0B0C10] rounded-full flex items-center justify-center text-3xl border-2 border-white/20">
                          {style.badge}
                        </div>

                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                          {style.icon}
                        </div>

                        {/* Department Name */}
                        <h3 className="text-xl font-bold text-[#F1FAEE] text-center mb-2 goldman-bold">
                          {dept.name}
                        </h3>
                        <p className="text-[#C5C6C7] text-sm text-center mb-4 inter-regular">
                          {dept.short_code}
                        </p>

                        {/* Points */}
                        <div className="text-center">
                          <div className={`text-5xl font-bold ${rank === 1 ? 'text-yellow-400' : rank === 2 ? 'text-gray-300' : 'text-orange-400'} goldman-bold mb-2`}>
                            {dept.total_points}
                          </div>
                          <p className="text-[#C5C6C7] text-sm inter-regular">Total Points</p>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-[#F1FAEE] goldman-bold">{dept.events_participated}</p>
                            <p className="text-xs text-[#C5C6C7]/70 inter-regular">Events</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-[#F1FAEE] goldman-bold">{dept.recent_wins.length}</p>
                            <p className="text-xs text-[#C5C6C7]/70 inter-regular">Wins</p>
                          </div>
                        </div>

                        {/* Recent Wins */}
                        {dept.recent_wins.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-xs text-[#C5C6C7]/70 inter-medium uppercase tracking-wider mb-2">Recent Win</p>
                            <p className="text-sm text-[#F1FAEE] inter-bold truncate">{dept.recent_wins[0]}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Full Leaderboard */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#F1FAEE] mb-8 text-center goldman-bold">
              Complete <span className="text-[#E63946]">Rankings</span>
            </h2>

            <div className="space-y-4">
              <AnimatePresence>
                {departments.map((dept, index) => {
                  const rank = index + 1;
                  const style = getPodiumStyle(rank);
                  const maxPoints = Math.max(...departments.map(d => d.total_points));

                  return (
                    <motion.div
                      key={dept.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className={`bg-white/5 border ${style.border} backdrop-blur-md rounded-xl overflow-hidden hover:border-[#457B9D]/50 hover:${style.shadow} transition-all duration-300 group`}
                    >
                      <div className="flex items-center p-4 md:p-6">
                        {/* Rank */}
                        <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#1D3557] to-[#457B9D] rounded-xl flex items-center justify-center shadow-lg mr-4 md:mr-6">
                          {rank <= 3 ? (
                            style.icon
                          ) : (
                            <span className="text-[#F1FAEE] text-xl md:text-2xl font-bold goldman-bold">{rank}</span>
                          )}
                        </div>

                        {/* Department Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-[#F1FAEE] mb-1 goldman-bold group-hover:text-[#457B9D] transition-colors truncate">
                            {dept.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-[#C5C6C7]">
                            <span className="inter-medium">{dept.short_code}</span>
                            <span className="hidden sm:inline text-xs">•</span>
                            <span className="hidden sm:inline inter-regular">{dept.events_participated} events</span>
                          </div>
                        </div>

                        {/* Points */}
                        <div className="text-right ml-4">
                          <motion.div
                            key={dept.total_points}
                            initial={{ scale: 1.2, color: "#E63946" }}
                            animate={{ scale: 1, color: "#F1FAEE" }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-3xl font-bold goldman-bold"
                          >
                            {dept.total_points}
                          </motion.div>
                          <div className="text-xs text-[#C5C6C7]/70 inter-regular">points</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 bg-[#0B0C10]/50 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: maxPoints > 0 ? `${(dept.total_points / maxPoints) * 100}%` : '0%' }}
                          transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                          className="h-full bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#E63946]"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
