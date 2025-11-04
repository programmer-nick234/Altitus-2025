"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon, Video as VideoIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { gallery, type GalleryItem } from "@/lib/mockData";

export default function GalleryPage() {
  const [filter, setFilter] = useState<"all" | "photo" | "video">("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredGallery = gallery.filter(item => 
    filter === "all" ? true : item.type === filter
  );

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
              Event <span className="text-[#E63946]">Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D3557] to-[#E63946] mx-auto mb-6" />
            <p className="text-[#C5C6C7] text-lg max-w-2xl mx-auto inter-regular">
              Relive the amazing moments from Altius 2025. Browse through photos and videos from all our events.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="glass rounded-xl p-2 inline-flex space-x-2">
              {[
                { value: "all", label: "All", icon: null },
                { value: "photo", label: "Photos", icon: ImageIcon },
                { value: "video", label: "Videos", icon: VideoIcon },
              ].map(({ value, label, icon: Icon }) => (
                <motion.button
                  key={value}
                  onClick={() => setFilter(value as typeof filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg inter-regular font-medium transition-all flex items-center space-x-2 ${
                    filter === value
                      ? "gradient-blue-red text-white shadow-lg"
                      : "text-[#C5C6C7] hover:text-[#F1FAEE] hover:bg-[#1F2833]"
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <p className="text-[#C5C6C7] inter-regular text-center">
              Showing <span className="text-[#457B9D] font-semibold">{filteredGallery.length}</span> {filter === "all" ? "items" : filter === "photo" ? "photos" : "videos"}
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="break-inside-avoid mb-6"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedItem(item)}
                    className="glass rounded-xl overflow-hidden cursor-pointer group hover:border-[#457B9D]/50 transition-all"
                  >
                    {/* Image/Video Placeholder */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1D3557] to-[#457B9D] overflow-hidden">
                      {/* Placeholder Pattern */}
                      <div className="absolute inset-0 bg-black/20" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#E63946]/20 to-transparent"
                        whileHover={{ opacity: 0.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {item.type === "video" ? (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                          >
                            <Play className="text-[#E63946] ml-1" size={24} fill="#E63946" />
                          </motion.div>
                        ) : (
                          <span className="text-6xl font-bold text-white/10 goldman-bold">
                            {item.title.charAt(0)}
                          </span>
                        )}
                      </div>

                      {/* Type Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full flex items-center space-x-1">
                        {item.type === "video" ? (
                          <VideoIcon size={14} className="text-white" />
                        ) : (
                          <ImageIcon size={14} className="text-white" />
                        )}
                        <span className="text-white text-xs inter-regular capitalize">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#F1FAEE] mb-1 goldman-bold group-hover:text-[#457B9D] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-[#C5C6C7]">
                        <span className="inter-regular">{item.event}</span>
                        <span className="inter-regular">
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredGallery.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-bold text-[#F1FAEE] mb-2 goldman-bold">
                No {filter === "all" ? "Items" : filter === "photo" ? "Photos" : "Videos"} Found
              </h3>
              <p className="text-[#C5C6C7] inter-regular">
                Check back later for more content
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full glass flex items-center justify-center text-[#F1FAEE] hover:text-[#E63946] transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              {/* Media Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1D3557] to-[#457B9D] mb-4">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedItem.type === "video" ? (
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer">
                      <Play className="text-[#E63946] ml-1" size={32} fill="#E63946" />
                    </div>
                  ) : (
                    <span className="text-9xl font-bold text-white/20 goldman-bold">
                      {selectedItem.title.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="glass rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-[#F1FAEE] mb-2 goldman-bold">
                  {selectedItem.title}
                </h2>
                <div className="flex items-center space-x-4 text-[#C5C6C7] inter-regular">
                  <span className="flex items-center space-x-2">
                    {selectedItem.type === "video" ? <VideoIcon size={16} /> : <ImageIcon size={16} />}
                    <span className="capitalize">{selectedItem.type}</span>
                  </span>
                  <span>•</span>
                  <span>{selectedItem.event}</span>
                  <span>•</span>
                  <span>
                    {new Date(selectedItem.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
