"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { SearchBar, Select } from "@/components/ui";
import { events } from "@/lib/mockData";
import { getEventStatus } from "@/lib/eventUtils";

type FilterType = "All" | "Technical" | "Non-Technical" | "Live";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState<FilterType>("All");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Auto-refresh every 30 seconds to update live events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Get unique departments
  const departments = ["All", ...Array.from(new Set(events.map(e => e.department)))];

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || event.department === selectedDepartment;
    
    // Type filter logic
    let matchesType = true;
    if (selectedType === "Live") {
      matchesType = getEventStatus(event, currentTime) === "live";
    } else if (selectedType === "Technical" || selectedType === "Non-Technical") {
      matchesType = event.type === selectedType;
    }
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Header Section */}
      <section className="page-header">
        <div className="content-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1FAEE] goldman-bold drop-shadow-[0_0_30px_rgba(230,57,70,0.3)]">
              Our <span className="text-[#E63946]">Events</span>
            </h1>
            <div className="divider"></div>
            <p className="text-[#C5C6C7] text-base md:text-lg lg:text-xl inter-regular leading-relaxed">
              Explore all the exciting events happening at Altius 2025. Filter by department, type, or search for specific events.
            </p>
          </motion.div>

         {/* Filter Section (Without SpotlightCard) */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mt-10 md:mt-12 flex justify-center relative z-30"
>
  <div className="w-full max-w-5xl bg-[#1F2833]/40 backdrop-blur-md rounded-xl border border-[#457B9D]/20 shadow-lg shadow-[#457B9D]/10 p-6 md:p-8 lg:p-10">
    
    {/* Search Bar - Full Width */}
    <div className="mb-6 md:mb-8">
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search events..."
        size="lg"
        className="w-full"
      />
    </div>

    {/* Divider */}
    <div className="h-px bg-gradient-to-r from-transparent via-[#457B9D]/30 to-transparent mb-6 md:mb-8"></div>

    {/* Filter Dropdowns - Side by Side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      
      {/* Type Filter Dropdown */}
      <div className="relative z-[9999] overflow-visible">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <span className="text-[#C5C6C7] inter-semibold text-sm uppercase tracking-wider">
            Filter by Type
          </span>
        </div>
        <Select
          value={selectedType}
          onChange={(value) => setSelectedType(value as FilterType)}
          options={[
            { value: "All", label: "All Events" },
            { value: "Technical", label: "Technical" },
            { value: "Non-Technical", label: "Non-Technical" },
            { value: "Live", label: "🔴 Live Events" },
          ]}
          className="w-full"
        />
      </div>

      {/* Department Filter Dropdown */}
      <div className="relative z-[9999] overflow-visible">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <span className="text-[#C5C6C7] inter-semibold text-sm uppercase tracking-wider">
            Department
          </span>
        </div>
        <Select
          value={selectedDepartment}
          onChange={(value) => setSelectedDepartment(value)}
          options={departments.map((dept) => ({
            value: dept,
            label: dept === "All" ? "All Departments" : dept,
          }))}
          className="w-full"
        />
      </div>
    </div>
  </div>
</motion.div>

          {/* Active Filter Tags */}
          {(selectedDepartment !== "All" || selectedType !== "All") && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              <span className="text-[#C5C6C7] inter-medium text-xs uppercase tracking-wider">Active Filters:</span>
              
              <AnimatePresence mode="popLayout">
                {selectedType !== "All" && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={`
                      px-4 py-2 rounded-full inter-semibold text-sm flex items-center gap-2 backdrop-blur-sm
                      border-2 transition-all duration-300 hover:scale-105
                      ${selectedType === "Live" 
                        ? "bg-[#E63946]/20 text-[#E63946] border-[#E63946]/50 shadow-lg shadow-[#E63946]/20" 
                        : selectedType === "Technical"
                        ? "bg-[#457B9D]/20 text-[#457B9D] border-[#457B9D]/50 shadow-lg shadow-[#457B9D]/20"
                        : "bg-[#A8DADC]/20 text-[#1D3557] border-[#A8DADC]/50 shadow-lg shadow-[#A8DADC]/20"
                      }
                    `}
                  >
                    {selectedType === "Live" && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E63946] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E63946]"></span>
                      </span>
                    )}
                    <span className="font-bold">{selectedType}</span>
                    <button 
                      onClick={() => setSelectedType("All")}
                      className={`
                        rounded-full p-1 transition-all duration-200 hover:rotate-90
                        ${selectedType === "Live" 
                          ? "hover:bg-[#E63946]/30" 
                          : selectedType === "Technical"
                          ? "hover:bg-[#457B9D]/30"
                          : "hover:bg-[#A8DADC]/30"
                        }
                      `}
                      aria-label="Remove filter"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.span>
                )}
                
                {selectedDepartment !== "All" && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="px-4 py-2 rounded-full bg-[#457B9D]/20 text-[#457B9D] border-2 border-[#457B9D]/50 inter-semibold text-sm flex items-center gap-2 backdrop-blur-sm shadow-lg shadow-[#457B9D]/20 hover:scale-105 transition-all duration-300"
                  >
                    <span className="font-bold">{selectedDepartment}</span>
                    <button 
                      onClick={() => setSelectedDepartment("All")}
                      className="hover:bg-[#457B9D]/30 rounded-full p-1 transition-all duration-200 hover:rotate-90"
                      aria-label="Remove department filter"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F2833]/60 backdrop-blur-sm rounded-full border border-[#457B9D]/30">
              <span className="text-[#C5C6C7] inter-regular text-sm">
                Showing
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-[#F1FAEE] rounded-full font-bold inter-bold text-base">
                {filteredEvents.length}
              </span>
              <span className="text-[#C5C6C7] inter-regular text-sm">
                {filteredEvents.length === 1 ? 'event' : 'events'}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="section-spacing">
        <div className="content-container">
          {/* 6 Events per screen - 3 columns × 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                  className="h-full"
                >
                  <EventCard event={event} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#F1FAEE] mb-3 goldman-bold">
                No Events Found
              </h3>
              <p className="text-[#C5C6C7] inter-regular text-lg">
                Try adjusting your filters or search query
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
