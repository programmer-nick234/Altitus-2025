"use client";

import { motion } from "framer-motion";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spinner" | "dots" | "pulse";
  color?: "primary" | "secondary" | "white";
  className?: string;
  text?: string;
}

export default function Loader({
  size = "md",
  variant = "spinner",
  color = "primary",
  className = "",
  text,
}: LoaderProps) {
  const sizes = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  const colors = {
    primary: "#E63946",
    secondary: "#457B9D",
    white: "#F1FAEE",
  };

  const loaderSize = sizes[size];
  const loaderColor = colors[color];

  if (variant === "spinner") {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: loaderSize,
            height: loaderSize,
            border: `3px solid ${loaderColor}20`,
            borderTopColor: loaderColor,
            borderRadius: "50%",
          }}
        />
        {text && (
          <p className="text-sm md:text-base text-[#C5C6C7] inter-regular text-center">
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: ["0%", "-50%", "0%"],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                width: loaderSize / 3,
                height: loaderSize / 3,
                backgroundColor: loaderColor,
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
        {text && (
          <p className="text-sm md:text-base text-[#C5C6C7] inter-regular text-center">
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{
            width: loaderSize,
            height: loaderSize,
            backgroundColor: loaderColor,
            borderRadius: "50%",
          }}
        />
        {text && (
          <p className="text-sm md:text-base text-[#C5C6C7] inter-regular text-center">
            {text}
          </p>
        )}
      </div>
    );
  }

  return null;
}
