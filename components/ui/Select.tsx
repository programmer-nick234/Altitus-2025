"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
}

export default function Select({
  label,
  options,
  value: controlledValue,
  onChange,
  error,
  disabled = false,
  required = false,
  fullWidth = true,
  placeholder = "Select an option",
  className = "",
  name,
  id,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === controlledValue);
  const selectId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      ref={dropdownRef}
      className={`${fullWidth ? "w-full" : "w-auto"} ${className} relative`}
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm md:text-base font-semibold text-[#F1FAEE] mb-2 inter-regular"
        >
          {label}
          {required && <span className="text-[#E63946] ml-1">*</span>}
        </label>
      )}

      {/* Select Button */}
      <button
        type="button"
        id={selectId}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`${
          fullWidth ? "w-full" : ""
        } py-3.5 px-5 bg-[#1F2833] text-[#F1FAEE] rounded-xl inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all border-2 ${
          error
            ? "border-[#E63946] focus:ring-[#E63946]"
            : isOpen
            ? "border-[#457B9D] ring-2 ring-[#457B9D]/30"
            : "border-transparent hover:border-[#457B9D]/30"
        } disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-between gap-3 backdrop-blur-sm`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${selectId}-error` : undefined}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? "text-[#F1FAEE]" : "text-[#C5C6C7]/70"}>
          {selectedOption?.label || placeholder}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-[#457B9D]" />
        </motion.div>
      </button>

      {/* Dropdown Menu - Opens Below */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-[#1F2833] border-2 border-[#457B9D]/50 rounded-xl shadow-2xl shadow-[#0B0C10]/50 backdrop-blur-xl overflow-hidden"
            style={{ top: "100%" }}
          >
            <div className="max-h-60 overflow-y-auto custom-scrollbar">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-5 py-3 text-left inter-regular transition-all duration-200 flex items-center justify-between group ${
                    option.value === controlledValue
                      ? "bg-[#457B9D]/30 text-[#F1FAEE] font-semibold"
                      : "text-[#C5C6C7] hover:bg-[#457B9D]/20 hover:text-[#F1FAEE]"
                  } ${index !== options.length - 1 ? "border-b border-[#457B9D]/10" : ""}`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{option.label}</span>
                  {option.value === controlledValue && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 text-[#457B9D]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      {error && (
        <motion.p
          id={`${selectId}-error`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-[#E63946] inter-regular"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
