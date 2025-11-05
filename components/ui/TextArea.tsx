"use client";

import { motion } from "framer-motion";
import { useState, forwardRef } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  fullWidth = true,
  rows = 4,
  maxLength,
  className = "",
  name,
  id,
  ...rest
}, ref) => {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const displayValue = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(newValue);
    }
  };

  const textAreaId = id || name || label?.toLowerCase().replace(/\s+/g, "-");

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
          htmlFor={textAreaId}
          className="block text-sm md:text-base font-semibold text-[#F1FAEE] mb-2 inter-regular text-center"
        >
          {label}
          {required && <span className="text-[#E63946] ml-1">*</span>}
        </label>
      )}

      {/* TextArea */}
      <div className="relative">
        <textarea
          ref={ref}
          id={textAreaId}
          name={name}
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          maxLength={maxLength}
          className={`${
            fullWidth ? "w-full" : ""
          } py-3 px-4 bg-[#1F2833] text-[#F1FAEE] rounded-xl inter-regular placeholder:text-[#C5C6C7]/50 focus:outline-none focus:ring-2 transition-all border-2 resize-none ${
            error
              ? "border-[#E63946] focus:ring-[#E63946]"
              : isFocused
              ? "border-[#457B9D] focus:ring-[#457B9D]"
              : "border-transparent hover:border-[#457B9D]/30"
          } disabled:opacity-50 disabled:cursor-not-allowed text-center`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${textAreaId}-error` : undefined}
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

      {/* Character Count & Error */}
      <div className="flex justify-center items-center gap-4 mt-2">
        {maxLength && (
          <span className="text-xs md:text-sm text-[#C5C6C7] inter-regular">
            {displayValue.toString().length}/{maxLength}
          </span>
        )}
        {error && (
          <motion.p
            id={`${textAreaId}-error`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-[#E63946] inter-regular"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
