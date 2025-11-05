"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  ariaLabel?: string;
  loading?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
  ariaLabel,
  loading = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inter-regular";

  const variants = {
    primary:
      "bg-[#E63946] text-white hover:bg-[#C5283D] shadow-lg shadow-[#E63946]/30 hover:shadow-xl hover:shadow-[#E63946]/50 focus:ring-[#E63946]",
    secondary:
      "bg-[#1D3557] text-white hover:bg-[#457B9D] shadow-lg shadow-[#1D3557]/30 hover:shadow-xl hover:shadow-[#457B9D]/50 focus:ring-[#1D3557]",
    outline:
      "border-2 border-[#457B9D] text-[#457B9D] hover:bg-[#457B9D]/10 hover:border-[#E63946] hover:text-[#E63946] focus:ring-[#457B9D]",
    ghost:
      "text-[#C5C6C7] hover:bg-white/5 hover:text-[#F1FAEE] focus:ring-[#457B9D]",
    gradient:
      "bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#1D3557] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-xl shadow-[#457B9D]/40 hover:shadow-2xl hover:shadow-[#457B9D]/60 focus:ring-[#457B9D]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.03, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
    >
      {/* Shimmer Effect for gradient */}
      {variant === "gradient" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
        />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="relative z-10">{icon}</span>
          )}
          
          <span className="relative z-10">{children}</span>
          
          {icon && iconPosition === "right" && (
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {icon}
            </motion.span>
          )}
        </>
      )}
    </motion.button>
  );
}
