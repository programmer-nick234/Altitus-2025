"use client";

import { motion } from "framer-motion";
import { LucideIcon, X } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  onRemove?: () => void;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  onRemove,
  className = "",
}: BadgeProps) {
  const variants = {
    primary: "bg-[#E63946]/10 text-[#E63946] border-[#E63946]/30",
    secondary: "bg-[#1D3557]/30 text-[#457B9D] border-[#457B9D]/30",
    success: "bg-green-500/10 text-green-400 border-green-500/30",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    danger: "bg-red-500/10 text-red-400 border-red-500/30",
    info: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center justify-center gap-1.5 font-semibold rounded-full border inter-regular ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon size={iconSizes[size]} />}
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:opacity-70 transition-opacity"
          aria-label="Remove"
        >
          <X size={iconSizes[size]} />
        </button>
      )}
    </motion.span>
  );
}
