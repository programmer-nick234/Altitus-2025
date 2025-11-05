"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { SearchBar, Select, Badge, Modal, Button, Input } from "@/components/ui";
import { events, type Event } from "@/lib/mockData";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 min-h-[50vh] flex items-center">
        <div className="content-container w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F1FAEE] goldman-bold drop-shadow-[0_0_30px_rgba(230,57,70,0.3)]">
              Our <span className="text-[#E63946]">Events</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto rounded-full" />
            <p className="text-[#C5C6C7] text-xl md:text-2xl max-w-3xl mx-auto inter-regular leading-relaxed px-4">
              Explore all the exciting events happening at Altius 2025. Filter by department, type, or search for specific events.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl p-6 md:p-8 mb-10 max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Search */}
              <div className="flex-1">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search events..."
                  className="w-full"
                />
              </div>

              {/* Filter Toggle Button (Mobile) */}
              <Button
                onClick={() => setShowFilters(!showFilters)}
                variant="secondary"
                className="md:hidden"
                icon={<Filter size={18} />}
              >
                Filters
              </Button>

              {/* Filters (Desktop) */}
              <div className="hidden md:flex gap-3 lg:gap-4">
                <Select
                  value={selectedDepartment}
                  onChange={(value) => setSelectedDepartment(value)}
                  options={departments.map(dept => ({ value: dept, label: dept }))}
                  className="min-w-[140px]"
                />

                <Select
                  value={selectedType}
                  onChange={(value) => setSelectedType(value)}
                  options={types.map(type => ({ value: type, label: type }))}
                  className="min-w-[120px]"
                />
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
                  <Select
                    value={selectedDepartment}
                    onChange={(value) => setSelectedDepartment(value)}
                    options={departments.map(dept => ({ value: dept, label: dept }))}
                    className="w-full"
                  />

                  <Select
                    value={selectedType}
                    onChange={(value) => setSelectedType(value)}
                    options={types.map(type => ({ value: type, label: type }))}
                    className="w-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Active Filters Display */}
          {(selectedDepartment !== "All" || selectedType !== "All") && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {selectedDepartment !== "All" && (
                <Badge variant="info" onRemove={() => setSelectedDepartment("All")}>
                  {selectedDepartment}
                </Badge>
              )}
              {selectedType !== "All" && (
                <Badge variant="danger" onRemove={() => setSelectedType("All")}>
                  {selectedType}
                </Badge>
              )}
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 text-center"
          >
            <p className="text-[#C5C6C7] inter-regular text-lg">
              Showing <span className="text-[#457B9D] font-semibold">{filteredEvents.length}</span> {filteredEvents.length === 1 ? 'event' : 'events'}
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="card-grid card-grid-3 max-w-7xl mx-auto">
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
      {selectedEvent && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.name}
        >
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full gradient-blue-red flex items-center justify-center text-2xl font-bold text-white">
              {selectedEvent.name.charAt(0)}
            </div>
            
            <p className="text-[#C5C6C7] inter-regular">
              {selectedEvent.description}
            </p>

            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                required
              />
              <Input
                type="tel"
                placeholder="Your Phone"
                required
              />
            </div>

            <Button
              variant="primary"
              fullWidth
              onClick={() => setSelectedEvent(null)}
            >
              Complete Registration
            </Button>
          </div>
        </Modal>
      )}

      <Footer />
    </div>
  );
}
