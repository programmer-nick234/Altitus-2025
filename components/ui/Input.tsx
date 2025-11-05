"use client";

import { motion } from "framer-motion";
import { useState, forwardRef } from "react";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  fullWidth = true,
  size = "md",
  icon,
  className = "",
  name,
  id,
  ...rest
}, ref) => {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const displayValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(newValue);
    }
  };

  const sizes = {
    sm: "py-2 px-3 text-sm",
    md: "py-3 px-4 text-base",
    lg: "py-4 px-5 text-lg",
  };

  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      className={`${fullWidth ? "w-full" : "w-auto"} ${className}`}
      animate={{
        scale: isFocused ? 1.01 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm md:text-base font-semibold text-[#F1FAEE] mb-2 inter-regular text-center"
        >
          {label}
          {required && <span className="text-[#E63946] ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#457B9D]">
            {icon}
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          type={type}
          id={inputId}
          name={name}
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`${sizes[size]} ${
            fullWidth ? "w-full" : ""
          } ${
            icon ? "pl-12" : ""
          } bg-[#1F2833] text-[#F1FAEE] rounded-xl inter-regular placeholder:text-[#C5C6C7]/50 focus:outline-none focus:ring-2 transition-all border-2 ${
            error
              ? "border-[#E63946] focus:ring-[#E63946]"
              : isFocused
              ? "border-[#457B9D] focus:ring-[#457B9D]"
              : "border-transparent hover:border-[#457B9D]/30"
          } disabled:opacity-50 disabled:cursor-not-allowed text-center`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...rest}
        />

        {/* Focus Glow */}
        {isFocused && !error && (
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              boxShadow: "0 0 20px rgba(69, 123, 157, 0.3)",
            }}
          />
        )}
      </div>

      {/* Error Message */}
      {error && (
        <motion.p
          id={`${inputId}-error`}
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
});

Input.displayName = "Input";

export default Input;
