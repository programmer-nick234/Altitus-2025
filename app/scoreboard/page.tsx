"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal, TrendingUp, RotateCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { leaderboard, type LeaderboardEntry } from "@/lib/mockData";

export default function ScoreboardPage() {
  const [data, setData] = useState<LeaderboardEntry[]>(leaderboard);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simulate auto-refresh every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      simulateRefresh();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const simulateRefresh = () => {
    setIsRefreshing(true);
    
    // Simulate slight random changes in points
    setTimeout(() => {
      setData(prevData => 
        prevData.map(entry => ({
          ...entry,
          points: entry.points + Math.floor(Math.random() * 10),
        }))
        .sort((a, b) => b.points - a.points)
        .map((entry, index) => ({ ...entry, rank: index + 1 }))
      );
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 1000);
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-500 to-yellow-600";
      case 2:
        return "from-gray-300 to-gray-400";
      case 3:
        return "from-orange-600 to-orange-700";
      default:
        return "from-[#1D3557] to-[#457B9D]";
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Trophy className="text-white" size={20} />;
    }
    return <span className="text-white font-bold text-lg">{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#F1FAEE] mb-4 goldman-bold">
              Live <span className="text-[#E63946]">Scoreboard</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto mb-6" />
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto inter-regular">
              Real-time inter-department competition standings. Updated every 10 seconds.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center space-x-2 text-[#C5C6C7]">
              <TrendingUp className="text-[#457B9D]" size={20} />
              <span className="inter-regular">
                Last Updated: {lastUpdate.toLocaleTimeString()}
              </span>
            </div>

            <button
              onClick={simulateRefresh}
              disabled={isRefreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-[#1D3557] hover:bg-[#457B9D] text-white rounded-lg transition-all disabled:opacity-50 inter-regular"
            >
              <RotateCw className={isRefreshing ? "animate-spin" : ""} size={16} />
              <span>{isRefreshing ? "Refreshing..." : "Refresh Now"}</span>
            </button>
          </motion.div>

          {/* Leaderboard */}
          <div className="space-y-4">
            {data.map((entry, index) => (
              <motion.div
                key={entry.department}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:border-[#457B9D]/50 transition-all group"
              >
                <div className="flex items-center p-6">
                  {/* Rank Badge */}
                  <motion.div
                    layout
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getRankColor(entry.rank)} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    {getRankIcon(entry.rank)}
                  </motion.div>

                  {/* Department Info */}
                  <div className="flex-1 ml-6">
                    <h3 className="text-xl font-bold text-[#F1FAEE] mb-1 goldman-bold group-hover:text-[#457B9D] transition-colors">
                      {entry.department}
                    </h3>
                    
                    {/* Medals */}
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Medal className="text-yellow-500" size={16} />
                        <span className="text-[#C5C6C7] inter-regular">
                          {entry.goldMedals}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Medal className="text-gray-400" size={16} />
                        <span className="text-[#C5C6C7] inter-regular">
                          {entry.silverMedals}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Medal className="text-orange-600" size={16} />
                        <span className="text-[#C5C6C7] inter-regular">
                          {entry.bronzeMedals}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Points with Progress Bar */}
                  <div className="text-right min-w-[120px]">
                    <motion.div
                      key={entry.points}
                      initial={{ scale: 1.2, color: "#E63946" }}
                      animate={{ scale: 1, color: "#F1FAEE" }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold goldman-bold mb-2"
                    >
                      {entry.points}
                    </motion.div>
                    <div className="text-xs text-[#C5C6C7] inter-regular">
                      Points
                    </div>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-2 bg-[#0B0C10] relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(entry.points / Math.max(...data.map(e => e.points))) * 100}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#E63946]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top Performers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-[#F1FAEE] mb-8 text-center goldman-bold">
              Top <span className="text-[#E63946]">Performers</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.slice(0, 3).map((entry, index) => (
                <motion.div
                  key={entry.department}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass rounded-xl p-6 text-center ${
                    index === 0 ? "md:transform md:scale-105 border-2 border-yellow-500/30" : ""
                  }`}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${getRankColor(entry.rank)} flex items-center justify-center shadow-lg`}>
                    <Trophy className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#F1FAEE] mb-2 goldman-bold">
                    {entry.department}
                  </h3>
                  
                  <div className="text-3xl font-bold gradient-blue-red bg-clip-text text-transparent goldman-bold mb-3">
                    {entry.points}
                  </div>

                  <div className="flex justify-center items-center space-x-3 text-sm">
                    <div className="flex flex-col items-center">
                      <Medal className="text-yellow-500 mb-1" size={16} />
                      <span className="text-[#C5C6C7] inter-regular">
                        {entry.goldMedals}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Medal className="text-gray-400 mb-1" size={16} />
                      <span className="text-[#C5C6C7] inter-regular">
                        {entry.silverMedals}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Medal className="text-orange-600 mb-1" size={16} />
                      <span className="text-[#C5C6C7] inter-regular">
                        {entry.bronzeMedals}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
