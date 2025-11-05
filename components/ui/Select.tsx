"use client";

import { motion } from "framer-motion";

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
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const selectId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      className={`${fullWidth ? "w-full" : "w-auto"} ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm md:text-base font-semibold text-[#F1FAEE] mb-2 inter-regular text-center"
        >
          {label}
          {required && <span className="text-[#E63946] ml-1">*</span>}
        </label>
      )}

      {/* Select */}
      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={controlledValue}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className={`${
            fullWidth ? "w-full" : ""
          } py-3 px-4 pr-10 bg-[#1F2833] text-[#F1FAEE] rounded-xl inter-regular focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all border-2 ${
            error
              ? "border-[#E63946] focus:ring-[#E63946]"
              : "border-transparent hover:border-[#457B9D]/30"
          } disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer appearance-none text-center`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${selectId}-error` : undefined}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-[#457B9D]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <motion.p
          id={`${selectId}-error`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-[#E63946] inter-regular text-center"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}
