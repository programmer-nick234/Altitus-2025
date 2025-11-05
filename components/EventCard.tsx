"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Radio } from "lucide-react";
import type { Event } from "@/lib/mockData";
import { Button } from "@/components/ui";

interface EventCardProps {
  event: Event;
  onRegister?: (event: Event) => void;
}

export default function EventCard({ event, onRegister }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#1F2833] rounded-lg md:rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-[#457B9D]/20 border border-[#457B9D]/10 hover:border-[#457B9D]/30 transition-all h-full flex flex-col"
    >
      {/* Live Badge */}
      {event.isLive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 flex items-center space-x-1.5 md:space-x-2 bg-[#E63946] text-white px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold shadow-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Radio size={12} className="md:w-[14px] md:h-[14px]" />
          </motion.div>
          <span className="inter-regular">LIVE NOW</span>
        </motion.div>
      )}

      {/* Image Placeholder */}
      <div className="h-40 md:h-48 bg-gradient-to-br from-[#1D3557] to-[#457B9D] relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#E63946]/20 to-transparent"
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl md:text-6xl font-bold text-white/10 goldman-bold">
            {event.name.charAt(0)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="event-card-content card-inner-spacing">
        {/* Department Badge */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="px-3 md:px-4 py-1.5 bg-[#1D3557]/50 text-[#457B9D] text-xs font-semibold rounded-full inter-regular">
            {event.department}
          </span>
          <span className="px-3 md:px-4 py-1.5 bg-[#E63946]/10 text-[#E63946] text-xs font-semibold rounded-full inter-regular">
            {event.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#F1FAEE] goldman-bold group-hover:text-[#457B9D] transition-colors line-clamp-2 text-center px-2">
          {event.name}
        </h3>

        {/* Description */}
        <p className="text-[#C5C6C7] text-sm md:text-base leading-relaxed inter-regular line-clamp-3 flex-grow text-center px-2 max-w-prose mx-auto">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 md:space-y-3 w-full">
          <div className="flex items-center justify-center space-x-2 text-[#C5C6C7] text-sm md:text-base">
            <Calendar size={16} className="text-[#457B9D] flex-shrink-0" />
            <span className="inter-regular">
              {new Date(event.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[#C5C6C7] text-sm md:text-base">
            <Clock size={16} className="text-[#457B9D] flex-shrink-0" />
            <span className="inter-regular">{event.time}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-[#C5C6C7] text-sm md:text-base">
            <MapPin size={16} className="text-[#457B9D] flex-shrink-0" />
            <span className="inter-regular">{event.venue}</span>
          </div>
        </div>

        {/* Register Button */}
        <Button
          variant="gradient"
          size="lg"
          fullWidth
          onClick={() => onRegister?.(event)}
        >
          {event.isLive ? "Join Now" : "Register"}
        </Button>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at center, rgba(69, 123, 157, 0.1) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
