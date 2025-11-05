"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  autoFocus?: boolean;
}

export default function SearchBar({
  placeholder = "Search...",
  value: controlledValue,
  onChange,
  onSearch,
  className = "",
  fullWidth = true,
  size = "md",
  autoFocus = false,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange("");
    } else {
      setInternalValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  const sizes = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
  };

  return (
    <motion.div
      className={`relative ${fullWidth ? "w-full" : "w-auto"} ${className}`}
      animate={{
        scale: isFocused ? 1.02 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`${sizes[size]} ${value ? 'pr-12' : ''} ${
          fullWidth ? "w-full" : ""
        } bg-[#1F2833] text-[#F1FAEE] rounded-xl inter-regular placeholder:text-[#C5C6C7]/50 focus:outline-none focus:ring-2 focus:ring-[#E63946] transition-all duration-300 border-2 ${
          isFocused ? "border-[#E63946] shadow-lg shadow-[#E63946]/20" : "border-transparent"
        } hover:border-[#457B9D]/50 backdrop-blur-sm`}
        aria-label={placeholder}
      />

      {/* Clear Button */}
      {value && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleClear}
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-[#C5C6C7] hover:text-[#E63946] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E63946] rounded-full p-1 z-10`}
          aria-label="Clear search"
          type="button"
        >
          <X size={iconSizes[size]} />
        </motion.button>
      )}

      {/* Glow Effect on Focus */}
      {isFocused && (
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            boxShadow: "0 0 20px rgba(230, 57, 70, 0.3)",
          }}
        />
      )}
    </motion.div>
  );
}
