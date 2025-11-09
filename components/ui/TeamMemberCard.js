// /components/TeamMemberCard.js
"use client";

import { motion } from "framer-motion";
// We'll import icons for the social links
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

// This variant is for the card itself, to hook into the parent's stagger
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

// A helper object to map social keys to icons
const iconMap = {
  linkedin: <FaLinkedin />,
  github: <FaGithub />,
  twitter: <FaTwitter />,
  website: <FaGlobe />,
};

export const TeamMemberCard = ({ person }) => {
  return (
    <motion.div
      variants={cardVariants} // <-- This makes each card fade-up
      whileHover={{
        scale: 1.08,
        rotateX: 3,
        rotateY: -3,
        transition: { type: "spring", stiffness: 180, damping: 12 },
      }}
      className="relative group w-[240px] h-[300px]"
    >
      {/* Card */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#0B0C10]/80 to-[#1F2833]/90 shadow-[0_0_25px_rgba(230,57,70,0.2)] border border-[#E63946]/10 hover:border-[#E63946]/30 transition-all duration-500">
        
        {/* Image Layer */}
        <div className="relative w-full h-[72%] overflow-hidden">
          <img
            src={person.imageUrl}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) =>
              (e.currentTarget.src =
                "https://placehold.co/240x200/1F2833/F1FAEE?text=Image")
            }
          />

          {/* === IMPROVISATION === */}
          {/* I've added the social links inside your existing hover overlay.
            I also added flex utilities to center them.
          */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/90 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700 flex justify-center items-center gap-4">
            {person.socials &&
              Object.entries(person.socials).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8DADC] hover:text-[#E63946] text-3xl transition-colors"
                  aria-label={`Visit ${person.name}'s ${key}`}
                >
                  {iconMap[key] || <FaGlobe />}
                </a>
              ))}
          </div>
          {/* === END IMPROVISATION === */}

        </div>

        {/* Text Info */}
        <div className="absolute bottom-0 w-full py-3 px-4 text-center backdrop-blur-md bg-[#0B0C10]/70 border-t border-[#E63946]/20">
          <h4 className="text-lg font-bold text-[#F1FAEE] mb-1 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
            {person.name}
          </h4>
          <p className="text-sm text-[#C5C6C7] tracking-wide leading-tight">
            {person.role}
          </p>
        </div>

        {/* Glow ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{
            boxShadow: [
              "0 0 0 rgba(230,57,70,0)",
              "0 0 30px rgba(230,57,70,0.3)",
              "0 0 0 rgba(230,57,70,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Floating Animation (Unchanged) */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-t from-[#E63946]/5 to-transparent blur-[40px]"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};