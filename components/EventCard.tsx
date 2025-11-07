"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import type { Event } from "@/lib/mockData";
import { getEventStatus, getCountdown } from "@/lib/eventUtils";
import SpotlightCard from "./SpotlightCard";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const currentTime = new Date();
  const status = getEventStatus(event, currentTime);
  const countdown = getCountdown(event, currentTime);
  const [imageError, setImageError] = useState(false);

  // Status badge styles
  const getStatusBadge = () => {
    switch (status) {
      case "live":
        return (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1.5 bg-[#E63946] text-white text-xs font-bold rounded-full inter-bold flex items-center gap-1.5 shadow-lg animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              LIVE NOW
            </span>
          </div>
        );
      case "upcoming":
        return countdown ? (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1.5 bg-[#457B9D] text-white text-xs font-semibold rounded-full inter-semibold shadow-lg">
              {countdown}
            </span>
          </div>
        ) : null;
      case "completed":
        return (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-3 py-1.5 bg-[#C5C6C7]/80 text-[#1F2833] text-xs font-semibold rounded-full inter-semibold shadow-lg">
              Completed
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <SpotlightCard 
        className="relative overflow-hidden h-full flex flex-col p-0"
        spotlightColor={status === "live" ? "rgba(230, 57, 70, 0.25)" : "rgba(69, 123, 157, 0.2)"}
      >
        {/* Poster Image Section */}
        <div className="h-56 md:h-64 bg-gradient-to-br from-[#1D3557] to-[#457B9D] relative overflow-hidden flex-shrink-0">
          {getStatusBadge()}
          
          {/* Display poster image if available */}
          {event.poster && !imageError ? (
            <>
              <Image
                src={event.poster}
                alt={event.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
                priority={false}
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/90 via-[#0B0C10]/40 to-transparent" />
            </>
          ) : (
            <>
              {/* Fallback design when no poster */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-7xl md:text-8xl font-bold text-white/20 goldman-bold">
                  {event.name.charAt(0)}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2833]/80 to-transparent" />
            </>
          )}
          
          {/* Event name overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white goldman-bold drop-shadow-lg line-clamp-2">
              {event.name}
            </h3>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          {/* Department and Type Badges */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
            <span className="px-3 py-1 bg-[#1D3557]/30 text-[#457B9D] text-xs font-semibold rounded-full inter-regular">
              {event.department}
            </span>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full inter-regular ${event.type === "Technical" ? "bg-[#1D3557]/30 text-[#457B9D]" : "bg-[#E63946]/10 text-[#E63946]"}`}>
              {event.type}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#C5C6C7] text-sm leading-relaxed inter-regular line-clamp-3 flex-grow text-center mb-4">
            {event.description}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center justify-center gap-2 text-[#C5C6C7] text-sm">
              <Calendar size={14} className="text-[#457B9D]" />
              <span className="inter-regular">
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#C5C6C7] text-sm">
              <Clock size={14} className="text-[#457B9D]" />
              <span className="inter-regular">{event.startTime} - {event.endTime}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#C5C6C7] text-sm">
              <MapPin size={14} className="text-[#457B9D]" />
              <span className="inter-regular">{event.venue}</span>
            </div>
          </div>

          {/* Register Button */}
          {status !== "completed" && (
            <motion.a
              href={event.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                w-full py-3 rounded-lg font-semibold inter-bold text-sm flex items-center justify-center gap-2 transition-all duration-300
                ${status === "live" 
                  ? "bg-gradient-to-r from-[#E63946] to-[#E63946]/80 text-white shadow-lg shadow-[#E63946]/30 hover:shadow-[#E63946]/50" 
                  : "bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white shadow-lg shadow-[#457B9D]/30 hover:shadow-[#457B9D]/50"
                }
              `}
            >
              {status === "live" ? "Register Now - Live!" : "Register Now"}
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
