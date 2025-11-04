"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { events, type Event } from "@/lib/mockData";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Get unique departments and types
  const departments = ["All", ...Array.from(new Set(events.map(e => e.department)))];
  const types = ["All", ...Array.from(new Set(events.map(e => e.type)))];

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === "All" || event.department === selectedDepartment;
    const matchesType = selectedType === "All" || event.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#F1FAEE] mb-3 md:mb-4 goldman-bold">
              Our <span className="text-[#E63946]">Events</span>
            </h1>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto mb-4 md:mb-6" />
            <p className="text-[#C5C6C7] text-sm md:text-base lg:text-lg max-w-2xl mx-auto inter-regular px-4">
              Explore all the exciting events happening at Altius 2025. Filter by department, type, or search for specific events.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-lg md:rounded-xl p-4 md:p-6 mb-6 md:mb-8"
          >
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-[#457B9D]" size={18} />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#1F2833] text-[#F1FAEE] rounded-lg pl-10 md:pl-12 pr-3 md:pr-4 py-2.5 md:py-3 text-sm md:text-base inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all"
                />
              </div>

              {/* Filter Toggle Button (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden glass rounded-lg px-4 py-2.5 text-[#F1FAEE] flex items-center justify-center space-x-2 hover:border-[#457B9D]/50 transition-all text-sm"
              >
                <Filter size={18} />
                <span className="inter-regular">Filters</span>
              </button>

              {/* Filters (Desktop) */}
              <div className="hidden md:flex gap-3 lg:gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-[#1F2833] text-[#F1FAEE] rounded-lg px-3 lg:px-4 py-2.5 lg:py-3 text-sm lg:text-base inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D] cursor-pointer min-w-[140px]"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-[#1F2833] text-[#F1FAEE] rounded-lg px-3 lg:px-4 py-2.5 lg:py-3 text-sm lg:text-base inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D] cursor-pointer min-w-[120px]"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden mt-4 space-y-4"
                >
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full bg-[#1F2833] text-[#F1FAEE] rounded-lg px-4 py-3 inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>

                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full bg-[#1F2833] text-[#F1FAEE] rounded-lg px-4 py-3 inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Active Filters Display */}
          {(selectedDepartment !== "All" || selectedType !== "All") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {selectedDepartment !== "All" && (
                <div className="flex items-center space-x-2 bg-[#1D3557] text-[#F1FAEE] px-3 py-1.5 rounded-full text-sm">
                  <span className="inter-regular">{selectedDepartment}</span>
                  <button onClick={() => setSelectedDepartment("All")}>
                    <X size={14} />
                  </button>
                </div>
              )}
              {selectedType !== "All" && (
                <div className="flex items-center space-x-2 bg-[#E63946] text-white px-3 py-1.5 rounded-full text-sm">
                  <span className="inter-regular">{selectedType}</span>
                  <button onClick={() => setSelectedType("All")}>
                    <X size={14} />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <p className="text-[#C5C6C7] inter-regular">
              Showing <span className="text-[#457B9D] font-semibold">{filteredEvents.length}</span> {filteredEvents.length === 1 ? 'event' : 'events'}
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="h-full"
                >
                  <EventCard event={event} onRegister={handleRegister} />
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
              <h3 className="text-2xl font-bold text-[#F1FAEE] mb-2 goldman-bold">
                No Events Found
              </h3>
              <p className="text-[#C5C6C7] inter-regular">
                Try adjusting your filters or search query
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-md w-full p-8 relative"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-[#C5C6C7] hover:text-[#F1FAEE] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-blue-red flex items-center justify-center text-2xl font-bold text-white">
                  {selectedEvent.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-[#F1FAEE] mb-2 goldman-bold">
                  {selectedEvent.name}
                </h3>
                <p className="text-[#C5C6C7] mb-6 inter-regular">
                  {selectedEvent.description}
                </p>

                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#1F2833] text-[#F1FAEE] rounded-lg px-4 py-3 inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#1F2833] text-[#F1FAEE] rounded-lg px-4 py-3 inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full bg-[#1F2833] text-[#F1FAEE] rounded-lg px-4 py-3 inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 gradient-blue-red text-white font-semibold rounded-lg inter-regular hover:shadow-lg hover:shadow-[#E63946]/20 transition-all"
                >
                  Complete Registration
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
