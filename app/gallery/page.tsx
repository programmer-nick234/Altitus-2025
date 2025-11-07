"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight, Pause, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Masonry from "@/components/Masonry";
import Image from "next/image";

// Gallery data structure
interface MediaItem {
  id: string;
  img: string;
  type: "photo" | "video";
  title: string;
  event: string;
  date: string;
  category: string;
  height: number;
}

// Gallery data - All images from public/gallery folder with accurate aspect ratios
const galleryItems: MediaItem[] = [
  { 
    id: "1", 
    img: "/gallery/poster-main.jpeg", 
    type: "photo", 
    title: "Altius 2024 Official Poster", 
    event: "Main Event Poster", 
    date: "2024-11-10", 
    category: "Promotional", 
    height: 711  // 899x1599 - Portrait poster
  },
  { 
    id: "2", 
    img: "/gallery/altius-inougration.jpeg", 
    type: "photo", 
    title: "Inauguration Ceremony", 
    event: "Opening Day", 
    date: "2024-11-10", 
    category: "Ceremony",
    height: 300  // 1600x1200 - Landscape photo
  },
  { 
    id: "3", 
    img: "/gallery/speech.jpeg", 
    type: "photo", 
    title: "Keynote Speech", 
    event: "Opening Address", 
    date: "2024-11-10", 
    category: "Ceremony",
    height: 533  // 1200x1600 - Portrait photo
  },
  { 
    id: "4", 
    img: "/gallery/speech-2.jpeg", 
    type: "photo", 
    title: "Guest Speaker", 
    event: "Special Address", 
    date: "2024-11-10", 
    category: "Ceremony",
    height: 300  // 4160x3120 - Landscape photo
  },
  { 
    id: "5", 
    img: "/gallery/team.jpeg", 
    type: "photo", 
    title: "Organizing Team", 
    event: "Team Photo", 
    date: "2024-11-10", 
    category: "Behind The Scenes",
    height: 300  // 4032x3024 - Landscape photo
  },
  { 
    id: "6", 
    img: "/gallery/team-2.jpeg", 
    type: "photo", 
    title: "Core Committee", 
    event: "Team Photo", 
    date: "2024-11-10", 
    category: "Behind The Scenes",
    height: 300  // 4160x3120 - Landscape photo
  },
  { 
    id: "7", 
    img: "/gallery/promo launching.jpeg", 
    type: "photo", 
    title: "Event Promo Launch", 
    event: "Marketing Campaign", 
    date: "2024-11-10", 
    category: "Promotional",
    height: 533  // 3120x4160 - Portrait photo
  },
  { 
    id: "8", 
    img: "/gallery/poster-back.jpeg", 
    type: "photo", 
    title: "Event Details Poster", 
    event: "Information Board", 
    date: "2024-11-10", 
    category: "Promotional",
    height: 711  // 899x1599 - Portrait poster
  },
  { 
    id: "9", 
    img: "/gallery/altius-inivites.jpeg", 
    type: "photo", 
    title: "Official Invitations", 
    event: "Invitation Design", 
    date: "2024-11-10", 
    category: "Promotional",
    height: 566  // 904x1280 - Portrait design
  },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Handle video playback
  useEffect(() => {
    if (selectedIndex !== null && galleryItems[selectedIndex].type === "video") {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  }, [isPlaying, selectedIndex]);

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setIsPlaying(false);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < galleryItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setIsPlaying(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") {
        setSelectedIndex(null);
        setIsPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedIndex]);

  // Map gallery items to masonry format
  const masonryItems = galleryItems.map((item, index) => ({
    ...item,
    onClick: () => setSelectedIndex(index)
  }));

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <Navbar />

      {/* Header Section */}
      <section className="page-header relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E63946]/20 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#457B9D]/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="content-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="section-title"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F1FAEE] goldman-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Altius 2024 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#457B9D]">Memories</span>
            </motion.h1>
            <div className="divider"></div>
            <motion.p 
              className="text-[#C5C6C7] text-lg md:text-xl lg:text-2xl inter-regular leading-relaxed max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Relive the incredible moments from our past event. Experience the energy, passion, and innovation that made Altius 2024 unforgettable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="section-spacing relative">
        <div className="content-container">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.98}
            blurToFocus={true}
          />
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <LightboxModal
            item={galleryItems[selectedIndex]}
            onClose={() => {
              setSelectedIndex(null);
              setIsPlaying(false);
            }}
            onPrevious={handlePrevious}
            onNext={handleNext}
            hasPrevious={selectedIndex > 0}
            hasNext={selectedIndex < galleryItems.length - 1}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            videoRef={videoRef}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

// Lightbox Modal Component
function LightboxModal({
  item,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  isPlaying,
  setIsPlaying,
  videoRef,
}: {
  item: MediaItem;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E63946] hover:border-[#E63946] transition-all duration-300 shadow-2xl"
      >
        <X size={24} />
      </motion.button>

      {/* Download Button */}
      <motion.a
        href={item.img}
        download={`${item.title}.jpg`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-6 right-24 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#457B9D] hover:border-[#457B9D] transition-all duration-300 shadow-2xl"
      >
        <Download size={22} />
      </motion.a>

      {/* Navigation Buttons */}
      {hasPrevious && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-6 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#457B9D] hover:border-[#457B9D] transition-all duration-300 shadow-2xl"
        >
          <ChevronLeft size={28} />
        </motion.button>
      )}

      {hasNext && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#457B9D] hover:border-[#457B9D] transition-all duration-300 shadow-2xl"
        >
          <ChevronRight size={28} />
        </motion.button>
      )}

      {/* Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-6xl w-full"
      >
        {/* Media Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-2xl shadow-[#E63946]/20">
          {item.type === "video" ? (
            <div className="relative w-full h-full bg-gradient-to-br from-[#1D3557] to-[#457B9D]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={false}
              >
                <source src={item.img} type="video/mp4" />
              </video>

              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <motion.div
                  animate={{ opacity: isPlaying ? 0 : 1 }}
                  className="w-24 h-24 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl"
                >
                  {isPlaying ? (
                    <Pause className="text-[#E63946]" size={40} />
                  ) : (
                    <Play className="text-[#E63946] ml-2" size={40} fill="#E63946" />
                  )}
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full bg-[#0B0C10]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          )}
        </div>

        {/* Info Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white goldman-bold mb-3">
            {item.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-gray-300 inter-regular text-lg">
            <span className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.type === "video" ? "bg-[#E63946]" : "bg-[#457B9D]"}`} />
              {item.event}
            </span>
            <span className="text-gray-500">•</span>
            <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="text-gray-500">•</span>
            <span className="px-3 py-1 bg-[#457B9D]/20 text-[#457B9D] rounded-full text-sm font-semibold">
              {item.category}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
