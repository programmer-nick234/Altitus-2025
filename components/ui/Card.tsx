"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "glass" | "gradient" | "outline";
  padding?: "sm" | "md" | "lg" | "xl";
  hover?: boolean;
  centered?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = "glass",
  padding = "md",
  hover = true,
  centered = true,
  className = "",
  onClick,
}: CardProps) {
  const variants = {
    default: "bg-[#1F2833] border border-[#457B9D]/20",
    glass: "glass",
    gradient: "bg-gradient-to-br from-[#1D3557] to-[#457B9D]",
    outline: "border-2 border-[#457B9D] bg-transparent",
  };

  const paddings = {
    sm: "p-4 md:p-5",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-10 lg:p-12",
    xl: "p-10 md:p-12 lg:p-16",
  };

  const hoverEffects = hover
    ? "hover:border-[#E63946]/40 hover:shadow-[0_0_30px_rgba(230,57,70,0.15)] hover:-translate-y-1"
    : "";

  const centerStyles = centered
    ? "flex flex-col items-center justify-center text-center"
    : "";

  return (
    <motion.div
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.3 }}
      className={`${variants[variant]} ${paddings[padding]} ${hoverEffects} ${centerStyles} rounded-2xl transition-all duration-300 ${className} ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {children}
    </motion.div>
  );
}
